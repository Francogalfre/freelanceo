"use client";

import React from "react";

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

const ProjectsForm = ({ clients }: { clients: Client[] }) => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);

    const title = formData.get("title");
    const description = formData.get("description");
    const deadline = formData.get("deadline");
    const client = formData.get("client");
    const earnings = formData.get("earnings");

    console.log(title, description, deadline, client, earnings);

    await createProject({
      title,
      description,
      deadline: new Date(deadline as string),
      earnings: Number(earnings),
    })
      .then(() => {
        // Handle success (e.g., show a success message, redirect, etc.)
      })
      .catch((error) => {
        console.error("Error creating project:", error);
      });
  };

  return (
    <form className="max-w-full flex flex-col gap-6 pt-4" onSubmit={handleSubmit}>
      <div className="grid gap-3 text-start">
        <Label className="text-md">
          Title <span className="text-red-500">*</span>
        </Label>
        <div className="relative">
          <Input id="title" type="text" name="title" placeholder="UI/UX Design Website Project" className="h-12" />
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
          />
        </div>
      </div>

      <div className="grid gap-3 text-start">
        <Label className="text-md">Deadline</Label>
        <div className="relative">
          <DatePicker />
        </div>
      </div>

      <div className="grid gap-3 text-start">
        <Label className="text-md">Client</Label>
        <div className="relative">
          <Select>
            <SelectTrigger className="w-full h-12 py-6">
              <SelectValue placeholder="Select a client" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Your Clients</SelectLabel>
                {clients.length > 0 ? (
                  clients.map((client: Client) => (
                    <SelectItem key={client.id} id="client" value={client.name}>
                      {client.name}
                    </SelectItem>
                  ))
                ) : (
                  <SelectItem value="null" disabled>
                    No clients available
                  </SelectItem>
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

      <Button type="submit" className="h-14 text-md bg-blue-600 hover:bg-blue-700 transition-colors cursor-pointer">
        Create Project
      </Button>
    </form>
  );
};

export default ProjectsForm;
