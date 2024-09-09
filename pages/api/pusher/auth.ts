import { authOptions } from "@/app/libs/auth";
import { pusherServer } from "@/app/libs/pusher";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
    const session = await getServerSession(request, response, authOptions);
    
    if (!session?.user?.email) {
        return response.status(401).json({ message: "Unauthorized" });
    }

    const { socket_id: socketId, channel_name: channel } = request.body;

    if (!socketId || !channel) {
        return response.status(400).json({ message: "Missing parameters" });
    }

    const data = {
        user_id: session.user.email,
    };

    try {
        const authResponse = pusherServer.authorizeChannel(socketId, channel, data);
        return response.json(authResponse);
    } catch (error) {
        return response.status(500).json({ message: "Pusher authorization failed", error });
    }
}
