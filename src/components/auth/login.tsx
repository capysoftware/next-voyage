"use client";
import { signIn } from "@/lib/auth-client";
import { Button } from "../ui/button";

export function Login() {
  const handleSignIn = async () => {
    const { error } = await signIn.social({
      provider: "discord",
    });

    if (error) {
      console.error(error.message);
    }
  };
  return <Button onClick={handleSignIn}>Login</Button>;
}
