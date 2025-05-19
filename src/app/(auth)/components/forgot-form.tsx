"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { AlertCircle, CheckCircle } from "lucide-react";
import { authClient } from "@/lib/auth-client";

export function ForgotPasswordForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess(false);

    const { error } = await authClient.forgetPassword({
      email,
      redirectTo: `${window.location.origin}/reset-password`,
    });

    setIsLoading(false);

    if (error) {
      setError(error.message || "Something went wrong");
    } else {
      setSuccess(true);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Forgot Password</CardTitle>
          <CardDescription className="text-md">Enter your email and we&apos;ll send you a reset link.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email" className="text-md">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className={`h-12 ${error ? "border-red-500" : ""}`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="flex flex-col gap-3">
                <Button type="submit" disabled={isLoading} className="h-12 bg-blue-600 hover:bg-blue-700 text-white">
                  {isLoading ? "Sending..." : "Send reset link"}
                </Button>

                {error && (
                  <div className="flex items-center gap-2 text-red-500 text-sm bg-red-100 border border-red-200 px-4 py-3 rounded-lg">
                    <AlertCircle size={20} />
                    <p>{error}</p>
                  </div>
                )}

                {success && (
                  <div className="flex items-center gap-2 text-green-600 text-sm bg-green-100 border border-green-200 px-4 py-3 rounded-lg">
                    <CheckCircle size={20} />
                    <p>Reset link sent! Check your inbox.</p>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-4 text-center text-md pt-1">
              <Link href="/login" className="transition-all hover:underline hover:text-gray-800 text-gray-600">
                Back to login
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
