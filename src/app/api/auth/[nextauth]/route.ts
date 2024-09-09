import { authOptions } from "@/app/libs/auth";
import NextAuth from "next-auth";
 // Import from the new file

const handler = NextAuth(authOptions);
export { authOptions };

// Export the HTTP methods handled by this route
export { handler as GET, handler as POST };
