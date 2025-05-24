import Image from "next/image";

import LogoPNG from "@/public/LogoPNG.png";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";

import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth.api.getSession({ headers: await headers() });

  if (session) {
    redirect("/dashboard");
  }

  return (
    <main>
      <section className="flex flex-col pt-10 md:p-0 md:min-h-svh justify-center items-center h-auto">
        <Image src={LogoPNG} alt="Freelanceo Logo" className="size-16 bg-blue-500 rounded-full p-2" />

        {children}
      </section>

      <svg
        className="absolute top-50 inline-block fill-current w-full h-auto text-blue-200/40 -z-10"
        viewBox="0 0 1440 450"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1189.2 169.2H421H253.8C159.8 169.2 69.1 203.1 0 262.6V449.8C30.5 349.9 131.3 276.7 252 276.7H424.1H1187.4C1280.9 276.7 1371 243.2 1440 184.3V0C1408.1 97.9 1308.3 169.2 1189.2 169.2Z"></path>
      </svg>

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_600px_at_50%_200px,#C9EBFF,transparent)]" />
    </main>
  );
}
