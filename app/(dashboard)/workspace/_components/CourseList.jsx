"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import AddNewCourseDialog from "./AddNewCourseDialog";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import CourseCard from "./CourseCard";

const CourseList = () => {
  const [courseList, setCourseList] = useState([]);

  const { user } = useUser();

  const getCourseList = async () => {
    const result = await axios.get('/api/courses');
    console.log(result.data);
    setCourseList(result.data);
  };

  useEffect(() => {
    user && getCourseList();
  }, [user])
  
  return (
    <div className="mt-10">
      <h2 className="font-bold text-xl">Course List</h2>
      {courseList?.length == 0 ? (
        <div className="flex flex-col p-7 items-center justify-center border rounded-xl mt-2 bg-secondary">
          <Image
            src="/online-eductaion.png"
            alt="online-education"
            width={80}
            height={80}
          />
          <h2 className="my-2 text-xl font-bold">You don't have any course.</h2>
          <AddNewCourseDialog>
            <Button>+ Create your first course</Button>
          </AddNewCourseDialog>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-5">
          {courseList?.map((course, index) => (
            <CourseCard course={course} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseList;
