import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";
import UserProfile from "./auth/user-profile";
import { Login } from "./auth/login";

export default async function Header() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return (
    <header className="container p-4 mx-auto flex justify-between">
      <Link href="/" className="text-2xl font-bold tracking-tighter">
        Next Voyage
      </Link>
      {session?.user ? <UserProfile user={session.user} /> : <Login />}
    </header>
  );
}
