import React from "react";

import Welcome from "./welcome";
import Tasks from "./tasks";
import NextDeadline from "./next-deadline";

const RightSidebar = async () => {
  return (
    <section className="col-span-2 bg-white py-4 px-5 rounded-xl flex flex-col justify-between h-full">
      <Welcome />

      <Tasks />

      <NextDeadline />
    </section>
  );
};

export default RightSidebar;
