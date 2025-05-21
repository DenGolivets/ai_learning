import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SelectedChapterIndex } from "@/context/SelectedChapterIndex";
import { useContext } from "react";

const ChapterListSidebar = ({ courseInfo }) => {
  const { selectedChapterIndex, setSelectedChapterIndex } =
    useContext(SelectedChapterIndex);
  const course = courseInfo?.courses;
  const enrollCourse = courseInfo?.enrollCourse;
  const courseContent = courseInfo?.courses?.courseContent;

  let completedChapter = enrollCourse?.completedChapters ?? [];

  return (
    <div className="w-80 bg-secondary h-screen p-5">
      <h2 className="my-3 font-bold text-xl">
        Chapters ({courseContent?.length})
      </h2>
      <Accordion type="single" collapsible>
        {courseContent?.map((chapter, index) => (
          <AccordionItem
            value={chapter?.courseData?.chapterName}
            key={index}
            onClick={() => setSelectedChapterIndex(index)}
          >
            <AccordionTrigger
              className={`text-lg font-medium
                ${
                  completedChapter?.includes(index)
                    ? "text-green-700"
                    : "text-black"
                }
              `}
            >
              <div>
                {index + 1}. {chapter?.courseData?.chapterName}
                {completedChapter?.includes(index) && (
                  <span className="text-green-700"> (Completed)</span>
                )}
              </div>
            </AccordionTrigger>
            <AccordionContent asChild>
              <div>
                {chapter?.courseData?.topics?.map((topic, index_) => (
                  <h2
                    key={index_}
                    className={`p-3 rounded-lg my-2 font-medium
                      ${
                        completedChapter?.includes(index)
                          ? "bg-green-200 text-green-800"
                          : "bg-white"
                      }  
                    `}
                  >
                    {index_ + 1}. {topic?.topic}
                  </h2>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default ChapterListSidebar;
