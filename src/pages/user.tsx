import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image';
import Link from 'next/link';

const User = () => {

  // interfaces - eslint
  interface ApiResponse {
    message: string;
  }
  
  interface EventSchedule {
    [key: string]: {
      startDate: Date;
      endDate: Date;
    };
  }

  interface TimeResponse {
    time: string;
  }

  // MODIFY the following ONLY when changing current events
  // Event key is listed in schema.prisma under the folder "prisma"
  const eventSchedule: EventSchedule = {

    // TEST GBM
    GBM1: {
      startDate: new Date('2024-01-15T18:30:00-06:00'),
      endDate: new Date('2024-01-22T18:00:00-06:00'),
    },

    // GBMS
    SPRINGINFO: {
      startDate: new Date('2024-01-23T18:30:00-06:00'),
      endDate: new Date('2024-01-23T21:00:00-06:00'),
    },
    WILLIAMSGBM: {
      startDate: new Date('2024-02-06T18:30:00-06:00'),
      endDate: new Date('2024-02-06T21:00:00-06:00'),
    },
    PEPSICOGBM: {
      startDate: new Date('2024-02-07T18:30:00-06:00'),
      endDate: new Date('2024-02-07T21:00:00-06:00'),
    },
    LOCKHEEDGBM: {
      startDate: new Date('2024-02-13T18:30:00-06:00'),
      endDate: new Date('2024-02-13T21:00:00-06:00'),
    },
    CHEVRONGBM: {
      startDate: new Date('2024-03-05T18:30:00-06:00'),
      endDate: new Date('2024-03-05T21:00:00-06:00'),
    },
    DOWGBM: {
      startDate: new Date('2024-03-26T18:30:00-06:00'),
      endDate: new Date('2024-03-26T21:00:00-06:00'),
    },
    ETAMGBM: {
      startDate: new Date('2024-04-09T18:30:00-06:00'),
      endDate: new Date('2024-04-09T21:00:00-06:00'),
    },
    LAUNCHGBM: {
      startDate: new Date('2024-04-16T18:30:00-06:00'),
      endDate: new Date('2024-04-16T21:00:00-06:00'),
    },

    // SOCIALS
    BOBASOCIAL: {
      startDate: new Date('2024-01-25T18:30:00-06:00'),
      endDate: new Date('2024-01-25T21:00:00-06:00'),
    },
    COMSOC1: {
      startDate: new Date('2024-02-15T18:30:00-06:00'),
      endDate: new Date('2024-02-15T21:00:00-06:00'),
    },
    COMSOC2: {
      startDate: new Date('2024-02-29T18:30:00-06:00'),
      endDate: new Date('2024-02-29T21:00:00-06:00'),
    },
    COMSOC3: {
      startDate: new Date('2024-03-21T18:30:00-06:00'),
      endDate: new Date('2024-03-21T21:00:00-06:00'),
    },
    COMSOC4: {
      startDate: new Date('2024-04-04T18:30:00-06:00'),
      endDate: new Date('2024-04-04T21:00:00-06:00'),
    },
    COMSOC5: {
      startDate: new Date('2024-04-18T18:30:00-06:00'),
      endDate: new Date('2024-04-18T21:00:00-06:00'),
    },
  };

  const searchParams = useSearchParams();
  const [uin, setUin] = useState<string>('');
  const [serverTime, setServerTime] = useState<Date>(new Date());
  const [currentEvent, setCurrentEvent] = useState<string>('');

  const fetchServerTime = async () => {
    try {
      console.log('Fetching server time...');
      const response = await fetch('/api/time');
      const data = await response.json() as TimeResponse;
      console.log('Server time fetched:', data.time);
      setServerTime(new Date(data.time));
    } catch (error) {
      console.error('Error fetching server time:', error);
      setServerTime(new Date());
    }
  };

  const determineCurrentEvent = (time: Date) => {
    console.log('Determining current event for time:', time.toISOString());
    for (const [event, { startDate, endDate }] of Object.entries(eventSchedule)) {
      console.log(`Checking event: ${event} (${startDate.toISOString()} - ${endDate.toISOString()})`);
      if (time >= startDate && time <= endDate) {
        console.log(`Current event determined: ${event}`);
        return event;
      }
    }
    console.log('No current event active');
    return 'NULL';
  };
  

  useEffect(() => {
    console.log('Effect hook triggered by serverTime change');
    const event = determineCurrentEvent(serverTime);
    setCurrentEvent(event);
  }, [serverTime]);


  const event = searchParams?.get('event')

  const check_uin = (uin: string) => {
    const uin_regex = new RegExp("^[0-9]{9}$")

    return uin_regex.test(uin)
  }

  const handleButtonClick = () => {
    console.log('button clicked');
    void fetchServerTime(); // This will fetch the server time every time the button is clicked
    void submitAttendance();
  };

  const submitAttendance = async () => {
    console.log('checking attendance');
    console.log(event);
    console.log(currentEvent);
    if (event?.toUpperCase() === currentEvent.toUpperCase()) {
      console.log("event matches current event");
      if (!check_uin(uin)) {
        alert("Invalid UIN");
        return;
      }
  
      try {
        const response = await fetch("/api/attendance", {
          cache: 'no-cache',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ uin: uin, event: event }),
        });
  
        const isApiResponse = (obj: unknown): obj is ApiResponse => {
          return typeof obj === 'object' && obj !== null && 'message' in obj;
        };
  
        if (response.ok) {
          const json: unknown = await response.json(); // Declare json as unknown
          if (isApiResponse(json)) {
            const responseData: ApiResponse = json; // Type is now narrowed to ApiResponse
            alert(responseData.message);
          } else {
            // Handle unexpected response structure
            console.error("Invalid response structure:", json);
          }
        } else {
          const json: unknown = await response.json(); // Declare json as unknown
          if (isApiResponse(json)) {
            const errorData: ApiResponse = json; // Type is now narrowed to ApiResponse
            alert(`Error: ${errorData.message}`);
          } else {
            // Handle unexpected response structure
            console.error("Invalid error response structure:", json);
          }
        }
      } catch (error) {
        if (error instanceof Error) {
          alert(`Failed to mark attendance: ${error.message}`);
        } else {
          alert('Failed to mark attendance');
        }
      } finally {
      // clear the UIN input field after submission
      setUin('');
    }
    } else {
      alert("Event not active");
    }
  };

  return (
    <div className="font-source text-black bg-white flex flex-col items-center justify-start pt-20 min-h-screen">
      <div className="flex flex-row mb-10">
      <Link href="/" className="flex">
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
      </Link>
      </div>
      <div className="w-2/3 md:w-1/2 p-10 bg-white shadow-lg rounded-xl">
      <h1 className="font-bebas text-5xl mb-5">Mark Your Attendance for {event || 'Event'}</h1>
        <input 
          type="text" 
          placeholder='Your UIN' 
          value={uin} 
          onChange={e => setUin(e.currentTarget.value)} 
          className='w-full mb-4 p-2 bg-white border border-blue-500 rounded'
        />
        <button 
        onClick={handleButtonClick}
        className='w-full bg-sky-700 hover:bg-sky-800 text-white font-semibold py-2 px-4 rounded'
        >
          Mark Attendance
        </button>
      </div>

    </div>
  );
};

export default User;