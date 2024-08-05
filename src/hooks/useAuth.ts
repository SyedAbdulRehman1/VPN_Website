import { useEffect } from "react";
import { useRouter } from "next/router";
import { getTokenn } from "@/services/local-storage";

export function useAuth() {
  const router = useRouter();

  useEffect(() => {
    const user = getTokenn(); // Get the user token

    // Check if the user is authenticated
    if (!user && !router.pathname.startsWith("/login")) {
      router.push("/login"); // Redirect to login if not authenticated
    }
  }, [router]);
}
