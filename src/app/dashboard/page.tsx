import { auth } from "@/lib/auth";
import { headers } from "next/headers";

import React from "react";

import WelcomeBar from "./components/welcomebar";

const DashboardPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <div>
      <WelcomeBar session={session} />
      Dashboard {session?.user.name}
    </div>
  );
};

export default DashboardPage;
