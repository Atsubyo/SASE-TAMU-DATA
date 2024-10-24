import React from 'react'
import {NavBar} from '../components/NavBar';
import {Footer} from '../components/Footer';
import LogoList from '../components/LogoList';

//NOTE THAT WHEN ADDING, FILE PATHS ARE CASE-SENSITIVE!

const sponsor = () => {
  const logosPlatinum = [
    { link: 'https://chevron.com', alt: 'Chevron', path: './sponsors/chevron.png'},
    { link: 'https://shell.com', alt: 'Shell', path: './sponsors/shell.png'},
    { link: 'https://phillips66.com', alt: 'Phillips 66', path: './sponsors/phillips.png'},
    // Add more logo paths as needed
  ];
  const logosGold = [
    { link: 'https://lockheedmartin.com', alt: 'Lockheed Martin', path: './sponsors/lockheed.png'},
    { link: 'https://williams.com', alt: 'Williams', path: './sponsors/williams.png'},

    // Add more logo paths as needed
  ];
  const logosSilver = [
    { link: 'https://dow.com', alt: 'Dow', path: './sponsors/dow.png'},
    { link: 'https://southwest.com', alt: 'Southwest', path: './sponsors/southwest.png'},

    // Add more logo paths as needed
  ];
  const logosBronze = [
    { link: 'https://capitalone.com', alt: 'Capital One', path: './sponsors/capital_one.png'},

    // Add more logo paths as needed
  ];

  return (
<div>
  <div className="bg-white">
    <div className="fixed w-full z-4">
    <NavBar/>
    </div>
    
    <div className="bg-white h-max flex justify-center p-10 md:p-10">
    </div>

    

    <div className="bg-white flex flex-col text-black font-source md:flex-row">
      <div className="md:w-1/2 pt-5 pr-10 pb-10 md:pb-20 pl-10 md:pl-20">
        <a className="font-bebas text-black text-5xl">sponsorship</a>
        <div className="pt-5 pb-5">
        <div>SASE is a non-profit 501(c)3 organization, and contributions to SASE are tax deductible.</div>
         <div>If you are interested in partnering with SASE TAMU, we would love to get into contact with you at <a href="mailto:sasetamu.evp@gmail.com" className="underline">sasetamu.evp@gmail.com!</a></div>
          <div>Take a look at our current sponsorship package below.</div> 
          <button className="bg-sky-700 bg-opacity-75 mt-5 hover:bg-sky-700 hover:text-white text-white py-2 px-4 border rounded">
              <a href="/SASE_TAMU_Corporate_Package.pdf">View our Sponsorship Package Here!</a>
            </button>
        </div>
      </div>
      <div className="md:w-1/2 pl-10 pb-5 md:pt-5 pr-10 self-center">
        <img className="rounded-xl"
                  src="/INFO.jpg"
                  width={1063}
                  height={664}
                  alt="SASE Fall Informational"
        />
      </div>
    </div>
    <div className="font-bebas pt-20 text-black text-5xl text-center">
        sponsor sase tamu
      </div>
      <div className="p-5 md:pl-40 pr-10 pl-10 font-source md:pr-40 text-black text-center text-md">
      <div className="">We would like to thoroughly thank our sponsors for their continued support and cooperation.</div>
      <div className="">The success of our chapter depends on your support. Our sponsors are  instrumental in helping us achieve our goals and create a more diverse and inclusive engineering and science community. We look forward to continuing our partnership and working together to make an even greater impact in the future.</div>
      </div>

      <div className="pl-20 pr-20">

      <div className="font-bebas pt-5 text-gray-300 text-5xl text-center">
        Platinum
      </div>
      <LogoList
      images={logosPlatinum}
      />

      <div className="font-bebas pt-5 text-amber-300 text-5xl text-center">
        Gold
      </div>
      <LogoList
      images={logosGold}
      />
      
      <div className="font-bebas pt-5 text-gray-600 text-5xl text-center">
        Silver
      </div>
      <LogoList
      images={logosSilver}
      />
      
      <div className="font-bebas pt-5 text-amber-600 text-5xl text-center">
        Bronze
      </div>
      <LogoList
      images={logosBronze}
      />
      </div>

      <div className="bg-white h-max flex justify-center pt-20 p-10 md:p-20">
    </div>

  </div>
  <div className="flex bg-white items-center justify-center h-96 bg-fixed bg-center bg-cover bg-sponsor">
  </div>
  <Footer/>
</div>
    )
}

export default sponsor