"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Check, CheckCircle2, Edit2, Trash } from "lucide-react";

import { completeProject, deleteProject } from "../../actions";

import { toast } from "sonner";

import { Project } from "@/utils/types";

import EditProjectModal from "./edit-project-modal";

const ProjectDetailsButtons = ({ project }: { project: Project }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleMarkComplete = async () => {
    try {
      setIsLoading(true);

      await completeProject(project.id);

      toast.success("Project marked as complete", {
        description: "The project has been marked as complete.",
        icon: <CheckCircle2 className="h-5 w-5" />,
        duration: 4000,
        style: { backgroundColor: "#22c55e", border: "1px solid #22c55e", color: "white" },
      });

      setIsLoading(false);
    } catch (error) {
      console.error("Error marking project as complete:", error);
      toast.error("Failed to mark project as complete", {
        description: "There was an error marking the project as complete.",
        icon: <CheckCircle2 className="h-5 w-5" />,
        duration: 4000,
        style: { backgroundColor: "#ef4444", border: "1px solid #ef4444", color: "white" },
      });
    }
  };

  const handleDeleteProject = () => {
    try {
      setIsLoading(true);

      deleteProject(project.id);

      toast.success("Project deleted successfully", {
        description: "The project has been deleted.",
        icon: <CheckCircle2 className="h-5 w-5" />,
        duration: 4000,
        style: { backgroundColor: "#22c55e", border: "1px solid #22c55e", color: "white" },
      });

      setIsLoading(false);
    } catch (error) {
      console.error("Error deleting project:", error);
      toast.error("Failed to delete project", {
        description: "There was an error deleting the project.",
        icon: <CheckCircle2 className="h-5 w-5" />,
        duration: 4000,
        style: { backgroundColor: "#ef4444", border: "1px solid #ef4444", color: "white" },
      });
    }
  };

  return (
    <div className="flex items-center justify-end gap-4 pt-6">
      {project.status == "progress" && (
        <>
          <Button
            disabled={isLoading}
            onClick={handleMarkComplete}
            className="bg-green-500 hover:bg-green-600 text-md transition-colors text-white px-4 py-6 rounded-xl cursor-pointer flex items-center gap-2"
          >
            <Check width={18} />
            Mark as Complete
          </Button>
          <EditProjectModal project={project} isLoading={isLoading} />
        </>
      )}

      <Button
        disabled={isLoading}
        onClick={handleDeleteProject}
        className="bg-red-500 hover:bg-red-600 text-md transition-colors text-white px-4 py-6 rounded-xl cursor-pointer flex items-center gap-2"
      >
        <Trash width={18} />
        Delete Project
      </Button>
    </div>
  );
};

export default ProjectDetailsButtons;
