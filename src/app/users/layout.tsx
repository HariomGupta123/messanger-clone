import SideBar from '@/Components/sidebar/SideBar'
import React from 'react'

export default async function UserLayout({children}:{children:React.ReactNode}) {
  return (
       //@ts-export -error server component
        <SideBar>
          <div className='h-full'>
              {children}
          </div>

        </SideBar>
       
      
  )
}
