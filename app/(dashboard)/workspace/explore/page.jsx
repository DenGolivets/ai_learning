"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { Search, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import CourseCard from "../_components/CourseCard";
import { Skeleton } from "@/components/ui/skeleton";

const Explore = () => {
  const [courseList, setCourseList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchActive, setIsSearchActive] = useState(false);

  const { user } = useUser();

  useEffect(() => {
    user && getCourseList();
  }, [user]);

  const getCourseList = async () => {
    try {
      const result = await axios.get("/api/courses?courseId=0");
      setCourseList(result.data);
      setIsSearchActive(false); // сброс состояния поиска
    } catch (error) {
      console.error("Ошибка при получении курсов:", error);
    }
  };

  const handleSearch = async () => {
    if (!searchTerm.trim()) return;

    try {
      const result = await axios.get(
        `/api/courses?search=${encodeURIComponent(searchTerm)}`
      );
      setCourseList(result.data);
      setIsSearchActive(true); // включаем состояние поиска
    } catch (error) {
      console.error("Ошибка при поиске курсов:", error);
    }
  };

  const handleClear = () => {
    setSearchTerm("");
    getCourseList();
  };
  return (
    <div>
      <h2 className="font-bold text-3xl mb-6">Explore More Courses</h2>
      <div className="flex gap-5 max-w-lg">
        <Input
          placeholder="Search for courses"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={"outline-none focus-visible:ring-0"}
        />
        <Button onClick={handleSearch}>
          <Search /> Search
        </Button>
        {isSearchActive && (
          <Button
            variant="outline"
            onClick={handleClear}
            className={"bg-red-50 hover:bg-red-100 border border-red-200"}
          >
            <X /> Clear
          </Button>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-5">
        {courseList?.length > 0
          ? courseList?.map((course, index) => (
              <CourseCard course={course} key={index} />
            ))
          : [0, 1, 2, 3].map((_, index) => (
              <div key={index} className="w-full">
                <Skeleton className="h-52 w-full" />
              </div>
            ))}
      </div>
    </div>
  );
};

export default Explore;
