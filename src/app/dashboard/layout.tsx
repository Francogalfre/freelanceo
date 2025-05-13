import { getProjects } from "./projects/actions";

import Sidebar from "./components/sidebar";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const projects = await getProjects();

  return (
    <main className="flex">
      <Sidebar projects={projects} />
      <div className="p-6 w-full min-h-screen bg-gray-50/70 ml-72">{children}</div>
    </main>
  );
}
