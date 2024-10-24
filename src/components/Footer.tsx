import React from 'react'
import { BsInstagram } from 'react-icons/bs';
import { BsChatRightHeart } from 'react-icons/bs';
import { BsDiscord } from 'react-icons/bs';
import { SiLinktree } from 'react-icons/si';

export const Footer = () => {
  return (
    <div>
    <footer className="md:flex-row flex-col bottom-0 left-0 z-20 w-full bg-white border-t border-gray-200 shadow flex items-center justify-between p-10 md:p-2 md:pl-10 md:pr-10">
    <div>Email us: sasetamu@gmail.com</div>
    <ul className="flex flex-wrap text-center justify-center text-gray-500 mt-5 gap-7 text-xl mr-5">
        <li>
            <a href="https://linktr.ee/tamusase" className="mr-4 hover:text-sky-600  md:mr-6"><SiLinktree/></a>
        </li>
        <li>
            <a href="https://discord.gg/q8mDbDb5Ar" className="mr-4 hover:text-sky-600  md:mr-6"><BsDiscord/></a>
        </li>
        <li>
            <a href="https://www.instagram.com/sasetamu/" className="mr-4 hover:text-sky-600  md:mr-6"><BsInstagram/></a>
        </li>
        <li>
            <a href="mailto:sasetamu@gmail.com" className="mr-4 hover:text-sky-600 "><BsChatRightHeart/></a>
        </li>
    </ul>
    
  </footer>
    </div>
  )
}
