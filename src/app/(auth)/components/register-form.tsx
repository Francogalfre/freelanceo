"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { authClient } from "@/lib/auth-client";

import { AlertOctagon, Eye, EyeOff } from "lucide-react";

export function RegisterForm({ className, ...props }: React.ComponentProps<"div">) {
  const router = useRouter();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });
  const [error, setError] = useState<string>("");

  const handleRegister = async (e: any) => {
    e.preventDefault();

    if (credentials.password !== credentials.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (credentials.password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }

    if (!/[A-Z]/.test(credentials.password)) {
      setError("Password needs one uppercase letter.");
      return;
    }

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
          setError(ctx.error.message);
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

              <div className="grid gap-3 relative">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type={showPassword.password ? "text" : "password"}
                  placeholder="********"
                  required
                  value={credentials.password}
                  onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                  className={`h-12 pr-10 ${error ? "border-red-500" : ""}`}
                />
                <button
                  type="button"
                  className="absolute right-3 top-13 transform -translate-y-1/2 text-gray-500"
                  onClick={() =>
                    setShowPassword({ password: !showPassword.password, confirmPassword: showPassword.confirmPassword })
                  }
                >
                  {showPassword.password ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              <div className="grid gap-3 relative">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input
                  id="confirm-password"
                  type={showPassword.confirmPassword ? "text" : "password"}
                  placeholder="********"
                  required
                  value={credentials.confirmPassword}
                  onChange={(e) => setCredentials({ ...credentials, confirmPassword: e.target.value })}
                  className={`h-12 pr-10 ${error ? "border-red-500" : ""}`}
                />
                <button
                  type="button"
                  className="absolute right-3 top-13 transform -translate-y-1/2 text-gray-500"
                  onClick={() =>
                    setShowPassword({ password: showPassword.password, confirmPassword: !showPassword.confirmPassword })
                  }
                  tabIndex={-1}
                >
                  {showPassword.confirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              <div className="flex flex-col gap-3">
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="text-md h-12 py-4 px-6 bg-blue-600 hover:bg-blue-700 transition-colors cursor-pointer text-white flex gap-2 items-center rounded-lg"
                >
                  Register
                </Button>
                {error && (
                  <div
                    className="flex items-center gap-2 text-center justify-center bg-red-100 border border-red-200 text-red-500 px-4 py-3 rounded-lg"
                    role="alert"
                  >
                    <AlertOctagon size={20} />
                    <p>{error}</p>
                  </div>
                )}
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
