"use client";

import { useMemo } from "react";
import { months } from "@/utils/months";
import { Client, Project } from "@/utils/types";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { ChartConfig, ChartContainer, ChartTooltip } from "@/components/ui/chart";

const chartConfig = {
  earnings: {
    label: "Earnings",
    color: "hsl(221, 83%, 53%)",
  },
} satisfies ChartConfig;

type Props = {
  projects: Project[];
  clients: Client[];
};

export function EarningsChart({ projects, clients }: Props) {
  const chartData = useMemo(() => {
    const data = Array.from({ length: 12 }, (_, i) => ({
      month: months[i],
      earnings: 0,
      projects: 0,
      clients: 0,
    }));

    projects.forEach(({ createdAt, earnings }) => {
      const month = new Date(createdAt).getMonth();
      data[month].earnings += Number(earnings) || 0;
      data[month].projects += 1;
    });

    clients.forEach(({ createdAt }) => {
      const month = new Date(createdAt).getMonth();
      data[month].clients += 1;
    });

    return data;
  }, [projects, clients]);

  const maxY = Math.max(...chartData.map((d) => d.earnings));
  const rawTicks = Array.from({ length: 5 }, (_, i) => Math.round((maxY / 4) * (i + 1)));
  const yAxisTicks = [...new Set(rawTicks)];

  return (
    <ChartContainer className="max-h-[380px] w-full" config={chartConfig}>
      <AreaChart data={chartData} margin={{ top: 10, right: 20, left: 40, bottom: 0 }}>
        <defs>
          <linearGradient id="gradient-earnings" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(221, 83%, 53%)" stopOpacity={0.8} />
            <stop offset="95%" stopColor="hsl(221, 83%, 53%)" stopOpacity={0} />
          </linearGradient>
        </defs>

        <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={13}
          tick={{ fill: "#666", fontSize: 14 }}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tickMargin={45}
          tick={{ fill: "#666", fontSize: 14 }}
          ticks={yAxisTicks}
          tickFormatter={(value) => `$${value.toLocaleString()}`}
        />

        <ChartTooltip
          cursor={false}
          content={({ active, payload }) => {
            if (!active || !payload?.length) return null;
            const { earnings, projects, clients } = payload[0].payload;

            return (
              <div className="rounded-lg border bg-background p-4 shadow-sm w-[180px]">
                <h4 className="mb-3 text-md font-semibold text-muted-foreground">Monthly Overview</h4>
                {[
                  { label: "Earnings", value: `$${earnings.toLocaleString()}`, color: "hsl(221,83%,53%)" },
                  { label: "Projects", value: projects, color: "hsl(142,71%,45%)" },
                  { label: "Clients", value: clients, color: "hsl(346,84%,61%)" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="text-sm text-muted-foreground">{item.label}</span>
                    </div>
                    <span className="font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            );
          }}
        />

        <Area
          dataKey="earnings"
          type="monotone"
          fill="url(#gradient-earnings)"
          stroke="hsl(221, 83%, 53%)"
          strokeWidth={2}
        />
      </AreaChart>
    </ChartContainer>
  );
}
