import { AlertCircle, CircleDollarSign, Users, NotepadText, CircleCheck, ChartColumn } from "lucide-react";

export const challenges = [
  {
    id: 1,
    title: "Time Management",
    text: "Struggling to balance multiple projects and deadlines while maintaining client relationships.",
    icon: <AlertCircle />,
  },
  {
    id: 2,
    title: "Payment Tracking",
    text: "Difficulty in tracking payments, invoices, and managing financial aspects of freelance work.",
    icon: <CircleDollarSign />,
  },
  {
    id: 3,
    title: "Client Management",
    text: "Keeping track of client communications, requirements, and project progress across different platforms.",
    icon: <Users />,
  },
];

export const solutions = [
  {
    id: 1,
    title: "Unified Dashboard",
    text: "All your projects, clients, and tasks in one place with intuitive organization and tracking.",
    icon: <NotepadText />,
  },
  {
    id: 2,
    title: "Automated Workflows",
    text: "Streamline your processes with automated task management and client communication tools.",
    icon: <CircleCheck />,
  },
  {
    id: 3,
    title: "Smart Analytics",
    text: "Make data-driven decisions with insights about your productivity, earnings, and client relationships.",
    icon: <ChartColumn />,
  },
];
