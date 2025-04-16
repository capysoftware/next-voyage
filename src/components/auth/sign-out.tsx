"use client";
import { LogOut } from "lucide-react";
import { signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { DropdownMenuItem } from "../ui/dropdown-menu";

export default function SignOut() {
  const router = useRouter();
  const handleSignOut = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/");
        },
      },
    });
  };
  return (
    <DropdownMenuItem
      onClick={handleSignOut}
      className="text-muted-foreground focus:text-muted-foreground"
    >
      <LogOut className="mr-2 h-4 w-4" />
      <span>Log out</span>
    </DropdownMenuItem>
  );
}
