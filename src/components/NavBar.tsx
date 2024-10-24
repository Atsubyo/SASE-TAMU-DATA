import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';

export const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
    <div className="bg-white border-gray-200 font-source" id="desktop-nav">
    <nav className="bg-white text-lg p-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0"> 
          <Link href="/" className="flex">
            <span className="self-center">
                <div className="flex flex-row">
                    <Image
                    src="/SASE_LOGO.png"
                    width={150}
                    height={50}
                    alt="Picture of SASE TAMU logo"
                    />
                    <div className="ml-4 mr-3 vl"></div>
                    <Image
                    src="/TAMU_LOGO.png"
                    width={50}
                    height={50}
                    alt="Picture of TAMU logo"
                    />
                </div>
                </span>
            </Link>
          </div>
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-10">
              {/* Add your navigation links here */}
              <a href="/" className="hover-underline-animation text-gray-500 rounded-md">Home</a>
              <a href="/about" className="hover-underline-animation text-gray-500 rounded-md">About</a>
              <a href="/our-team" className="hover-underline-animation text-gray-500 rounded-md">Our Team</a>
              <div className="relative inline-block text-left">
                <button type="button" onClick={toggleMenu} className="text-gray-500 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0 flex items-center justify-between">
                <div onClick={toggleMenu} className="hover-underline-animation">
                            Events
                        </div>
                        <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd">
                            </path>
                        </svg>
                </button>
                {isMenuOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1 text-md" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      <a href="/upcoming-events" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" role="menuitem">Upcoming Events</a>
                      {/* <a href="/gallery" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" role="menuitem">Gallery</a> */}
                      {/* <a href="/past-events" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" role="menuitem">Past Events</a> */}
                      {/* <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Trivia Night</a> */}
                    </div>
                  </div>
                )}
              </div>
              <a href="/join" className="hover-underline-animation text-gray-500 rounded-md">Join</a>
              <a href="/sponsor" className="hover-underline-animation text-gray-500 rounded-md">Sponsor</a>
              <a href="/attendance" className="hover-underline-animation text-gray-500 rounded-md">Attendance</a>
              {/* <a href="/user" className="hover-underline-animation text-gray-500 rounded-md">Login</a> */}
              {/* ... */}
            </div>
          </div>
          <div className="lg:hidden">
            <button type="button" onClick={toggleMobileMenu} className="text-black hover:text-slate-500 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="/" className="text-gray-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
              <a href="/about" className="text-gray-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</a>
              <a href="/our-team" className="text-gray-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Officer Team</a>
              <a href="/upcoming-events" className="text-gray-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Upcoming Events</a>
              {/* <a href="/sase-squads" className="text-gray-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">SASE Squads</a> */}
              {/* <a href="/past-events" className="text-gray-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Past Events</a> */}
              <a href="/join" className="text-gray-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Join</a>
              <a href="/sponsor" className="text-gray-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Sponsor</a>
              <a href="/attendance" className="text-gray-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Attendance</a>
              {/* <a href="/user" className="text-gray-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"><AiOutlineUser/></a> */}
            </div>
          </div>
        )}
      </div>
    </nav>
    </div>
    </div>
  )
}

