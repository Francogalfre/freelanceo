"use server";

import { database } from "@/lib/database";
import { eq } from "drizzle-orm";

import { clientsTable } from "@/lib/database/schemas/clients";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { revalidatePath } from "next/cache";

interface ClientProps {
  name: string;
  email: string;
  phone?: string;
  location?: string;
  company?: string;
  notes?: string;
}

export const createClient = async (props: ClientProps) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    throw new Error("User not authenticated");
  }

  const data = {
    name: props.name,
    email: props.email,
    phone: props.phone,
    location: props.location,
    company: props.company,
    notes: props.notes,
    userId: session.user.id,
  };

  try {
    await database
      .insert(clientsTable)
      .values(data as any)
      .execute();

    revalidatePath("/dashboard/clients");

    return { success: true, message: "Client created successfully" };
  } catch (error) {
    console.error("Error creating client:", error);
    return { success: false, message: "Failed to create client" };
  }
};

export const getClients = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    throw new Error("User not authenticated");
  }

  try {
    const clients = await database
      .select()
      .from(clientsTable)
      .where(eq(clientsTable.userId, session.user.id))
      .execute();

    return clients;
  } catch (error) {
    console.error("Error fetching clients:", error);
    throw new Error("Failed to fetch clients");
  }
};
