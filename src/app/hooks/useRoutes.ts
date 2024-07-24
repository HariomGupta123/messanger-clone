"use client"
import { useParams } from "next/navigation"
import useConversation from "./useConversation";
import { useMemo } from "react";
import { HiChat, HiUser } from "react-icons/hi";
import { signOut } from "next-auth/react";
import { HiArrowLeftOnRectangle } from "react-icons/hi2";

const useRoutes=()=>{
    const pathname =useParams();
    const {conversationId}=useConversation();
    const routes=useMemo(()=>[{
        label:'Chat',
        href:'/conversation',
        icon:HiChat,
        active:  "/conversation" || !!conversationId
    },
    {
        label:'Users',
        href:'/users',
        icon:HiUser,
        active:  "/users"
    },
    {
        label:'Logout',
        href:'#',
        onClick:()=>signOut(),
        icon:HiArrowLeftOnRectangle
    }

],[conversationId])
return routes
}
export default useRoutes
