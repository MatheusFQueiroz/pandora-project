import { Login } from "@/components/Login";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center max-h-screen mx-auto overflow-auto bg-slate-100">
      <main className="flex flex-col items-center justify-between text-center">
        <div className="flex flex-row w-screen">
          <div className="w-2/5 max-w-screen h-screen flex flex-col items-center py-24">
            <Image className="rounded-lg shadow-2xl transition ease-in-out delay-100 hover:scale-105" src="/125527991.jpg" alt="" width={170} height={170}></Image>
            <Login/>
            <p className="text-gray-400 mt-16 text-sm">Todos os direitos reservados Padoria de Lima Queiroz</p>
          </div>
          <svg className="bg-gradient-to-r from-purple-950 via-purple-900 to-pink-800 w-3/5 max-w-screen h-screen"/>
        </div>
      </main>
    </div>
  );
}
