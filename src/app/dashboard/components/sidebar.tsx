"use client";

import React from "react";
import Link from "next/link";

import { Home, FolderOpen, Users, LogOut } from "lucide-react";

import { authClient } from "@/lib/auth-client";

import { useRouter, usePathname } from "next/navigation";

import { type Session } from "@/lib/auth";

const Sidebar = ({ session }: { session: Session | null }) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="h-screen w-64 bg-white border-r border-blue-100 p-6 flex flex-col">
      <div className="flex items-center gap-3 pb-6 border-b border-blue-100">
        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
          <span className="text-blue-600 font-medium">{session?.user?.name?.[0] || "U"}</span>
        </div>
        <div className="flex flex-col">
          <span className="font-medium">{session?.user?.name || "User"}</span>
          <span className="text-sm text-gray-500">{session?.user?.email}</span>
        </div>
      </div>

      <nav className="flex flex-col gap-2 mt-6">
        <Link
          href="/dashboard"
          className={`flex items-center gap-3 px-4 py-2 rounded-xl transition-all ${
            pathname === "/dashboard"
              ? "bg-blue-50 text-blue-600"
              : "hover:bg-blue-50 text-gray-700 hover:text-blue-600"
          }`}
        >
          <Home className="w-5 h-5" />
          <span>Home</span>
        </Link>
        <Link
          href="/dashboard/projects"
          className={`flex items-center gap-3 px-4 py-2 rounded-xl transition-all ${
            pathname === "/dashboard/projects"
              ? "bg-blue-50 text-blue-600"
              : "hover:bg-blue-50 text-gray-700 hover:text-blue-600"
          }`}
        >
          <FolderOpen className="w-5 h-5" />
          <span>Projects</span>
        </Link>
        <Link
          href="/dashboard/clients"
          className={`flex items-center gap-3 px-4 py-2 rounded-xl transition-all ${
            pathname === "/dashboard/clients"
              ? "bg-blue-50 text-blue-600"
              : "hover:bg-blue-50 text-gray-700 hover:text-blue-600"
          }`}
        >
          <Users className="w-5 h-5" />
          <span>Clients</span>
        </Link>
        <p className="border-t-1 border-blue-100 text-gray-500 font-light pt-4 mt-3">Projects</p>
        List of projects
      </nav>

      <button
        onClick={() =>
          authClient.signOut({
            fetchOptions: {
              onSuccess: () => router.refresh(),
            },
          })
        }
        className="mt-auto flex items-center gap-3 px-4 py-2 rounded-xl hover:bg-red-50 text-gray-700 hover:text-red-600 transition-all cursor-pointer"
      >
        <LogOut className="w-5 h-5" />
        <span>Logout</span>
      </button>
    </div>
  );
};

export default Sidebar;
