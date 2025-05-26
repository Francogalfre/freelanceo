import { authClient } from "@/lib/auth-client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = body;

    const { error } = await authClient.forgetPassword({
      email,
      redirectTo: `/reset-password`,
    });

    if (error) {
      return NextResponse.json({ message: "Failed to send reset email." }, { status: 400 });
    }

    return NextResponse.json({ message: "Email sent" });
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong", error }, { status: 500 });
  }
}
