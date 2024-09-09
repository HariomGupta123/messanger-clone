import { authOptions } from "@/app/libs/auth";
import NextAuth from "next-auth";

const handler = NextAuth(authOptions);

export { authOptions }; // <-- Exporting authOptions for use elsewhere
export { handler as GET, handler as POST };