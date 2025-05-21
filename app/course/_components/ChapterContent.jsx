import { Button } from "@/components/ui/button";
import { SelectedChapterIndex } from "@/context/SelectedChapterIndex";
import axios from "axios";
import { CheckCircle, Loader2Icon, X } from "lucide-react";
import { useParams } from "next/navigation";
import { useContext, useState } from "react";
import YouTube from "react-youtube";
import { toast } from "sonner";

const ChapterContent = ({ courseInfo, refreshData }) => {
  const { courseId } = useParams();
  const { selectedChapterIndex, setSelectedChapterIndex } =
    useContext(SelectedChapterIndex);

  const [loadingButtonMark, setLoadingButtonMark] = useState(false);

  if (!courseInfo) {
    return <div className="p-10 w-full">Loading Chapter...</div>;
  }

  const { course, enrollCourse } = courseInfo;
  const courseContent = courseInfo?.courses?.courseContent;
  const videoData = courseContent?.[selectedChapterIndex]?.youtubeVideo;
  const topics = courseContent?.[selectedChapterIndex]?.courseData?.topics;

  let completedChapter = enrollCourse?.completedChapters ?? [];

  const markChapterCompleted = async () => {
    setLoadingButtonMark(true);
    completedChapter.push(selectedChapterIndex);
    const result = await axios.put("/api/enroll-course", {
      courseId: courseId,
      completedChapter: completedChapter,
    });
    console.log(result);
    refreshData();
    toast.success("Chapter marked as completed");
    setLoadingButtonMark(false);
  };

  const markChapterIncompleted = async () => {
    setLoadingButtonMark(true);
    const incompletedChapter = completedChapter.filter(
      (item) => item !== selectedChapterIndex
    );
    const result = await axios.put("/api/enroll-course", {
      courseId: courseId,
      completedChapter: incompletedChapter,
    });
    console.log(result);
    refreshData();
    toast.success("Chapter marked as incompleted");
    setLoadingButtonMark(false);
  };

  return (
    <div className="p-10 w-full">
      <div className="flex items-center justify-between bg-secondary/70 rounded-b-xl p-5 sticky top-0 
      z-10 shadow-md backdrop-blur-[2px]">
        <h2 className="font-bold text-2xl">
          {selectedChapterIndex + 1}.{" "}
          {courseContent?.[selectedChapterIndex]?.courseData?.chapterName}
        </h2>
        {!completedChapter?.includes(selectedChapterIndex) ? (
          <Button
            onClick={() => markChapterCompleted()}
            disabled={loadingButtonMark}
            className={loadingButtonMark ? "cursor-not-allowed" : ""}
          >
            {loadingButtonMark ? (
              <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <CheckCircle />
            )}
            Mark as Completed
          </Button>
        ) : (
          <Button
            variant={"outline"}
            onClick={() => markChapterIncompleted()}
            disabled={loadingButtonMark}
            className={loadingButtonMark ? "cursor-not-allowed" : ""}
          >
            {loadingButtonMark ? (
              <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <X />
            )}
            Mark as Incompleted
          </Button>
        )}
      </div>

      <h2 className="mt-10 mb-4 font-bold text-lg">Related Videos 📽</h2>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        {videoData?.map(
          (video, index) =>
            index < 3 && (
              <div key={index}>
                <YouTube
                  videoId={video?.videoId}
                  opts={{
                    width: "400",
                    height: "250",
                  }}
                />
              </div>
            )
        )}
      </div>
      <div className="mt-7">
        {topics?.map((topic, index) => (
          <div key={index} className="mt-10 p-5 bg-secondary rounded-2xl">
            <h2 className="font-bold text-2xl mb-4 text-primary">
              {index + 1}. {topic?.topic}
            </h2>
            <div
              dangerouslySetInnerHTML={{ __html: topic?.content }}
              style={{ lineHeight: "2.0" }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChapterContent;
