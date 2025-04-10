import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";
import UserProfile from "./auth/user-profile";
import { Login } from "./auth/login";
import { Compass } from "lucide-react";

export default async function Header() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return (
    <header className="container mx-auto flex justify-between p-4">
      <Link
        href="/"
        className="flex items-center gap-2 text-2xl font-bold tracking-tighter"
      >
        <Compass className="size-6" />
        Next Voyage
      </Link>
      {session?.user ? <UserProfile user={session.user} /> : <Login />}
    </header>
  );
}
