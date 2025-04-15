import React from "react";

import type { Session } from "@/lib/auth";

const WelcomeBar = ({ session }: { session: Session | null }) => {
  return (
    <div className="w-full bg-blue-500 h-32 rounded-xl justify-start items-center p-6 gap-3 flex relative overflow-hidden">
      <div className="size-12 rounded-full bg-blue-100 flex items-center justify-center">
        <span className="text-blue-600 text-2xl font-semibold">{session?.user?.name?.[0] || "U"}</span>
      </div>
      <div>
        <h1 className="text-2xl font-semibold text-white">Welcome again {session?.user.name}!</h1>
        <span className="text-blue-100 text-xl">Manage your projects and clients from here</span>
      </div>
    </div>
  );
};

export default WelcomeBar;
