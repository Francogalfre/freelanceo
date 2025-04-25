"use client";

import { useState } from "react";

import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export function RegisterForm({ className, ...props }: React.ComponentProps<"div">) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    name: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async (e: any) => {
    e.preventDefault();
    await authClient.signUp.email(
      {
        email: credentials.email,
        password: credentials.password,
        name: credentials.name,
      },
      {
        onSuccess: () => router.push("/dashboard"),
        onRequest: () => setIsLoading(true),
        onError: (ctx) => {
          alert(ctx.error.message);
          setIsLoading(false);
        },
      }
    );
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Register</CardTitle>
          <CardDescription className="text-md">Enter your email below to login to your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleRegister}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email" className="text-md">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  className="h-12"
                  placeholder="example@gmail.com"
                  onChange={(e) =>
                    setCredentials({
                      ...credentials,
                      email: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="name" className="text-md">
                  Full Name
                </Label>
                <Input
                  id="name"
                  type="name"
                  placeholder="Your name"
                  className="h-12"
                  onChange={(e) =>
                    setCredentials({
                      ...credentials,
                      name: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="password" className="text-md">
                  Password
                </Label>

                <Input
                  id="password"
                  type="password"
                  placeholder="********"
                  required
                  className="h-12"
                  onChange={(e) =>
                    setCredentials({
                      ...credentials,
                      password: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex flex-col gap-3">
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="text-md h-12 py-4 px-6 bg-blue-600 hover:bg-blue-700 transition-colors cursor-pointer text-white flex gap-2 items-center rounded-lg"
                >
                  Register
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-md pt-1">
              Alredy have an account?{" "}
              <Link href="/login" className="underline underline-offset-4">
                Login
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
