import { Login } from "@/components/Login";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center max-h-screen mx-auto overflow-auto bg-slate-100">
      <main className="flex flex-col items-center justify-between text-center">
        <div className="flex flex-row w-screen">
          <div className="w-2/5 max-w-screen h-screen flex flex-col items-center py-24">
            <Image className="rounded-lg shadow-2xl" src="/125527991.jpg" alt="" width={150} height={150}></Image>
            <Login />
            <p className="text-gray-400 mt-20 text-sm">Todos os direitos reservados Padoria de Lima</p>
          </div>
          <div className="bg-gradient-to-r from-purple-950 to-purple-700 w-3/5 max-w-screen h-screen">
            
          </div>
        </div>
      </main>
    </div>
  );
}
