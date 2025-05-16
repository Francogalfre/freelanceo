import React from "react";

import Image from "next/image";
import Link from "next/link";

import Topographic from "@/public/resources/topographic-background.png";

import { Project } from "@/utils/types";
import { Box } from "lucide-react";

type Props = {
  name?: string;
  email?: string;
  projects: Project[];
};

const RightSidebar = ({ name, email, projects }: Props) => {
  const date = new Date();
  const hour = date.getHours();

  const nextProject = projects
    .sort((a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime())
    .find((project) => project.deadline >= date);

  let greeting = "Welcome again";

  if (hour >= 5 && hour <= 12) {
    greeting = "Good morning";
  } else if (hour >= 12 && hour <= 20) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  return (
    <section className="col-span-2 bg-white p-4 rounded-xl flex flex-col gap-10">
      <header className="bg-blue-600 rounded-xl p-6 shadow flex flex-col gap-2 items-center relative">
        <div className="size-16 rounded-full bg-white flex items-center justify-center mb-2 z-10">
          <span className="text-blue-600 text-3xl font-bold">{name?.[0]}</span>
        </div>
        <div className="text-center z-10">
          <div className="font-bold text-white text-2xl">{name}</div>
          <div className="text-gray-300 text-lg mb-4">{email}</div>
          <div className="text-gray-200 text-md mt-2">
            {greeting} {name}!<br />
            Let's continue with your Freelance career
          </div>
        </div>

        <Image
          src={Topographic.src}
          alt="Topographic effect for background"
          width={100}
          height={100}
          className="absolute h-full w-full top-0 right-0 object-cover z-0 opacity-40 brightness-150"
        />
      </header>

      <main>
        <h2 className="text-2xl font-semibold">Pending Tasks</h2>
      </main>

      <footer>
        <div className="bg-blue-600 rounded-xl p-6 shadow flex flex-col gap-4 text-white">
          <h2 className="text-2xl font-semibold mb-2">Your Next Deadline</h2>
          <div className="flex gap-3 w-full items-center">
            <Box className="bg-white/80 text-blue-600 p-2 size-10 rounded-full" />
            <div>
              <h2 className="text-lg font-semibold">
                {nextProject?.title ? nextProject.title : "You have no projects"}
              </h2>
              <p className="text-md">
                {nextProject?.deadline
                  ? `Deadline: ${nextProject.deadline.toLocaleDateString()}`
                  : "Add your first project"}
              </p>
            </div>
          </div>
          <Link
            href={nextProject ? `dashboard/projects/${nextProject?.id}` : "dashboard/projects"}
            className="mt-2 bg-white text-blue-600 rounded-xl px-4 py-3 font-medium text-center text-md hover:bg-blue-50 transition"
          >
            {nextProject ? "View Details" : "Create your first Project"}
          </Link>
        </div>
      </footer>
    </section>
  );
};

export default RightSidebar;
