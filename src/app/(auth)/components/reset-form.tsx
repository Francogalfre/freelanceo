"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { AlertCircle, CheckCircle } from "lucide-react";

import { authClient } from "@/lib/auth-client";

export default function ResetForm() {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);
  const [newPassword, setNewPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const urlToken = new URLSearchParams(window.location.search).get("token");
    setToken(urlToken);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!token) {
      setError("Token is missing or invalid.");
      return;
    }

    setIsLoading(true);
    setError("");
    setSuccess(false);

    const { error } = await authClient.resetPassword({
      newPassword,
      token,
    });

    setIsLoading(false);

    if (error) {
      setError(error.message || "Failed to reset password.");
    } else {
      setSuccess(true);
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <Card className="w-full mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Reset Password</CardTitle>
          <CardDescription className="text-md">Enter your new password below to reset your password.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="new-password" className="text-md">
                  New Password
                </Label>
                <Input
                  id="new-password"
                  type="password"
                  placeholder="New password"
                  className={`h-12 ${error ? "border-red-500" : ""}`}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                  minLength={6}
                />
              </div>

              <div className="flex flex-col gap-3">
                <Button type="submit" disabled={isLoading} className="h-12 bg-blue-600 hover:bg-blue-700 text-white">
                  {isLoading ? "Resetting..." : "Reset Password"}
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
                    <p>Password reset successful! Redirecting...</p>
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
