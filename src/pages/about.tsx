import React from 'react'
import {NavBar} from '../components/NavBar';
import {Footer} from '../components/Footer';

const about = () => {
  return (
    <div>
    
    
    <div className="fixed w-full z-40">
      <NavBar/>
    </div>
    <div className="bg-white h-max flex justify-center p-10 md:p-10">
    </div>
    <div className="bg-white text-black font-source">

    <div className="bg-white flex flex-col font-source md:flex-row">
      <div className="md:w-1/2 pt-10 pr-10 pl-10 md:pl-20">
        <a className="font-bebas text-5xl">OUR MISSION</a>
        <div className="pt-5 pb-5">
          <div>The Society of Asian Scientists and Engineers (SASE) was founded in November 2007 to help Asian heritage scientific and engineering professionals achieve their full potential.</div>
          <div className="font-bold">SASE is dedicated to the advancement of Asian heritage scientists and engineers in education and employment so that they can achieve their full career potential. In addition to professional development, SASE also encourages members to contribute to the enhancement of the communities in which they live.</div>  
          <div className="font-bold">For more information about SASE's national mission, check out <a href="https://saseconnect.org" className="underline">https://saseconnect.org</a>.</div>  
        </div>
      </div>
      <div className="md:w-1/2 pl-10 pt-5 pr-10 self-center">
        <img className="w-full rounded-xl"
                  src="/scrc.jpg"
                  width={400}
                  height={300}
                  alt="Picture of SASE SCRC"
        />
      </div>
    </div>


    <div className="bg-white h-max flex justify-center pt-20 p-10 md:p-20"></div>

    <div>
    <a className="font-bebas text-5xl pt-20 pr-5 pl-10 md:pl-20">Core Pilars</a>

    <section id="projects" className='font-source bg-white text-lg grid md:flex-row lg:flex justify-center py-10 pl-10 pr-10 md:pl-20 md:pr-20 gap-5 text-black'>
     
    <div className="card w-100 bg-base-100 md:w-96 shadow-lg">
     <figure><img src="/NC2.jpg" alt="NC" />
     <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center pt-10 rounded-2xl text-shadow-md hover:bg-black hover:bg-opacity-25 text-3xl text-white font-bebas">SASE @ NC</div></figure>
     <div className="card-body bg-white">
         <p className="pb-10">Prepare Asian-heritage students for success in the transnational, global business world.</p>
     </div>
     </div>

     <div className="card w-100 bg-base-100 md:w-96 shadow-lg">
     <figure><img src="/LANTERN.jpg" alt="Lantern Making Social" title="Social"/>
     <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center pt-10 rounded-2xl text-shadow-md hover:bg-black hover:bg-opacity-25 text-3xl text-white font-bebas">Our Lantern Making Social!</div></figure>
     <div className="card-body bg-white">
         <p className="pb-10">Promote diversity and tolerance on campuses and in the workplace.</p>
     </div>
     </div>

     <div className="card w-100 bg-base-100 md:w-96 shadow-lg">
     <figure><img src="/STEMFEST.jpg" alt="SASE at STEMFest" />
     <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center pt-10 rounded-2xl text-shadow-md hover:bg-black hover:bg-opacity-25 text-3xl text-white font-bebas">SASE @ Stemfest</div></figure>
     <div className="card-body bg-white">
         <p className="pb-10">Provide opportunities for its members to make contributions to their local communities.</p>
     </div>
     </div>
    </section>
    </div>

    <div className="bg-white h-max flex justify-center p-5 md:p-20"></div>


    <div className="bg-white flex flex-col font-source md:flex-row">
      <div className="md:w-1/2 pr-10 pl-10 md:pl-20">
        <a className="font-bebas text-5xl">Corporate Partnerships</a>
        <div className="pt-5 pb-5">
          <div>SASE is a non-profit 501(c)3 organization, and contributions to SASE are tax deductible.</div>
          <button className="bg-sky-700 bg-opacity-75 mt-5 hover:bg-sky-700 hover:text-white text-white py-2 px-4 border rounded">
              <a href="/sponsor">
                Learn more!
              </a>
            </button>
        </div>
      </div>
      <div className="md:w-1/2 pl-10 pt-5 pr-10 self-center">
        <img className="w-full rounded-xl"
                  src="/INFO.jpg"
                  width={600}
                  height={400}
                  alt="Picture of SASE Meeting"
        />
      </div>
    </div>
    
    <div className="bg-white h-max flex justify-center pt-20 p-10 md:p-20"></div>
    
    </div>

    <div className="flex bg-white items-center justify-center h-96 bg-fixed bg-center bg-cover bg-big">
    </div>

    <Footer/>
    
    </div>
  )
}

export default about