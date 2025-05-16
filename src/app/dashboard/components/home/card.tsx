import React, { ElementType } from "react";

import { NumberTicker } from "@/components/magicui/number-ticker";

type Props = {
  value: number;
  text: string;
  icon: ElementType;
};

const Card = ({ value, text, icon }: Props) => {
  const Icon = icon;

  return (
    <div className="flex items-center bg-white w-full p-6 rounded-xl gap-5 border-1 border-blue-100/60">
      <Icon className="bg-blue-600/20 p-4 size-16 rounded-full text-blue-600" />
      <div className="flex flex-col">
        <h2 className="text-2xl font-semibold">
          {text.includes("Earnings") ? "$" : ""} <NumberTicker value={value} className="text-2xl font-semibold" />
        </h2>
        <p className="text-md text-gray-600">{text}</p>
      </div>
    </div>
  );
};

export default Card;
