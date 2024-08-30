import { ReactNode } from "react";
import SideBar from "@/Components/sidebar/SideBar";
import ConversationList from "./components/ConversationList";
import getConversations from "../actions/getConversations";
import getUsers from "../actions/getUsers";

export default async function ConversationsLayout({children}:{children:React.ReactNode}){
    const conversations= await getConversations();
    const users =await getUsers();
    console.log(conversations)
    return(
        //@error handleing
        <SideBar>
            <div className="h-full">
                <ConversationList intialItems={conversations} users={users} />
                {children}

            </div>
        </SideBar>
       
           
       
    )
}