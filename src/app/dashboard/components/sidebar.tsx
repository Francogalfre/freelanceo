"use client";

import React from "react";
import Link from "next/link";

import { Home, FolderOpen, Users, LogOut, Crown, FileChartLine } from "lucide-react";

import { authClient } from "@/lib/auth-client";

import { useRouter, usePathname } from "next/navigation";

import { type Project } from "@/utils/types";

import Image from "next/image";
import Logo from "@/public/LogoPNG.png";

const Sidebar = ({ projects }: { projects: Project[] }) => {
  const router = useRouter();
  const pathname = usePathname();

  const colors = ["bg-blue-400", "bg-blue-500", "bg-blue-600"];

  return (
    <div className="hidden lg:flex h-screen w-72 bg-white border-r border-blue-100/50 p-6 flex-col fixed left-0">
      <div className="flex items-center gap-3 pb-6 border-b border-blue-100">
        <Image src={Logo.src} alt="Freelanceo Logo" width={42} height={42} className="bg-blue-600 rounded-xl p-1" />
        <h2 className="text-xl font-medium">
          Freelan<span className="text-blue-600">ceo</span>
        </h2>
      </div>

      <nav className="flex flex-col gap-2 mt-6">
        <Link
          href="/dashboard"
          className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
            pathname === "/dashboard"
              ? "bg-blue-50 text-blue-600"
              : "hover:bg-blue-50 text-gray-700 hover:text-blue-600 hover:translate-x-1"
          }`}
        >
          <Home className="w-5 h-5" />
          <span>Home</span>
        </Link>
        <Link
          href="/dashboard/projects"
          className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
            pathname.startsWith("/dashboard/projects")
              ? "bg-blue-50 text-blue-600"
              : "hover:bg-blue-50 text-gray-700 hover:text-blue-600 hover:translate-x-1"
          }`}
        >
          <FolderOpen className="w-5 h-5" />
          <span>Projects</span>
        </Link>
        <Link
          href="/dashboard/clients"
          className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
            pathname === "/dashboard/clients"
              ? "bg-blue-50 text-blue-600"
              : "hover:bg-blue-50 text-gray-700 hover:text-blue-600 hover:translate-x-1"
          }`}
        >
          <Users className="w-5 h-5" />
          <span>Clients</span>
        </Link>
        <span className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-gray-500">
          <FileChartLine className="w-5 h-5" />
          Invoices (Coming soon)
        </span>
        <p className="border-t-1 text-sm border-blue-100 text-gray-500 font-light pt-4 mt-3">Projects</p>
        <h2 className="text-gray-600 text-md"> List of projects</h2>
        <ul className="flex flex-col gap-2 mt-1">
          {projects.slice(0, 3).map((project, index) => (
            <li key={project.id}>
              <Link
                href={`/dashboard/projects/${project.id}`}
                className="text-gray-600 hover:text-gray-900 hover:translate-x-1 transition-all flex items-center gap-3 line-clamp-2 break-words whitespace-pre-wrap"
              >
                <div className={`size-3 rounded ${colors[index]}`} />
                {project.title.length > 18 ? `${project.title.slice(0, 18)}...` : project.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto w-full flex flex-col gap-3">
        <div className="mb-4">
          <div className="overflow-hidden rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 shadow-md">
            <div className="relative p-4">
              <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-blue-400 opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 h-12 w-12 rounded-full bg-blue-700 opacity-20"></div>

              <div className="relative z-10 flex flex-col items-center text-white">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                  <Crown className="h-5 w-5" />
                </div>
                <h3 className="mb-1 text-center text-md font-bold">Upgrade to Premium</h3>
                <p className="mb-3 text-center text-xs text-blue-100">Unlock all features and benefits</p>
                <button className="w-full rounded-md bg-white px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 cursor-pointer">
                  Upgrade Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={() =>
            authClient.signOut({
              fetchOptions: {
                onSuccess: () => router.refresh(),
              },
            })
          }
          className="mt-auto flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-50 text-gray-700 hover:text-red-600 transition-all cursor-pointer"
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
