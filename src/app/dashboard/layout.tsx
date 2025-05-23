import { getProjects } from "./projects/actions";

import Sidebar from "./components/sidebar";
import MobileNav from "./components/mobile-nav";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const projects = await getProjects();

  return (
    <main className="flex min-h-screen overflow-hidden">
      <Sidebar projects={projects} />
      <div className="p-4 md:p-6 w-full overflow-y-auto bg-gray-100/60 lg:ml-72 transition-all duration-300 pb-24 lg:pb-0">
        {children}
      </div>
      <MobileNav />
    </main>
  );
}
