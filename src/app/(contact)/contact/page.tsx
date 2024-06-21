'use client'
import { ContactUsDemo } from "@/components/Shared/ContactUsDemo";
import { IconArrowLeft } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

export default function Contect() {
    const router=useRouter()
    return (
        <div className="md:max-w-[1460px] w-full mx-auto height-full">
            <span className="opacity-90 cursor-pointer" onClick={() => router.replace('/')}>
                    <IconArrowLeft className="md:mx-16 mx-10"/>
                </span>
            <ContactUsDemo />
        </div>
    )
}