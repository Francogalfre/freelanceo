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
    <div className="flex items-center bg-white w-full p-6 rounded-xl gap-5 border-1 border-blue-100">
      <Icon className="bg-blue-600/20 p-4 size-16 rounded-full text-blue-600" />
      <div className="flex flex-col gap-1">
        <h2 className="text-3xl font-semibold">
          {text == "Earnings" ? "$" : ""} <NumberTicker value={value} className="text-3xl font-semibold" />
        </h2>
        <p className="text-md text-gray-600">{text}</p>
      </div>
    </div>
  );
};

export default Card;
