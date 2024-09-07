import { useEffect, useState } from "react";
import useActiveList from "./userActiveList"
import { pusherClient } from "../libs/pusher";
import { Channel, Members } from "pusher-js";

const useActiveChennel = () => {
    const {set,add,remove}=useActiveList();
    const [activeChennel,setActiveChennel]=useState<Channel | null>(null);
    useEffect(()=>{
        let channel=activeChennel;
        if(!channel){
            channel=pusherClient.subscribe('presence-messanger');
            setActiveChennel(channel)
        };
        channel.bind('pusher:subscription_succeeded',(members:Members)=>{
            const initialMembers:string[]=[];
            members.each((member:Record<string,any>)=>initialMembers.push(member.id));
            set(initialMembers);
        });
        channel.bind("pusher:member_added",(member:Record<string,any>)=>{
            add(member.id)
        });
        channel.bind("pusher:member_removed",(member:Record<string,any>)=>{
            remove(member.id);
        });
        return ()=>{
            if(activeChennel){
                pusherClient.unsubscribe('presence-messanger');
                setActiveChennel(null)
            }
        }
    },[activeChennel,set,add,remove]);
 
}

export default useActiveChennel

