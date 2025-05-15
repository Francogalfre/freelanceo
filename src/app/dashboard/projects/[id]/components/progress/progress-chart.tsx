"use client";

import { Pie, PieChart, Label, Cell } from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

import { Task } from "@/utils/types";

const ProgressChart = ({ tasks }: { tasks: Task[] }) => {
  const doneCount = tasks.length === 0 ? 0 : tasks.filter((t) => t.isDone).length;
  const percentage = tasks.length === 0 ? 0 : Math.round((doneCount / tasks.length) * 100);

  const chartData =
    tasks.length === 0
      ? [
          { status: "completed", value: 0 },
          { status: "pending", value: 1 },
        ]
      : [
          { status: "completed", value: doneCount },
          { status: "pending", value: tasks.length - doneCount },
        ];

  const chartConfig = {
    completed: {
      label: "Completed Tasks",
      color: "#2b7fff",
    },
    pending: {
      label: "Pending Tasks",
      color: "#e5e7eb",
    },
  } satisfies ChartConfig;

  return (
    <ChartContainer config={chartConfig} className="mx-auto aspect-square h-full w-full max-h-[250px]">
      <PieChart>
        <Pie data={chartData} dataKey="value" nameKey="status" innerRadius={60} outerRadius={80} paddingAngle={2}>
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={chartConfig[entry.status as keyof typeof chartConfig].color} />
          ))}
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                    <tspan x={viewBox.cx} y={viewBox.cy} className="fill-foreground text-3xl font-bold">
                      {percentage}%
                    </tspan>
                    <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 24} className="fill-muted-foreground">
                      Completed
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </Pie>
      </PieChart>
    </ChartContainer>
  );
};

export default ProgressChart;
