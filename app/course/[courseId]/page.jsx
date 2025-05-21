"use client";

import AppHeader from "@/app/(dashboard)/workspace/_components/AppHeader";
import React, { useEffect, useState } from "react";
import ChapterListSidebar from "../_components/ChapterListSidebar";
import ChapterContent from "../_components/ChapterContent";
import { useParams } from "next/navigation";
import axios from "axios";
import { Skeleton } from "@/components/ui/skeleton";

const Course = () => {
  const { courseId } = useParams();
  const [courseInfo, setCourseInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEnrolledCourseById();
  }, []);

  const getEnrolledCourseById = async () => {
    try {
      const result = await axios.get("/api/enroll-course?courseId=" + courseId);
      console.log(result.data);
      setCourseInfo(result.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <AppHeader hideSidebar={true} />
      <div className="flex gap-10">
        {loading ? (
          <>
            <div className="w-1/4">
              <Skeleton className="h-[500px] w-full rounded-xl" />
            </div>
            <div className="w-3/4">
              <Skeleton className="h-[300px] w-full rounded-xl mb-4" />
              <Skeleton className="h-[200px] w-full rounded-xl mb-4" />
              <Skeleton className="h-[150px] w-full rounded-xl" />
            </div>
          </>
        ) : (
          <>
            <ChapterListSidebar courseInfo={courseInfo} />
            <ChapterContent
              courseInfo={courseInfo}
              refreshData={getEnrolledCourseById}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Course;
