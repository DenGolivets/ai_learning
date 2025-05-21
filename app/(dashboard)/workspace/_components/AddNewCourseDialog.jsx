"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2Icon, Sparkle } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const AddNewCourseDialog = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    includeVideo: false,
    noOfChapters: 1,
    level: "",
    category: "",
  });

  const router = useRouter();

  const onHandleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const onGenerate = async () => {
    const courseId = uuidv4();
    try {
      setLoading(true);
      const result = await axios.post("/api/generate-course-layout", {
        ...formData,
        courseId: courseId,
      });
      console.log(result.data);

      if (result.data.resp == 'Limit Exceeded') {
        toast.warning('Please subscribe to Starter or Premium plan to create more courses.');
        router.push("/workspace/billing");
      }

      setLoading(false);
      setFormData({
        name: "",
        description: "",
        includeVideo: false,
        noOfChapters: 1,
        level: "",
        category: "",
      });
      router.push(`/workspace/edit-course/`+result.data?.courseId);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Course Using AI</DialogTitle>
          <DialogDescription asChild>
            <div className="flex flex-col gap-4 mt-3">
              <div>
                <label>Course Name</label>
                <Input
                  onChange={(e) => onHandleInputChange("name", e?.target.value)}
                  placeholder="Enter course name"
                  className={
                    "outline-none focus-visible:ring-offset-0 focus-visible:ring-0 text-black"
                  }
                />
              </div>
              <div>
                <label>Course Description (optional)</label>
                <Textarea
                  onChange={(e) =>
                    onHandleInputChange("description", e?.target.value)
                  }
                  placeholder="Enter course description"
                  className={
                    "outline-none focus-visible:ring-offset-0 focus-visible:ring-0 text-black"
                  }
                />
              </div>
              <div>
                <label>No. of Chapters</label>
                <Input
                  onChange={(e) =>
                    onHandleInputChange("noOfChapters", e?.target.value)
                  }
                  placeholder="Enter no. of chapters"
                  type="number"
                  className={
                    "outline-none focus-visible:ring-offset-0 focus-visible:ring-0 text-black"
                  }
                />
              </div>
              <div className="flex items-center gap-3">
                <label>Include Video</label>
                <Switch
                  checked={formData.includeVideo}
                  onCheckedChange={(checked) =>
                    onHandleInputChange("includeVideo", checked)
                  }
                />
              </div>
              <div className="flex flex-col gap-1">
                <label>Difficuly Level</label>
                <Select
                  onValueChange={(value) => onHandleInputChange("level", value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Difficuly Level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner" className={"text-black"}>
                      Beginner
                    </SelectItem>
                    <SelectItem value="moderate" className={"text-black"}>
                      Moderate
                    </SelectItem>
                    <SelectItem value="advanced" className={"text-black"}>
                      Advanced
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label>Category</label>
                <Input
                  onChange={(e) =>
                    onHandleInputChange("category", e?.target.value)
                  }
                  placeholder="Category (separeted by comma)"
                  className={
                    "outline-none focus-visible:ring-offset-0 focus-visible:ring-0 text-black"
                  }
                />
              </div>
              <div className="mt-5">
                <Button
                  className={"w-full"}
                  onClick={onGenerate}
                  disabled={loading}
                >
                  {loading ? (
                    <Loader2Icon className="animate-spin" />
                  ) : (
                    <Sparkle />
                  )}
                  Generate Course
                </Button>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddNewCourseDialog;
