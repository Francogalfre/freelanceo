"use client";

import React, { useState } from "react";

import z from "zod";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import SelectClient from "./SelectClient";

import { DatePicker } from "./DatePicker";

import { createProject } from "../../projects/actions";

import type { Client } from "@/utils/types";

import { toast } from "sonner";
import { CheckCircle2, XCircle } from "lucide-react";

const projectFormSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters").max(60, "Title must be less than 60 characters"),
  description: z
    .string()
    .min(50, "Description must be at least 50 characters")
    .max(3000, "Description must be less than 3000 characters"),
  deadline: z.string().min(1, "Deadline is required"),
  earnings: z.string().optional(),
  clientId: z.string().min(1, "Client is required"),
});

type FormErrors = {
  [key: string]: string;
};

const ProjectsForm = ({ clients }: { clients: Client[] }) => {
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
      deadline: formData.get("deadline") as string,
      clientId: formData.get("client") as string,
      earnings: formData.get("earnings") as string,
    };

    const parsedData = projectFormSchema.safeParse(rawData);

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
      const result = await createProject(parsedData.data);

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
    <form className="w-full max-w-3xl mx-auto flex flex-col gap-6 pt-4" onSubmit={handleSubmit}>
      <div className="grid gap-2 text-start">
        <Label className="text-sm md:text-md">
          Title <span className="text-red-500">*</span>
        </Label>
        <div className="relative">
          <Input
            id="title"
            type="text"
            name="title"
            placeholder="UI/UX Design Website Project"
            className={`h-12 w-full text-sm md:text-md ${errors.title ? "border-red-500" : ""}`}
            required
          />
          {errors.title && (
            <div className="absolute -bottom-6 right-0 bg-red-500 text-white text-xs px-2 py-1 rounded-md max-w-[90%] sm:max-w-[300px]">
              {errors.title}
            </div>
          )}
        </div>
      </div>

      <div className="grid gap-2 text-start">
        <Label className="text-sm md:text-md">
          Description <span className="text-red-500">*</span>
        </Label>
        <div className="relative">
          <textarea
            id="description"
            name="description"
            placeholder="All the information you have about the project..."
            className={`w-full min-h-[6rem] text-sm md:text-md resize-y overflow-auto border rounded-md px-3 py-2 ${
              errors.description ? "border-red-500" : "border-gray-300"
            }`}
            required
          />
          {errors.description && (
            <div className="absolute -bottom-6 right-0 bg-red-500 text-white text-xs px-2 py-1 rounded-md max-w-[90%] sm:max-w-[300px]">
              {errors.description}
            </div>
          )}
        </div>
      </div>

      <div className="grid gap-2 text-start">
        <Label className="text-sm md:text-md">
          Deadline <span className="text-red-500">*</span>
        </Label>
        <div className="relative">
          <DatePicker name="deadline" />
          {errors.deadline && (
            <div className="absolute -bottom-6 right-0 bg-red-500 text-white text-xs px-2 py-1 rounded-md max-w-[90%] sm:max-w-[300px]">
              {errors.deadline}
            </div>
          )}
        </div>
      </div>

      <div className="grid gap-2 text-start">
        <Label className="text-sm md:text-md">
          Client <span className="text-red-500">*</span>
        </Label>
        <SelectClient clients={clients} />
      </div>

      <div className="grid gap-2 text-start">
        <Label className="text-sm md:text-md">Earnings</Label>
        <div className="relative">
          <Input
            id="earnings"
            type="number"
            name="earnings"
            placeholder="USD $1.000"
            className="h-12 w-full text-sm md:text-md"
            min={1}
          />
          {errors.earnings && (
            <div className="absolute -bottom-6 right-0 bg-red-500 text-white text-xs px-2 py-1 rounded-md max-w-[90%] sm:max-w-[200px]">
              {errors.earnings}
            </div>
          )}
        </div>
      </div>

      {errors.submit && <p className="text-sm text-red-500">{errors.submit}</p>}

      <Button
        type="submit"
        className="h-12 text-sm md:text-md bg-blue-600 hover:bg-blue-700 transition-colors cursor-pointer"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Adding Project..." : "Add New Project"}
      </Button>
    </form>
  );
};

export default ProjectsForm;
