"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Check, Trash } from "lucide-react";

import { completeProject, deleteProject } from "../../actions";

import toast from "react-hot-toast";

import { Project } from "@/utils/types";

import EditProjectModal from "./edit-project-modal";

const ProjectDetailsButtons = ({ project }: { project: Project }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleMarkComplete = async () => {
    try {
      setIsLoading(true);

      await completeProject(project.id);

      toast.success("The project has been marked as complete.", {
        duration: 4000,
        style: { backgroundColor: "#22c55e", border: "1px solid #22c55e", color: "white", borderRadius: "12px" },
      });

      setIsLoading(false);
    } catch (error) {
      console.error("Error marking project as complete:", error);
      toast.error("Failed to mark project as complete", {
        duration: 4000,
        style: { backgroundColor: "#ef4444", border: "1px solid #ef4444", color: "white", borderRadius: "12px" },
      });
    }
  };

  const handleDeleteProject = async () => {
    try {
      setIsLoading(true);

      await deleteProject(project.id);

      toast.success("The project has been deleted successfully", {
        duration: 4000,
        style: { backgroundColor: "#22c55e", border: "1px solid #22c55e", color: "white", borderRadius: "12px" },
      });

      router.push("/dashboard/projects");
    } catch (error) {
      console.error("Error deleting project:", error);
      toast.error("Failed to delete project", {
        duration: 4000,
        style: { backgroundColor: "#ef4444", border: "1px solid #ef4444", color: "white", borderRadius: "12px" },
      });
    } finally {
      setIsLoading(false);
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
