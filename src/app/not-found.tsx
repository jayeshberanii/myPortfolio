import Image from 'next/image'
import Link from 'next/link'
import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandX } from "@tabler/icons-react";
import  notFound  from '../../public/not_found.png'
export default function NotFound() {
  return (
    <div className="md:max-w-[1460px] w-full mx-auto height-full">
            <div className=' mx-auto grid md:grid-cols-2 grid-cols-1' >
                <div className='flex  items-end justify-center mt-10'>
                    <Image src={notFound} alt='noimage' className='md:h-full h-60 w-56 md:w-96'  />
                </div>
                <div className="md:w-full w-11/12 mx-auto md:mt-32 mt-10">
                    <h2 className="text-center text-4xl md:mb-20 mb-10 leading-relaxed">AWWW...DON'T CRY.</h2>
                    <h4 className="text-center mb-4 block tracking-wide font-normal">It's just a 404 Error</h4>
                    <h4 className="text-center font-normal">What you're looking for may have been misplaced in Long Term Memory</h4>
                    <div className="w-full tracking-wider mx-auto mt-20">
                        <div className="flex justify-center flex-col items-center gap-4 text-neutral-400">
                            <h3> Follow me on</h3>
                            <div className="flex gap-4"> <Link target="_blank" href="https://www.linkedin.com/in/miten-patel-8939571b2" className="group">
                                <IconBrandLinkedin className="w-8 h-8 text-gray-700 linkedin_icon transition duration-300 ease-in-out transform hover:scale-105" />
                            </Link>
                                <div className="flex gap-4">
                                    <Link target="_blank" href="https://www.instagram.com/miten_02/" className="group">
                                        <IconBrandInstagram className="w-8 h-8 text-gray-700  transition duration-300 instagram_icon transform hover:scale-105" />
                                    </Link>
                                </div>

                                <Link target="_blank" href="https://github.com/Miten-Kumar" className="group">
                                    <IconBrandGithub className="w-8 h-8 text-gray-700 github_icon transition duration-300 ease-in-out transform hover:scale-105" />
                                </Link>
                                <Link target="_blank" href="https://twitter.com/miten03" className="group">
                                    <IconBrandX className="w-8 h-8 text-gray-700 transition duration-300 ease-in-out transform hover:scale-105 gitlab_icon" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}