import { db } from "@/config/db";
import { coursesTable } from "@/config/schema";
import { currentUser } from "@clerk/nextjs/server";
import { desc, eq, sql } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const courseId = searchParams?.get("courseId");
  const search = searchParams?.get("search")?.toLowerCase();
  const user = await currentUser();

  if (search) {
    const result = await db
      .select()
      .from(coursesTable)
      .where(
        sql`LOWER(${coursesTable.courseJson}->'course'->>'name') LIKE ${`%${search}%`}`
      );
    return NextResponse.json(result);
  }

  if (courseId == 0) {
    const result = await db
      .select()
      .from(coursesTable)
      .where(sql`${coursesTable.courseContent}::jsonb != '{}'::jsonb`)

    return NextResponse.json(result);
  }

  if (courseId) {
    const result = await db
      .select()
      .from(coursesTable)
      .where(eq(coursesTable.cid, courseId));
    console.log(result);

    return NextResponse.json(result[0]);
  } else {
    const result = await db
      .select()
      .from(coursesTable)
      .where(
        eq(coursesTable.userEmail, user?.primaryEmailAddress?.emailAddress)
      ).orderBy(desc(coursesTable.id));
    return NextResponse.json(result);
  }
}
