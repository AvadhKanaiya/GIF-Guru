import Random from "./components/Random";
import Tag from "./components/Tag";
import { Analytics } from "@vercel/analytics/react"

export default function App() {
  return (
    <div className="w-full h-screen flex flex-col background bg-cover relative items-center overflow-x-hidden">
      <h1 className="bg-green-900 text-yellow-300  rounded-lg  text-center mt-[40px] ml-[15px] px-10 py-2 text-3xl font-bold">Random GIFS</h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random />
        <Tag />
        <Analytics />
      </div>
    </div>
  );
}
