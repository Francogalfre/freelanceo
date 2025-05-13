"use client";

import React, { useState, useEffect } from "react";

import { productivityTips } from "@/utils/tips";
import { Tips } from "@/utils/types";

const RandomTips = () => {
  const [randomTip, setRandomTip] = useState<Tips>({
    title: "",
    description: "",
    icon: null,
  });

  useEffect(() => {
    const randomTip = productivityTips[Math.floor(Math.random() * productivityTips.length)];
    setRandomTip({
      title: randomTip.title,
      description: randomTip.description,
      icon: randomTip.icon ? <randomTip.icon size={24} /> : null,
    });
  }, []);

  return (
    <section>
      {
        <div className="flex gap-4 items-center border-1 border-blue-300 rounded-xl p-4 bg-blue-600">
          <div className="text-white">{randomTip.icon}</div>
          <div>
            <h2 className="text-md font-medium text-white">{randomTip.title}</h2>
            <p className="text-md font-normal text-gray-200">{randomTip.description}</p>
          </div>
        </div>
      }
    </section>
  );
};

export default RandomTips;
