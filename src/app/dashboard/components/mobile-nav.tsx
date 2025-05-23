"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, FolderOpen, Users, LogOut } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const MobileNav = () => {
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    {
      href: "/dashboard",
      icon: Home,
      label: "Home",
      isActive: pathname === "/dashboard",
    },
    {
      href: "/dashboard/projects",
      icon: FolderOpen,
      label: "Projects",
      isActive: pathname.startsWith("/dashboard/projects"),
    },
    {
      href: "/dashboard/clients",
      icon: Users,
      label: "Clients",
      isActive: pathname === "/dashboard/clients",
    },
  ];

  return (
    <nav className="fixed bottom-5 left-5 right-5 pt-2 my-auto bg-white border-1 border-blue-200/50 lg:hidden rounded-full shadow-blue-100/50 shadow-sm z-20">
      <div className="flex justify-around items-center h-16 px-3">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center justify-center w-full h-full transition-all hover:-translate-y-1 ${
              item.isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
            }`}
          >
            <item.icon className="w-6 h-6" />
            <span className="text-xs mt-1">{item.label}</span>
          </Link>
        ))}
        <button
          onClick={() =>
            authClient.signOut({
              fetchOptions: {
                onSuccess: () => router.refresh(),
              },
            })
          }
          className="flex flex-col items-center justify-center w-full h-full text-gray-600 hover:text-red-600 transition-colors"
        >
          <LogOut className="w-6 h-6" />
          <span className="text-xs mt-1">Logout</span>
        </button>
      </div>
    </nav>
  );
};

export default MobileNav;
