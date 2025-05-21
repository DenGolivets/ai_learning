"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import EnrollCourseCard from "./EnrollCourseCard";

const EnrollCourseList = () => {
  const [enrolledCourseList, setEnrolledCourseList] = useState([]);

  useEffect(() => {
    getEnrolledCourse();
  }, []);
  const getEnrolledCourse = async () => {
    const result = await axios.get("/api/enroll-course");
    setEnrolledCourseList(result.data);
  };
  return (
    <>
      {enrolledCourseList?.length > 0 ? (
        <div className="mt-3">
          <h2 className="font-bold text-xl">Continue Learning your courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-3">
            {enrolledCourseList?.map((course, index) => (
              <EnrollCourseCard
                course={course?.courses}
                key={index}
                enrollCourse={course?.enrollCourse}
              />
            ))}
          </div>
        </div>
      ): (
        <div className="mt-3 items-center flex justify-center">
          <h2 className="font-bold text-2xl">You don't have any enrolled course</h2>
        </div>
      )}
    </>
  );
};

export default EnrollCourseList;
