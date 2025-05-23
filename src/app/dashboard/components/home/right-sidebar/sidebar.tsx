import React from "react";

import Welcome from "./welcome";
import Tasks from "./tasks";
import NextDeadline from "./next-deadline";

const RightSidebar = async () => {
  return (
    <section className="lg:col-span-2 bg-white py-4 px-4 md:px-5 rounded-xl flex flex-col justify-between gap-6 lg:mb-6 border-1 border-blue-100/60 max-h-[952px] h-full">
      <Welcome />
      <Tasks />
      <NextDeadline />
    </section>
  );
};

export default RightSidebar;
