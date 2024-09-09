import { authOptions } from "@/app/libs/auth";
import NextAuth from "next-auth";
 

const handler = NextAuth(authOptions);

// Export the HTTP methods NextAuth will handle
export { handler as GET, handler as POST };