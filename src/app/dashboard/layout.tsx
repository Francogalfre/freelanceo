import { auth } from "@/lib/auth";
import { headers } from "next/headers";

import { getProjects } from "./projects/actions";

import Sidebar from "./components/sidebar";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const projects = await getProjects();

  return (
    <main className="flex">
      <Sidebar session={session} projects={projects} />
      <div className="p-6 w-full min-h-screen bg-gray-50/70 ml-72">{children}</div>
    </main>
  );
}
