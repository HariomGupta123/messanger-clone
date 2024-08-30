"use client"
import useConversation from '@/app/hooks/useConversation'
import axios from 'axios';
import React from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { HiPaperAirplane, HiPhoto } from 'react-icons/hi2';
import MessageInput from './MessageInput';
import {CldUploadButton} from "next-cloudinary"
const Form = () => {
    const {conversationId}=useConversation();
    const {register,handleSubmit,setValue,formState:{errors}}=useForm<FieldValues>({defaultValues:{
        message:''
    }});
    const onSubmit:SubmitHandler<FieldValues>=(data)=>{
        setValue('message','',{shouldValidate:true});
        axios.post('/api/messages',{...data,conversationId})
    }
    const handleUplaod=(result:any)=>{
      axios.post('/api/messages',{
        image:result?.info?.secure_url,conversationId
      })

    }
  return (
    <div className=' py-4 px-4 bg-white border-t flex items-center gap-2 lg:gap-4 w-full mb-12'>
      <CldUploadButton 
      options={{maxFiles:1}}
        onSuccess={handleUplaod}
        uploadPreset='tir5sico'
       
      ><HiPhoto size={30} className='text-sky-500 relative' />
      </CldUploadButton> 
      <form onSubmit={handleSubmit(onSubmit)} className='flex items-center gap-2 lg:gap-4 w-full'>
            <MessageInput id='message' register={register} errors={errors} required placeholder="write a message"/>
            <button type='submit' className='relative rounded-full p-2 bg-sky-600 cursor-pointer hover:bg-sky-600 transition'>
              <HiPaperAirplane 
              size={18}
              className='text-white'
              />
            </button>
      </form>
      
    </div>
  )
}

export default Form
