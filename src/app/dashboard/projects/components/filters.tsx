"use client";

import React from "react";

import { useRouter, useSearchParams } from "next/navigation";

const Filters = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const current = searchParams.get("status") || "all";

  const handleFilterChange = (status: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (status === "all") {
      params.delete("status");
    } else {
      params.set("status", status);
    }

    router.push(`/dashboard/projects?${params.toString()}`);
    3;
  };

  const statusOptions = [
    { label: "All", value: "all" },
    { label: "In Progress", value: "progress" },
    { label: "Finished", value: "finished" },
    { label: "Delayed", value: "delayed" },
  ];

  return (
    <div className="flex gap-4 pt-3">
      {statusOptions.map((status, index) => (
        <button
          onClick={() => handleFilterChange(status.value)}
          key={index}
          className={`cursor-pointer px-3 py-1 rounded-full transition-colors ${current === status.value ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-gray-200 hover:bg-gray-300"}`}
        >
          {status.label}
        </button>
      ))}
    </div>
  );
};

export default Filters;
