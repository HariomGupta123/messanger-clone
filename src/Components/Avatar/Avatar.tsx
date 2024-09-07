"use client"

import useActiveList from "@/app/hooks/userActiveList"
import { User } from "@prisma/client"
import Image from "next/image"
interface AvatarProps{
    user?:User
}
const Avatar:React.FC<AvatarProps>=({user})=> {
  const {members,add,remove}=useActiveList();
  const isActive=members.indexOf(user?.email!) !==-1;
  return (
    <div>
    <div className="
    relative 
    inline-block 
    rounded-full 
    overflow-hidden
    h-9
    w-9
    md:h-11
    md:w-11
    ">
        <Image 
        alt="Avatar"
        fill
        src={user?.image || "/emptyimage.jpeg"}
        />
      
    </div>
    {isActive && (<span className=" relative left-8 block rounded-full bg-green-500 ring-2 ring-white bottom-12
    
    h-2
    w-2
    md:h-3
    md:w-3
    "/>)}
    </div>
  )
}
export default Avatar;
