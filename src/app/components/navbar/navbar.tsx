"use client";

import React, { useState, useEffect } from "react";
import LogoPNG from "@/public/LogoPNG.png";

import Link from "next/link";
import Image from "next/image";

import { useRouter } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import MobileNavbar from "./mobile-nav";

import { motion } from "framer-motion";

// Auth
import { authClient } from "@/lib/auth-client";
import type { Session } from "@/lib/auth";

const Navbar = ({ session }: { session: Session | null }) => {
  const [hasScrolled, setHasScrolled] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setHasScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 w-screen flex items-center transition-all justify-between px-6 lg:px-16 py-5 backdrop-blur-sm bg-blue/50 z-50 ${
        hasScrolled ? "border-b bg-white/90" : "border-b-0"
      }`}
    >
      <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
        <Link href="/" className="flex items-center gap-2 ">
          <Image
            src={LogoPNG}
            alt="Freelanceo Logo"
            width={40}
            className="bg-blue-500 size-12 lg:size-10 rounded-lg p-1"
          />
          <span className="hidden lg:block">Freelanceo</span>
        </Link>
      </motion.div>

      <div className="hidden lg:flex items-center gap-6">
        <a href="#hero" className="transition-all hover:text-gray-600 hover:-translate-y-0.5 cursor-pointer">
          Home
        </a>
        <a href="#features" className="transition-all hover:text-gray-600 hover:-translate-y-0.5 cursor-pointer">
          Features
        </a>
        <a href="#solutions" className="transition-all hover:text-gray-600 hover:-translate-y-0.5 cursor-pointer">
          Solutions
        </a>
        <a href="#pricing" className="transition-all hover:text-gray-600 hover:-translate-y-0.5 cursor-pointer">
          Pricing
        </a>
      </div>

      <div className="hidden lg:flex items-center gap-4">
        {session ? (
          <>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex cursor-pointer items-center gap-2 px-3 py-1.5 rounded-lg border-1 border-transparent hover:border-1 hover:border-gray-200 transition-all">
                <span className="font-medium">{session.user.name}</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="font-medium">{session.user.name}</p>
                    <p className="text-sm text-gray-500">{session.user.email}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/dashboard" className="flex items-center w-full">
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() =>
                    authClient.signOut({
                      fetchOptions: {
                        onSuccess: () => router.refresh(),
                      },
                    })
                  }
                  className="text-red-600 hover:text-red-700"
                >
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href="/dashboard"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-medium shadow-sm"
            >
              Dashboard
            </Link>
          </>
        ) : (
          <>
            <Link
              href="/login"
              className="hidden md:block px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-200 rounded-lg transition-all font-medium"
            >
              Log in
            </Link>
            <Link
              href="/register"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-medium shadow-sm"
            >
              Get Started
            </Link>
          </>
        )}
      </div>

      <MobileNavbar session={session} />
    </motion.nav>
  );
};

export default Navbar;
