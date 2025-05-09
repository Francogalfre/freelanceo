import React, { useState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { DatePicker } from "../../components/DatePicker";
import { Button } from "@/components/ui/button";

import { Project } from "@/utils/types";

import { z } from "zod";
import { toast } from "sonner";

import { CheckCircle2, XCircle } from "lucide-react";
import { editProject } from "../../actions";

const projectFormSchema = z.object({
  title: z.string().max(60, "Title must be less than 60 characters").optional(),
  description: z.string().max(3000, "Description must be less than 3000 characters").optional(),
  deadline: z.string().optional(),
  earnings: z.string().optional(),
});

type FormErrors = {
  [key: string]: string;
};

const EditProjectForm = ({ project }: { project: Project }) => {
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const formData = new FormData(event.currentTarget);

    const rawData = {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      earnings: formData.get("earnings") as string,
    };

    const parsedData = projectFormSchema.safeParse(rawData);

    console.log(parsedData);

    if (!parsedData.success) {
      const formattedErrors: FormErrors = {};
      const errorMap = parsedData.error.flatten().fieldErrors;

      Object.entries(errorMap).forEach(([key, value]) => {
        if (value && value[0]) {
          formattedErrors[key] = value[0];
        }
      });

      setErrors(formattedErrors);
      setIsSubmitting(false);

      return;
    }

    try {
      const result = await editProject(parsedData.data, project.id);

      if (result.success) {
        setErrors({});

        toast.success("Project added successfully", {
          description: "The project information has been saved to the database",
          icon: <CheckCircle2 className="h-5 w-5" />,
          duration: 4000,
          style: { backgroundColor: "#22c55e", border: "1px solid #22c55e", color: "white" },
        });
      } else {
        setErrors({ submit: result.message || "Failed to add Project. Please try again." });

        toast.error("Failed to add Project", {
          description: result.message || "There was an error saving the project information",
          icon: <XCircle className="h-5 w-5" />,
          duration: 4000,
          style: { backgroundColor: "#ff0301", border: "1px solid red", color: "white" },
        });
      }
    } catch (error) {
      console.error("Error creating project:", error);
      setErrors({ submit: "Failed to add Project. Please try again." });

      toast.error("Failed to add Project", {
        description: "There was an error saving the project information",
        icon: <XCircle className="h-5 w-5" />,
        duration: 4000,
        style: { backgroundColor: "#ff0301", border: "1px solid red", color: "white" },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="max-w-full flex flex-col gap-6 py-2" onSubmit={handleSubmit}>
      <div className="grid gap-3 text-start">
        <Label className="text-md">Title</Label>
        <div className="relative">
          <Input
            id="title"
            type="text"
            name="title"
            defaultValue={project.title}
            className={`h-12 ${errors.title ? "border-red-500" : ""}`}
          />
          {errors.title && (
            <div className="absolute -top-2 right-0 bg-red-500 text-white text-sm px-2 py-1 rounded-md break-words max-w-[300px]">
              {errors.title}
            </div>
          )}
        </div>
      </div>

      <div className="grid gap-3 text-start">
        <Label className="text-md">Description</Label>
        <div className="w-full max-w-lg relative">
          <Textarea
            id="description"
            name="description"
            defaultValue={project.description}
            className={`w-full h-24 resize-none break-words whitespace-pre-wrap ${
              errors.description ? "border-red-500" : ""
            }`}
          />
          {errors.description && (
            <div className="absolute -top-4 right-0 bg-red-500 text-white text-sm px-2 py-1 rounded-md break-words max-w-[300px]">
              {errors.description}
            </div>
          )}
        </div>
      </div>

      <div className="grid gap-3 text-start">
        <Label className="text-md">Earnings</Label>
        <div className="relative">
          <Input
            id="earnings"
            type="number"
            name="earnings"
            defaultValue={project.earnings ? project.earnings : "$0"}
            className="h-12"
            min={1}
          />
          {errors.earnings && (
            <div className="absolute -top-2 right-0 bg-red-500 text-white text-sm px-2 py-1 rounded-md break-words max-w-[200px]">
              {errors.earnings}
            </div>
          )}
        </div>
      </div>

      {errors.submit && <p className="text-sm text-red-500">{errors.submit}</p>}

      <Button
        type="submit"
        className="h-14 text-md bg-blue-600 hover:bg-blue-700 transition-colors cursor-pointer"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Editing Project..." : "Edit Project Details"}
      </Button>
    </form>
  );
};

export default EditProjectForm;
