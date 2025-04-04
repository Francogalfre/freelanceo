import { auth } from "@/lib/auth";
import { headers } from "next/headers";

import Sidebar from "./components/sidebar";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <main className="flex">
      <Sidebar session={session} />
      <div className="p-6 w-full">{children}</div>
    </main>
  );
}
