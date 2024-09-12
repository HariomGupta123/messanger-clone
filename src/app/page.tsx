import AuthForm from "@/Components/AuthForm";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" flex  p-15 items-center flex-col justify-between flex-wrap">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">

        <Image src='/masseger_icons-removebg-preview.png' width={70} height={70} className="p-4 mx-auto w-auto" alt="icons" />
        <h1 className="pt-5 text-center text-3xl font-bold tracking-tight text-gray-900"> sign in to your account</h1>
      </div>
      <AuthForm />
    </div>
  );
}
