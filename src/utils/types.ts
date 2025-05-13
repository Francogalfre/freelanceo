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

export type Task = {
  id: number;
  title: string;
  isDone: boolean;
  createdAt: Date;
  updateAt: Date;
  projectId: number;
};

export type Tips = {
  title: string;
  description: string;
  icon: React.ReactNode;
};
