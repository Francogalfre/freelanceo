import { auth } from "@/lib/auth";
import { headers } from "next/headers";

import { redirect } from "next/navigation";
import React from "react";

const DashboardPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) redirect("/login");

  return (
    <div>
      Dashboard <br />
      {session?.user.name}
    </div>
  );
};

export default DashboardPage;
