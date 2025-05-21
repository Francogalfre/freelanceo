import { getProjects } from "./projects/actions";

import Sidebar from "./components/sidebar";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const projects = await getProjects();

  return (
    <main className="flex h-screen overflow-hidden">
      <Sidebar projects={projects} />
      <div className="p-6 w-full overflow-y-hidden bg-gray-100/60 ml-72">{children}</div>
    </main>
  );
}
