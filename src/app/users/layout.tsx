import SideBar from '@/Components/sidebar/SideBar'
import React from 'react'
import getUsers from '../actions/getUsers'
import UserList from './component/UserList'

export default async function UserLayout({children}:{children:React.ReactNode}) {
  const users=await getUsers()
  return (
       //@ts-export -error server component
        <SideBar>
          <div className='h-full'>
            <UserList items={users}/>
              {children}
          </div>

        </SideBar>
       
      
  )
}
