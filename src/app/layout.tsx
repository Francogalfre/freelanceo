import type { Metadata } from "next";

// Vercel Analytics
import { Analytics } from "@vercel/analytics/next";

// Styles
import { outfit } from "@/styles/fonts";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Freelanceo - Simplify Your Freelance Journey",
  description:
    "Freelanceo is the ultimate dashboard designed to help freelancers manage their clients, projects, and invoices efficiently. Track earnings, stay on top of tasks, and grow your freelance business effortlessly.",
  keywords: ["Freelance", "Dashboard", "Freelanceo", "Freelance-Organization"],
  authors: [{ name: "Franco Galfre" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`overflow-x-hidden w-full  ${outfit.className}`}>
        {children}

        <Analytics />
      </body>
    </html>
  );
}
