"use client";

import React, { useState, useEffect } from "react";

import Link from "next/link";

const Navbar = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setHasScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 flex items-center transition-[border] justify-between px-16 py-4 backdrop-blur-md bg-blue/50 z-50 ${
        hasScrolled ? "border-b" : "border-b-0"
      }`}
    >
      <Link href="/" className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
        <span className="font-semibold text-xl">
          Freelan<span className="text-blue-700">ceo</span>
        </span>
      </Link>

      <div className="flex items-center gap-6">
        <a className="transition-colors hover:text-gray-600 cursor-pointer">Home</a>
        <a className="transition-colors hover:text-gray-600 cursor-pointer">Features</a>
        <a className="transition-colors hover:text-gray-600 cursor-pointer">About</a>
      </div>

      <div className="flex items-center gap-4">
        <Link href={"/login"} className="px-4 py-2 hover:bg-blue-100 hover:text-blue-800 rounded-lg transition-all">
          Login
        </Link>
        <Link href={"/register"} className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-all">
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
