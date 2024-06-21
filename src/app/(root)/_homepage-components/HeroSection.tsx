'use client'
// import { BackgroundBoxesDemo } from "@/components/Shared/BackgroundBoxesDemo"
import { ThreeDCardDemo } from "@/components/Shared/ThreeDCardDemo"
import { TypewriterEffectSmoothDemo } from "@/components/Shared/TypewriterEffectSmoothDemo"
import { useRouter } from "next/navigation"
export default function Herosection() {
  const router = useRouter()
  return (

    <div className=" lg:h-[650px] h-[850px] ">
      <div className="lg:grid grid-cols-2 flex flex-col mx-auto items-center lg:h-full w-11/12">
        <div className="order-2 lg:order-1">
          <TypewriterEffectSmoothDemo />
        </div>
        <div className="order-1 lg:order-2 mt-28 lg:mt-0 flex lg:justify-end justify-center lg:items-start items-end">
          <ThreeDCardDemo />
        </div>

      </div>


      <div className="flex lg:hidden justify-around w-10/12 sm:w-96  mx-auto mt-20 ">

        <button className="px-4 py-2 border-b-2 border-portfolio-cyan rounded-md" onClick={() => router.push("/about")}>About Me</button>
        <button className="px-4 py-2 border-b-2 border-portfolio-cyan rounded-md" onClick={() => router.push("/resume")}>Get CV</button>

      </div>
    </div>
  )
}
