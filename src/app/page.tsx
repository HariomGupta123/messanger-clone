import Image from "next/image";

export default function Home() {
  return (
   <div className=" flex  m-48 items-center flex-col justify-between">
    <h2 className=" font-bold text-slate-600">messenger</h2>
    <Image src='/masseger_icons-removebg-preview.png' width={70} height={70} className="m-4" alt="masseger icons" />
   </div>
  );
}
