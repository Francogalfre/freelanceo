import type { Metadata } from "next";

// Styles
import { outfit } from "@/styles/fonts";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Freelanceo - Simplify Your Freelance Journey",
  description:
    "Freelanceo is the ultimate dashboard designed to help freelancers manage their clients, projects, and invoices efficiently. Track earnings, stay on top of tasks, and grow your freelance business effortlessly.",
  keywords:
    "freelance, dashboard, SaaS, p roject management, client tracking, invoices, productivity, freelancers, task manager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
