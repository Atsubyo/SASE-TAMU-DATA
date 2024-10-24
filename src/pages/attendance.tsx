import React, { useState } from 'react';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';

interface AttendanceApiResponse {
  attendedEvents: string[];
}

const check_uin = (uin: string) => {
  const uin_regex = new RegExp("^[0-9]{9}$")
  return uin_regex.test(uin)
}

const Attendance = () => {
  const [uin, setUin] = useState('');
  const [attendedEvents, setAttendedEvents] = useState<string[]>([]);
  const [displayUIN, setDisplayUIN] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleButtonClick = () => {
    void fetchAttendance();
  };

  const fetchAttendance = async () => {
    if (!check_uin(uin)) {
      alert("Invalid UIN. Please enter a valid 9-digit UIN.");
      return;
    }
  
    setIsSearching(true);
    setAttendedEvents([]);
    setDisplayUIN(uin);
  
    try {
      const response = await fetch(`/api/attendance?uin=${uin}`);
      if (response.ok) {
        const jsonResponse = await response.json() as AttendanceApiResponse;
        if ('attendedEvents' in jsonResponse) {
          setAttendedEvents(jsonResponse.attendedEvents);
        } else {
          console.error("Invalid response structure:", jsonResponse);
        }
      } else {
        console.error("Failed to fetch attendance data");
      }
    } catch (error) {
      console.error("Error fetching attendance data:", error);
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="text-black flex flex-col min-h-screen bg-white">
      <div className="fixed w-full z-40">
        <NavBar />
      </div>

      <main className="flex-grow pt-20 pb-20">
        <div className="bg-white flex flex-col items-center justify-center">
          <div className="w-5/6 md:w-1/2 p-10 bg-white shadow-lg rounded-xl mt-10">
            <h1 className="font-bebas text-5xl">Check Your Attendance</h1>
            <p className="mb-2">Attendance leads to SASE points which can then be redeemed for raffle tickets for prizes at our annual banquet!</p>
            <input 
              type="text" 
              placeholder='Your UIN' 
              value={uin} 
              onChange={e => setUin(e.currentTarget.value)} 
              className='w-full mb-4 p-2 bg-white border border'
            />
                        <button 
              onClick={handleButtonClick}
              className='w-full bg-sky-700 hover:bg-sky-800 text-white font-semibold py-2 px-4 rounded'
            >
              Check Attendance 
            </button>
          </div>
          {displayUIN && <div className="w-5/6 md:w-1/2 p-10 bg-white shadow-lg rounded-xl mt-5">
            <h2 className="font-bebas text-3xl mb-3">(Spring '24) Attendance for UIN: {displayUIN}</h2>
            {attendedEvents.length > 0 ? (
              <ul>
                {attendedEvents.map(event => (
                  <li key={event}>{event}</li>
                ))}
              </ul>
            ) : (displayUIN && <p>No events attended yet.</p>)}
          </div>}
        </div>
      </main>
      
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Attendance;

