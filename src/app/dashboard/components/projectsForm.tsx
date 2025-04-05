import React from "react";
import DatePicker from "./datePicker";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ProjectsForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);

    const title = formData.get("title");
    const description = formData.get("description");
    const deadline = formData.get("deadline");
    const earnings = formData.get("earnings");

    console.log(title, description, deadline, earnings);
  };

  return (
    <form className="w-[750px] flex flex-col gap-6 px-4" onSubmit={handleSubmit}>
      <div className="grid gap-3 text-start">
        <Label>Project Title</Label>
        <Input id="title" type="text" name="title" placeholder="UI/UX Landing Page Design" required className="h-12" />
      </div>
      <div className="grid gap-3 text-start">
        <Label>Project Description</Label>
        <Textarea
          id="description"
          placeholder="Details about your project"
          name="description"
          required
          className="h-12 resize-none"
        />
      </div>
      <div className="flex w-full justify-between gap-2 items-center">
        <div className="w-full">
          <Label className="pb-3">Project Deadline</Label>
          <DatePicker name="deadline" />
        </div>
        <div className="w-full">
          <Label className="pb-3">Project Earnings</Label>
          <Input id="earnings" type="number" name="earnings" placeholder="$1.000" required className="h-12" />
        </div>
      </div>
      <Button className="h-12">Create Project</Button>
    </form>
  );
};

export default ProjectsForm;
