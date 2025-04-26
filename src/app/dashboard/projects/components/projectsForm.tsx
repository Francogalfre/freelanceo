"use client";

import React, { useState } from "react";

import z from "zod";

import Link from "next/link";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectGroup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { DatePicker } from "./DatePicker";

import { createProject } from "../../projects/actions";

import type { Client } from "@/utils/types";

import { toast } from "sonner";

const projectFormSchema = z.object({
  title: z.string().min(3, "Title is required").max(60, "Title must be less than 60 characters"),
  description: z.string().min(10, "Description is required").max(3000, "Description must be less than 3000 characters"),
  deadline: z.date().optional(),
  client: z.string().min(1, "Client is required"),
  earnings: z.string().optional(),
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

    const formData = new FormData(event.currentTarget);

    const rawData = {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      deadline: formData.get("deadline") as string,
      client: formData.get("client") as string,
      earnings: formData.get("earnings") as string,
    };

    const parsedData = projectFormSchema.safeParse(rawData);

    try {
      createProject(parsedData.data);
    } catch (error) {
      console.error("Error creating project:", error);
    }
  };

  return (
    <form className="max-w-full flex flex-col gap-6 pt-4" onSubmit={handleSubmit}>
      <div className="grid gap-3 text-start">
        <Label className="text-md">
          Title <span className="text-red-500">*</span>
        </Label>
        <div className="relative">
          <Input
            id="title"
            type="text"
            name="title"
            placeholder="UI/UX Design Website Project"
            className="h-12"
            required
          />
        </div>
      </div>

      <div className="grid gap-3 text-start">
        <Label className="text-md">
          Description<span className="text-red-500">*</span>
        </Label>
        <div className="relative">
          <Textarea
            id="description"
            name="description"
            placeholder="All the information you have about the project..."
            className={`w-full h-24 resize-none break-words whitespace-pre-wrap`}
            required
          />
        </div>
      </div>

      <div className="grid gap-3 text-start">
        <Label className="text-md">Deadline</Label>
        <div className="relative">
          <DatePicker name="deadline" />
        </div>
      </div>

      <div className="grid gap-3 text-start">
        <Label className="text-md">
          Client <span className="text-red-500">*</span>
        </Label>
        <div className="relative">
          <Select required name="client">
            <SelectTrigger className="w-full h-12 py-6">
              <SelectValue placeholder="Select a client" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Your Clients</SelectLabel>
                {clients.length > 0 ? (
                  clients.map((client: Client) => (
                    <SelectItem
                      className="hover:bg-gray-100 transition-colors"
                      key={client.id}
                      id="client"
                      value={client.id.toString()}
                    >
                      {client.name}
                    </SelectItem>
                  ))
                ) : (
                  <>
                    <SelectItem value="null" disabled>
                      No Clients Found
                    </SelectItem>
                    <Link
                      href="/dashboard/clients"
                      className="w-full text-sm text-blue-600 rounded-lg pl-2 font-medium hover:underline hover:text-blue-700 transition-all"
                    >
                      Add a new Client
                    </Link>
                  </>
                )}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-3 text-start">
        <Label className="text-md">Earnings</Label>
        <div className="relative">
          <Input id="earnings" type="number" name="earnings" placeholder="USD $1.000" className="h-12" min={1} />
        </div>
      </div>

      <Button
        type="submit"
        className="h-14 text-md bg-blue-600 hover:bg-blue-700 transition-colors cursor-pointer"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Adding Project..." : "Add New Project"}
      </Button>
    </form>
  );
};

export default ProjectsForm;
