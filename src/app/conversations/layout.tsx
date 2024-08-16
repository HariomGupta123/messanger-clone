import { ReactNode } from "react";
import SideBar from "@/Components/sidebar/SideBar";
import ConversationList from "./components/ConversationList";
import getConversations from "../actions/getConversations";

export default async function ConversationsLayout({children}:{children:React.ReactNode}){
    const conversations= await getConversations()
    return(
        //@error handleing
        <SideBar>
            <div className="h-full">
                <ConversationList intialItems={conversations}/>
                {children}

            </div>
        </SideBar>
       
           
       
    )
}