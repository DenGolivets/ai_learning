import { Gift } from "lucide-react";
import React from "react";

const ChapterTopicList = ({ course }) => {
  const courseLayout = course?.courseJson?.course;
  return (
    <div>
      <h2 className="font-bold text-3xl mt-10">Chapters & Topics</h2>
      <div className="flex flex-col items-center justify-center mt-10">
        {courseLayout?.chapters.map((chapter, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="p-4 border shadow rounded-xl bg-primary text-white">
              <h2 className="text-center">Chapter {index + 1}</h2>
              <h2 className="font-bold text-lg text-center text-green-300/90">
                {chapter.chapterName}
              </h2>
              <h2 className="text-xs flex justify-between gap-16 mt-1">
                <span>
                  Duration:{" "}
                  <span className="text-green-300 font-medium">{chapter?.duration}</span>
                </span>
                <span>
                  No. Of Chapters:{" "}
                  <span className="text-green-300 font-medium">
                    {chapter?.topics?.length}
                  </span>
                </span>
              </h2>
            </div>
            <div>
              {chapter?.topics.map((topic, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="h-10 bg-gray-300 w-1"></div>
                  <div className="items-center flex gap-5">
                    <span
                      className={`${
                        index % 2 == 0 && "text-transparent"
                      } max-w-xs`}
                    >
                      {topic}
                    </span>
                    <h2 className="text-center rounded-full bg-gray-300 px-6 justify-center text-gray-500 py-4 font-medium">
                      {index + 1}
                    </h2>
                    <span
                      className={`${
                        index % 2 != 0 && "text-transparent"
                      } max-w-xs`}
                    >
                      {topic}
                    </span>
                  </div>
                  {index == chapter?.topics?.length - 1 && (
                    <div className="h-10 bg-gray-300 w-1"></div>
                  )}
                  {index == chapter?.topics?.length - 1 && (
                    <div className="py-4 px-4 rounded-full bg-gray-300 justify-center text-center">
                      <Gift className="text-center rounded-full bg-gray-300" />
                    </div>
                  )}
                  {index == chapter?.topics?.length - 1 && (
                    <div className="h-10 bg-gray-300 w-1"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="p-4 border shadow rounded-xl bg-green-600 text-white">
          <h2>Finish</h2>
        </div>
      </div>
    </div>
  );
};

export default ChapterTopicList;
