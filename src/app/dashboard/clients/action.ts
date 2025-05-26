"use server";

import { database } from "@/lib/database";
import { eq, and } from "drizzle-orm";

import { clientsTable } from "@/lib/database/schemas/clients";

import { getSessionOrThrow } from "@/utils/authSession";

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
  const session = await getSessionOrThrow();

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
    await database.insert(clientsTable).values(data).execute();

    revalidatePath("/dashboard/clients");

    return { success: true, message: "Client created successfully" };
  } catch (error) {
    console.error("Error creating client:", error);
    return { success: false, message: "Failed to create client" };
  }
};

export const getClients = async () => {
  const session = await getSessionOrThrow();

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

export const getClientById = async (id: number) => {
  const session = await getSessionOrThrow();
  const clientId = id;

  try {
    const client = await database
      .select()
      .from(clientsTable)
      .where(and(eq(clientsTable.id, clientId), eq(clientsTable.userId, session.user.id)))
      .execute();

    return client;
  } catch (error) {
    console.error(`Error fetching project id ${clientId}:`, error);
    throw new Error("Failed to fetch project");
  }
};

export const deleteClient = async (id: number) => {
  const clientId = id;

  try {
    await database.delete(clientsTable).where(eq(clientsTable.id, clientId)).execute();

    revalidatePath("/dashboard/clients");
  } catch (error) {
    console.error("Error trynd to delete Client:", error);
    throw new Error("Failed to delete client");
  }
};
