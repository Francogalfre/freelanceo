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
  email: string | null;
  phone: string | null;
  location: string | null;
  company: string | null;
  notes: string | null;
  createdAt: Date;
};
