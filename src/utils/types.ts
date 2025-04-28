export type Feature = {
  id: number;
  title: string;
  text: string;
  icon: React.ReactNode;
  premiun: boolean;
};

export type Client = {
  id: number;
  userId: string;
  name: string;
  email?: string | null;
  phone: string | null;
  location: string | null;
  company: string | null;
  notes: string | null;
  createdAt: Date;
};

export type Project = {
  id: number;
  title: string;
  description: string;
  deadline: Date;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string | null;
  earnings: string | null;
  clientId: number;
};
