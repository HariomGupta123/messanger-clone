// src/app/api/auth/[nextauth]/route.ts
import NextAuth from "next-auth";
import { authOptions } from "@/app/libs/auth";

const handler = NextAuth(authOptions);

// Export only HTTP methods
export { handler as GET, handler as POST };
