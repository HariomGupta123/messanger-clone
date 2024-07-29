"use client"

import { User } from "@prisma/client"
import Image from "next/image"
interface AvatarProps{
    user?:User
}
export default function Avatar({user}:AvatarProps) {
  return (
    <div>
    <div className="relative inline-block rounded-full overflow-hidden
    h-9
    w-9
    md:h-11
    md:w-11
    ">
        <Image alt="Avatar"
        src={user?.image || "/emptyimage.jpeg"}
       fill
       
        
        />
      
    </div>
    <span className="absolute block rounded-full bg-green-500 ring-2 ring-white bottom-14
    left-11
    h-2
    w-2
    md:h-3
    md:w-3
    "/>
    </div>
  )
}
