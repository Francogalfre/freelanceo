import { ChartColumn, CalendarCheck, Contact, Receipt, Folder } from "lucide-react";

export const features = [
  {
    id: 1,
    title: "Dashboard",
    text: "Get a comprehensive overview of your freelance business with real-time analytics and project status updates in one place.",
    icon: <ChartColumn />,
    premiun: false,
  },
  {
    id: 2,
    title: "Projects",
    text: "Manage your projects efficiently with our intuitive workspace. Track deadlines, milestones and keep documentation organized.",
    icon: <CalendarCheck />,
    premiun: false,
  },
  {
    id: 3,
    title: "Contacts",
    text: "Store client information, meeting notes and project history in customizable profiles to build stronger relationships.",
    icon: <Contact />,
    premiun: false,
  },
  {
    id: 4,
    title: "Billing - Premium",
    text: "Generate professional invoices, set payment reminders and track expenses. Export detailed financial reports for accounting.",
    icon: <Receipt />,
    premiun: true,
  },
  {
    id: 5,
    title: "Resources - Premium",
    text: "Access a curated library of templates, guides and tools to help streamline your freelance workflow and boost productivity.",
    icon: <Folder />,
    premiun: true,
  },
];
