"use client";

import React from "react";
import Link from "next/link";

import { Home, FolderOpen, Users, LogOut } from "lucide-react";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

import { type Session } from "@/lib/auth";

const Sidebar = ({ session }: { session: Session | null }) => {
  const router = useRouter();

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
          className="flex items-center gap-3 px-4 py-2 rounded-xl hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-all"
        >
          <Home className="w-5 h-5" />
          <span>Home</span>
        </Link>
        <Link
          href="/dashboard/projects"
          className="flex items-center gap-3 px-4 py-2 rounded-xl hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-all"
        >
          <FolderOpen className="w-5 h-5" />
          <span>Projects</span>
        </Link>
        <Link
          href="/dashboard/clients"
          className="flex items-center gap-3 px-4 py-2 rounded-xl hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-all"
        >
          <Users className="w-5 h-5" />
          <span>Clients</span>
        </Link>
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
