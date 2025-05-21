import { NextResponse } from "next/server";
import { ai } from "../generate-course-layout/route";
import axios from "axios";
import { db } from "@/config/db";
import { coursesTable } from "@/config/schema";
import { eq } from "drizzle-orm";

const PROMPT = `Depends on Chapter name and Topic Generate content for each topic in HTML and give response
  in JSON format.
  
  Schema: {
    chapterName: <>,
    {
      topic: <>,
      content: <>
    }
  }
  : User Input:
  `;

export async function POST(req) {
  const { courseJson, courseTitle, courseId } = await req.json();

  const promises = courseJson?.chapters?.map(async (chapter) => {
    const config = {
      responseMimeType: "text/plain",
    };
    const model = "gemma-3-27b-it";
    const contents = [
      {
        role: "user",
        parts: [
          {
            text: PROMPT + JSON.stringify(chapter),
          },
        ],
      },
    ];

    const response = await ai.models.generateContent({
      model,
      config,
      contents,
    });
    // console.log(response.candidates[0].content.parts[0].text);

    const rawResp = response.candidates[0].content.parts[0].text;
    const rawJson = rawResp.replace("```json", "").replace("```", "").trim();
    const jsonResp = JSON.parse(rawJson);

    // Generate Youtube video for each topic
    const youtubeData = await getYoutubeVideo(chapter?.chapterName);
    console.log({
      youtubeVideo: youtubeData,
      courseData: jsonResp,
    });

    return {
      youtubeVideo: youtubeData,
      courseData: jsonResp,
    };
  });

  const courseContent = await Promise.all(promises);

  // Save db
  const dbResp = await db.update(coursesTable).set({
    courseContent: courseContent,
  }).where(eq(coursesTable.cid, courseId));

  return NextResponse.json({
    courseName: courseTitle,
    courseContent: courseContent,
  });
}

const YOUTUBE_BASE_URL = "https://www.googleapis.com/youtube/v3/search";
const getYoutubeVideo = async (topic) => {
  const params = {
    part: "snippet",
    q: topic,
    type: "video",
    maxResult: 4,
    key: process.env.YOUTUBE_API_KEY,
  };
  const resp = await axios.get(YOUTUBE_BASE_URL, { params });
  const youtubeVidepListResp = resp.data.items;
  const youtubeVideoList = [];
  youtubeVidepListResp.forEach((item) => {
    const data = {
      title: item?.snippet?.title,
      videoId: item.id?.videoId,
    };
    youtubeVideoList.push(data);
  });

  console.log("Youtube Video List", youtubeVideoList);
  return youtubeVideoList;
}