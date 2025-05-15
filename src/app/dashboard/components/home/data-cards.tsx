import React from "react";

import { Package, PackageCheck, Users2, Wallet } from "lucide-react";

import { getProjects } from "../../projects/actions";
import { getClients } from "../../clients/action";

import Card from "./card";

const DataCards = async () => {
  const projects = await getProjects();
  const clients = await getClients();

  const completedProjects = projects.filter((project) => project.status == "finished");

  return (
    <section className="w--full flex justify-between gap-4">
      <Card text="Total Projects" value={projects.length} icon={Package} />
      <Card text="Done Projects" value={completedProjects.length} icon={PackageCheck} />
      <Card text="Total Clients" value={clients.length} icon={Users2} />
      <Card text="Total Earnings" value={300} icon={Wallet} />
    </section>
  );
};

export default DataCards;
