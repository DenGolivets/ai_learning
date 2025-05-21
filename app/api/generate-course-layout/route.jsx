import { db } from "@/config/db";
import { coursesTable } from "@/config/schema";
import { auth, currentUser } from "@clerk/nextjs/server";
import { GoogleGenAI } from "@google/genai";
import axios from "axios";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

const PROMPT = `Generate Learning Course depends on following details. In which Make sure to  add Course Name,
Description, Chapter Name,Banner Image (Create a modern, flat-style 2D digital illustration representing user
Topic: Include UI/UX elements such as mockup screens, text blocks, icons, buttons, and creative workspace tools.
Add symbolic elements related to User Course from Schema by course name, like sticky notes, design components, and visual aids. Use a
vibrant color palette(blues, purples, oranges) with a clean, proffesional look. The illustration should feel
creative, tech-savvy, and educational, ideal for visualizing concepts in user Course) for Course Banner in
3D format, Topic under each chapters, Duration for each chapters etc, in JSON format ONLY.

Schema:

{
  "course": {
    "name": "string",
    "description": "string",
    "category": "string",
    "level": "string",
    "includeVideo": "boolean",
    "noOfChapters": "number",
    "bannerImagePrompt": "string",
    "chapters": [
      {
        "chapterName": "string",
        "duration": "string",
        "topics": [
          "string"  
        ],
      }
    ]
  }
}
, User Input:
`;

export const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });

export async function POST(req) {
  const { courseId, ...formData } = await req.json();

  const user = await currentUser();

  const { has } = await auth();
  const hasPremiumAccess = has({ plan: "starter" });
  
  const config = { responseMimeType: "text/plain" };
  const model = "gemma-3-27b-it";
  const contents = [
    {
      role: "user",
      parts: [
        {
          text: PROMPT + JSON.stringify(formData),
        },
      ],
    },
  ];

  // If user already created any course?
  if (!hasPremiumAccess) {
    const result = await db
      .select()
      .from(coursesTable)
      .where(eq(coursesTable.userEmail, user?.primaryEmailAddress?.emailAddress));

    if (result?.length >= 1) {
      return NextResponse.json({
        'resp': "Limit Exceeded",
        'message': "You have already created a course. Please upgrade to Starter or Premium plan to create more courses.",
      });
    }
  }

  const response = await ai.models.generateContent({
    model,
    contents,
    config,
  });

  const rawResp = response?.candidates[0]?.content.parts[0]?.text;
  const rawJson = rawResp.replace("```json", "").replace("```", "");
  const jsonResp = JSON.parse(rawJson);
  const imagePrompt = jsonResp.course?.bannerImagePrompt

  console.log(jsonResp);

  // Generate Image
  const bannerImageUrl = await generateImage(imagePrompt);
  // Save to DB
  const result = await db.insert(coursesTable).values({
    ...formData,
    courseJson: jsonResp,
    userEmail: user?.primaryEmailAddress?.emailAddress,
    cid: courseId,
    bannerImageUrl: bannerImageUrl,
  });

  return NextResponse.json({ courseId: courseId });
}

const generateImage = async (imagePrompt) => {
  const BASE_URL = "https://aigurulab.tech";
  const result = await axios.post(
    BASE_URL + "/api/generate-image",
    {
      width: 1024,
      height: 1024,
      input: imagePrompt,
      model: "flux", //'flux'
      aspectRatio: "16:9",
    },
    {
      headers: {
        "x-api-key": process?.env?.AI_GURU_LAB_API,
        "Content-Type": "application/json",
      },
    }
  );
  console.log(result.data.image); //Output Result: Base 64 Image

  return result.data.image;
};
