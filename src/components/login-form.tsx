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

export function LoginForm({ className, ...props }: React.ComponentProps<"div">) {
  const router = useRouter();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: any) => {
    e.preventDefault();

    await authClient.signIn.email(
      {
        email: credentials.email,
        password: credentials.password,
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
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>Enter your email below to login to your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
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
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a href="#" className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  onChange={(e) =>
                    setCredentials({
                      ...credentials,
                      password: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" disabled={isLoading} className="w-full">
                  Login
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="underline underline-offset-4">
                Sign up
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
