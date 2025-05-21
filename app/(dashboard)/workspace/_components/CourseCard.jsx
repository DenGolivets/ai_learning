import { Button } from "@/components/ui/button";
import axios from "axios";
import { Book, LoaderCircle, PlayCircle, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "sonner";

const CourseCard = ({ course }) => {
  const courseJson = course?.courseJson?.course;
  const [loading, setLoading] = useState(false);

  const onEnrollCourse = async () => {
    try {
      setLoading(true);
      const result = await axios.post('/api/enroll-course', {
        courseId: course?.cid,
      });
      console.log(result);

      if (result.data.resp) {
        toast.warning('Already Enrolled in the course');
        setLoading(false);
        return;
      }

      toast.success("Enrolled in the course successfully");
      setLoading(false);
    } catch (error) {
      toast.error("Something went wrong with enrolling the course");
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <div className="shadow rounded-xl">
      <Image
        src={course?.bannerImageUrl}
        alt={course?.name}
        width={400}
        height={300}
        className="w-full aspect-video rounded-t-xl object-cover"
      />
      <div className="p-3 flex flex-col gap-3">
        <h2 className="font-bold text-lg">{courseJson?.name}</h2>
        <p className="line-clamp-3 text-gray-400 text-sm">
          {courseJson?.description}
        </p>
        <div className="flex justify-between items-center">
          <h2 className="flex items-center gap-2 text-sm">
            <Book className="text-primary size-5" />
            <span className="text-green-600 font-semibold">
              {courseJson?.noOfChapters} Chapters
            </span>
          </h2>
          {course?.courseContent?.length ? (
            <Button size={"sm"} onClick={onEnrollCourse} disabled={loading}>
              {loading ? <LoaderCircle className="animate-spin" /> : <PlayCircle />} Start Learning
            </Button>
          ) : (
            <Link href={'/workspace/edit-course/' + course?.cid}>
              <Button size={"sm"} variant={"outline"}>
                <Settings /> Generate Course
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
