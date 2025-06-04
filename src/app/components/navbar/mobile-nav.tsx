import React from "react";
import { useRouter } from "next/navigation";

import type { Session } from "@/lib/auth";
import { authClient } from "@/lib/auth-client";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
  DrawerDescription,
} from "@/components/ui/drawer";
import { MenuIcon, X } from "lucide-react";

import Link from "next/link";
import Image from "next/image";
import LogoPNG from "@/public/LogoPNG.png";

const MobileNavbar = ({ session }: { session: Session | null }) => {
  const router = useRouter();

  const handleLogOut = () => {
    authClient.signOut({
      fetchOptions: {
        onSuccess: () => router.refresh(),
      },
    });
  };

  return (
    <Drawer direction="bottom">
      <DrawerTrigger className="text-sm md:text-md p-3 bg-blue-500 hover:bg-blue-700 transition-colors cursor-pointer text-white flex gap-2 items-center rounded-lg lg:hidden">
        <MenuIcon />
      </DrawerTrigger>

      <DrawerContent className="w-full p-6 flex flex-col justify-between gap-12 items-start text-start">
        <DrawerHeader className="flex flex-row justify-between w-full items-center">
          <DrawerTitle>
            {" "}
            <Link href="/" className="flex items-center gap-2 ">
              <Image src={LogoPNG} alt="Freelanceo Logo" width={40} className="bg-blue-500 rounded-lg p-1" />
              <span className="text-xl font-medium">Freelanceo</span>
            </Link>
          </DrawerTitle>
          <DrawerDescription hidden></DrawerDescription>
          <DrawerClose>
            <X className="size-10 border-1 border-gray-300 p-2 rounded-xl" />
          </DrawerClose>
        </DrawerHeader>

        <nav className="flex flex-col items-start text-xl font-normal w-full gap-4">
          <a
            href="#hero"
            className="transition-all hover:text-gray-600 hover:bg-gray-100 hover:-translate-y-0.5 cursor-pointer border-1 border-gray-100 w-full rounded-xl py-2 px-3"
          >
            Home
          </a>
          <a
            href="#features"
            className="transition-all hover:text-gray-600 hover:-translate-y-0.5 cursor-pointer border-1 border-gray-50 w-full rounded-xl py-2 px-3"
          >
            Features
          </a>
          <a
            href="#solutions"
            className="transition-all hover:text-gray-600 hover:-translate-y-0.5 cursor-pointer border-1 border-gray-50 w-full rounded-xl py-2 px-3"
          >
            Solutions
          </a>
          <a
            href="#pricing"
            className="transition-all hover:text-gray-600 hover:-translate-y-0.5 cursor-pointer border-1 border-gray-50 w-full rounded-xl py-2 px-3"
          >
            Pricing
          </a>
        </nav>

        <section className="w-full">
          {session ? (
            <div className="w-full flex justify-between">
              <div>
                <h2 className="text-lg">Hello {session.user.name}</h2>
                <p className="text-md text-gray-700">{session.user.email}</p>
              </div>
              <div className="flex items-center gap-6">
                <Link
                  href="/dashboard"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-medium shadow-sm"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogOut}
                  className="bg-red-500 hover:bg-red-600 transition-colors px-6 py-3 text-white rounded-xl font-medium"
                >
                  Log Out
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link
                href="/register"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-medium shadow-sm"
              >
                Get Started
              </Link>
              <Link
                href="/login"
                className="px-6 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-200 rounded-lg transition-all font-medium"
              >
                Log in
              </Link>
            </div>
          )}
        </section>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileNavbar;
