"use client";

import { useMemo } from "react";
import { months } from "@/utils/months";
import { Client, Project } from "@/utils/types";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import { ChartConfig, ChartContainer, ChartTooltip } from "@/components/ui/chart";

const chartConfig = {
  earnings: {
    label: "Earnings",
    color: "hsl(221, 83%, 53%)",
  },
  projects: {
    label: "Projects",
    color: "hsl(142, 71%, 45%)",
  },
  clients: {
    label: "Clients",
    color: "hsl(346, 84%, 61%)",
  },
} satisfies ChartConfig;

type Props = {
  projects: Project[];
  clients: Client[];
};

export function EarningsChart({ projects, clients }: Props) {
  const chartData = useMemo(() => {
    const maxEarnings = Math.max(...projects.map((p) => Number(p.earnings) || 0));

    const data = months.map((month, index) => {
      const monthlyEarnings = projects
        .filter((p) => {
          const date = new Date(p.createdAt);
          return date.getMonth() === index;
        })
        .reduce((sum, project) => sum + (Number(project.earnings) || 0), 0);

      const projectCount = projects.filter((p) => {
        const date = new Date(p.createdAt);
        return date.getMonth() === index;
      }).length;

      const clientCount = clients.filter((c) => {
        const date = new Date(c.createdAt);
        return date.getMonth() === index;
      }).length;

      const normalizedEarnings = (monthlyEarnings / maxEarnings) * 10;

      return {
        month,
        earnings: normalizedEarnings,
        originalEarnings: monthlyEarnings,
        projects: projectCount,
        clients: clientCount,
      };
    });

    return data;
  }, [projects, clients]);

  return (
    <ChartContainer className="max-h-[350px] w-full" config={chartConfig}>
      <AreaChart
        data={chartData}
        margin={{
          top: 10,
          right: 20,
          left: 0,
        }}
      >
        <defs>
          <linearGradient id="gradient-earnings" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(221, 83%, 53%)" stopOpacity={0.8} />
            <stop offset="95%" stopColor="hsl(221, 83%, 53%)" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="gradient-projects" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(142, 71%, 45%)" stopOpacity={0.8} />
            <stop offset="95%" stopColor="hsl(142, 71%, 45%)" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="gradient-clients" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(346, 84%, 61%)" stopOpacity={0.8} />
            <stop offset="95%" stopColor="hsl(346, 84%, 61%)" stopOpacity={0} />
          </linearGradient>
        </defs>

        <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" />

        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={10}
          tick={{ fill: "#666", fontSize: 14 }}
          textAnchor="end"
        />

        <ChartTooltip
          cursor={false}
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              return (
                <div className="rounded-lg border bg-background p-4 shadow-sm w-[180px]">
                  <h4 className="mb-3 text-md font-semibold text-muted-foreground">Monthly Overview</h4>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-[hsl(221,83%,53%)]" />
                        <span className="text-sm text-muted-foreground">Earnings</span>
                      </div>
                      <span className="font-medium">${payload[0].payload.originalEarnings.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-[hsl(142,71%,45%)]" />
                        <span className="text-sm text-muted-foreground">Projects</span>
                      </div>
                      <span className="font-medium">{payload[1].payload.projects}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-[hsl(346,84%,61%)]" />
                        <span className="text-sm text-muted-foreground">Clients</span>
                      </div>
                      <span className="font-medium">{payload[2].payload.clients}</span>
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          }}
        />

        <Area
          dataKey="earnings"
          type="monotone"
          fill="url(#gradient-earnings)"
          stroke="hsl(221, 83%, 53%)"
          strokeWidth={2}
          stackId="1"
        />
        <Area
          dataKey="projects"
          type="monotone"
          fill="url(#gradient-projects)"
          stroke="hsl(142, 71%, 45%)"
          strokeWidth={2}
          stackId="1"
        />
        <Area
          dataKey="clients"
          type="monotone"
          fill="url(#gradient-clients)"
          stroke="hsl(346, 84%, 61%)"
          strokeWidth={2}
          stackId="1"
        />
      </AreaChart>
    </ChartContainer>
  );
}
