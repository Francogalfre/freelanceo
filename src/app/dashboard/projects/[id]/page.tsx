import React from "react";

import { getProjectById } from "../actions";
import { getClientById } from "../../clients/action";

import {
  ChartNoAxesGantt,
  CircleUser,
  ClockAlert,
  BoxIcon,
  Wallet,
  FileClock,
  Trash,
  Edit2,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectDetails = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  const projectArray = await getProjectById(id);
  const project = projectArray[0];

  const client = await getClientById(project.clientId);

  const formattedDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <main className="">
      <header className="relative w-full mb-5 from-blue-400 to-blue-600 bg-gradient-to-br h-48 rounded-xl flex justify-between items-end p-6">
        <div className="flex items-center gap-4">
          <div className="flex size-12 items-center justify-center rounded-full bg-white/30">
            <ChartNoAxesGantt className="size-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-white/80">Project Details</span>
            <h2 className="text-white text-2xl font-semibold">{project.title}</h2>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <div className="flex flex-col">
            <span className="text-white/80">Created At</span>
            <h2 className="text-white text-2xl font-semibold">{formattedDate(project.createdAt)}</h2>
          </div>
          <div className="flex flex-col">
            <span className="text-white/80">Deadline</span>
            <h2 className="text-white text-2xl font-semibold">{formattedDate(project.deadline)}</h2>
          </div>
        </div>
      </header>
      <section className="flex w-full gap-4">
        <div className="flex-2/3 bg-white p-6 rounded-xl border-1 border-blue-100/50">
          <div className="pb-6">
            <h3 className="text-md text-gray-500 pb-4">Project Details:</h3>
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-3 gap-2">
                <div className="flex items-center gap-4">
                  <CircleUser className="text-gray-500" />
                  <p className="flex flex-col">
                    <span className="text-gray-500">Client:</span>
                    <span className="text-lg font-medium">{client[0].name}</span>
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <ClockAlert className="text-gray-500" />
                  <p className="flex flex-col">
                    <span className="text-gray-500">Deadline:</span>
                    <span className="text-lg font-medium">{formattedDate(project.deadline)}</span>
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <BoxIcon className="text-gray-500" />
                  <p className="flex flex-col">
                    <span className="text-gray-500">Status:</span>
                    <span className="text-lg font-medium">
                      {project.status === "progress" ? "In Progress" : project.status}
                    </span>
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="flex items-center gap-4">
                  <Wallet className="text-gray-500" />
                  <p className="flex flex-col">
                    <span className="text-gray-500">Earnings</span>
                    <span className="text-lg font-medium">${project.earnings ? project.earnings : "0"}</span>
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <FileClock className="text-gray-500" />
                  <p className="flex flex-col">
                    <span className="text-gray-500">Created At:</span>
                    <span className="text-lg font-medium">{formattedDate(project.createdAt)}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="pb-6">
            <h3 className="text-md text-gray-500 py-4">Project Description:</h3>
            <p className="text-lg w-full break-words whitespace-pre-wrap prose">{project.description}</p>
          </div>
          <hr />
          <div className="flex items-center justify-end gap-4 pt-6">
            <Button className="bg-blue-500 hover:bg-blue-600 text-md transition-colors text-white px-4 py-6 rounded-xl cursor-pointer flex items-center gap-2">
              <Edit2 width={18} />
              Edit Project
            </Button>
            <Button className="bg-red-500 hover:bg-red-600 text-md transition-colors text-white px-4 py-6 rounded-xl cursor-pointer flex items-center gap-2">
              <Trash width={18} />
              Delete Project
            </Button>
          </div>
        </div>

        <div className="flex-1/3 bg-white p-6 rounded-xl border-1 border-blue-100/50">
          <div className="pb-6">
            <h3 className="text-md text-gray-500 pb-4">Client Details:</h3>
            <div className="flex items-center gap-4 pb-6">
              <p className="bg-blue-500/20 text-blue-500 size-14 flex items-center justify-center text-2xl font-semibold rounded-full">
                {client[0].name.split("")[0].toUpperCase()}
              </p>
              <div>
                <p className="text-2xl font-semibold">{client[0].name}</p>
                <p className="font-medium text-gray-500">
                  {client[0].company ? client[0].company : "No Company provided"}
                </p>
              </div>
            </div>
            <hr />
            <div className="flex items-center gap-4 pt-6">
              <div className="w-full">
                <span className="text-md text-gray-500">Contact Information:</span>
                <div className="flex flex-col gap-4 pt-4 w-full">
                  <div className="flex justify-between items-center gap-4 w-full">
                    <p className=" flex items-center gap-2 text-md text-gray-500">
                      <Mail className="size-4" /> Email:
                    </p>
                    <span className="text-lg">{client[0].email}</span>
                  </div>
                  <div className="flex justify-between items-center gap-4 w-full">
                    <p className=" flex items-center gap-2 text-md text-gray-500">
                      <Phone className="size-4" />
                      Phone Number:
                    </p>
                    <span className="text-lg">{client[0].phone ? client[0].phone : "No phone number provided"}</span>
                  </div>
                  <div className="flex justify-between items-center gap-4 w-full">
                    <p className=" flex items-center gap-2 text-md text-gray-500">
                      <MapPin className="size-4" />
                      Location:
                    </p>
                    <span className="text-lg">{client[0].location ? client[0].location : "No location provided"}</span>
                  </div>
                </div>
              </div>
            </div>
            <a
              href="mailto:${client[0].email}"
              className="bg-blue-500 hover:bg-blue-600 text-md transition-colors text-white py-4 rounded-xl cursor-pointer flex justify-center mt-8 w-full"
            >
              Contact Client
            </a>
          </div>
        </div>
      </section>
      <section className="pt-6">
        <div className="flex-2/3 bg-white p-6 rounded-xl border-1 border-blue-100/50">
          <div className="pb-6">
            <h3 className="text-md text-gray-500 pb-4">Tasks</h3>
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-3 gap-2">
                <div className="flex items-center gap-4">
                  <p className="text-lg font-medium">Task 1</p>
                  <p className="text-gray-500">In Progress</p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="text-lg font-medium">Task 2</p>
                  <p className="text-gray-500">Completed</p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="text-lg font-medium">Task 3</p>
                  <p className="text-gray-500">Pending</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectDetails;
