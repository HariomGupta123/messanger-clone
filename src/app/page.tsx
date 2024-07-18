import AuthForm from "@/Components/AuthForm";
import Image from "next/image";

export default function Home() {
  return (
   <div className=" flex  m-20 items-center flex-col justify-between">
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
    
    <Image src='/masseger_icons-removebg-preview.png' width={70} height={70} className="m-4 mx-auto w-auto" alt="icons" />
    <h1 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900"> sign in to your account</h1>
    </div>
    <AuthForm/>
   </div>
  );
}
