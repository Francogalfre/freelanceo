import React from "react";

import { Client, Project } from "@/utils/types";

import { Package, PackageCheck, Users2, Wallet } from "lucide-react";
import Card from "./card";

type Props = {
  projects: Project[];
  clients: Client[];
};

const DataCards = async ({ projects, clients }: Props) => {
  const completedProjects = projects.filter((project) => project.status == "finished");
  const totalEarnings = completedProjects.reduce((sum, project) => {
    return sum + (Number(project.earnings) || 0);
  }, 0);

  return (
    <section className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 gap-4">
      <Card text="Total Projects" value={projects.length} icon={Package} />
      <Card text="Done Projects" value={completedProjects.length} icon={PackageCheck} />
      <Card text="Total Clients" value={clients.length} icon={Users2} />
      <Card text="Total Earnings" value={totalEarnings} icon={Wallet} />
    </section>
  );
};

export default DataCards;
