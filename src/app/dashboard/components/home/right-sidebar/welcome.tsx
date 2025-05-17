import React from "react";

import Image from "next/image";
import Topographic from "@/public/resources/topographic-background.png";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const Welcome = async () => {
  const session = await auth.api.getSession({ headers: await headers() });
  const date = new Date();
  const hour = date.getHours();

  let greeting = "Welcome again";

  if (hour >= 5 && hour <= 12) {
    greeting = "Good morning";
  } else if (hour >= 12 && hour <= 20) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  return (
    <header className="bg-blue-600 rounded-xl p-6 shadow flex flex-col gap-2 items-center relative">
      <div className="size-16 rounded-full bg-white flex items-center justify-center mb-2 z-10">
        <span className="text-blue-600 text-3xl font-bold">{session?.user.name?.[0]}</span>
      </div>
      <div className="text-center z-10">
        <div className="font-bold text-white text-2xl">{session?.user.name}</div>
        <div className="text-gray-300 text-lg mb-4">{session?.user.email}</div>
        <div className="text-gray-200 text-md mt-2">
          {greeting} {session?.user.name}!<br />
          Let's continue with your Freelance career
        </div>
      </div>

      <Image
        src={Topographic.src}
        alt="Topographic effect for background"
        width={100}
        height={100}
        className="absolute h-full w-full top-0 right-0 object-cover z-0 opacity-40 brightness-150"
      />
    </header>
  );
};

export default Welcome;
