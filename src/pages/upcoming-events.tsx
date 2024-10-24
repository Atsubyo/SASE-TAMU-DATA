import React from 'react'
import {NavBar} from '../components/NavBar';
import {Footer} from '../components/Footer';

const upcoming_events = () => {
  return (
  <>
  <div className="bg-white">
    <div className="fixed w-full z-40">
    <NavBar/>
    </div>

    <div className="bg-white h-max flex justify-center p-10 md:p-10">
    </div>
    <div className="bg-white text-black font-source"> 
    <a className="font-bebas text-5xl pt-40 pr-5 pl-5 md:pl-20">Upcoming Events</a>
    <div className="hidden md:block">
    <div className="p-10 pb-10 flex justify-center">
    <div className="googleCalendar">
    <iframe src="https://calendar.google.com/calendar/embed?src=sasetamu%40gmail.com&ctz=America%2FChicago"></iframe>
    </div>  
    </div>
    </div>
    
    <div className="block md:hidden">
    <div className="pl-10 pr-10 pt-10 flex justify-center">
    <div className="smgoogleCalendar">
    <iframe src="https://calendar.google.com/calendar/embed?src=sasetamu%40gmail.com&ctz=America%2FChicago&mode=AGENDA" height="400"></iframe>
    </div>  
    </div>
    </div>

    </div>

  </div>
  <div className="flex bg-white items-center justify-center h-96 bg-fixed bg-center bg-cover bg-karaoke">
  </div>
  <Footer/>



  </>
  )
}

export default upcoming_events;