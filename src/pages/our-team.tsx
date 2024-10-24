import { type NextPage } from "next";
import {NavBar} from '../components/NavBar';
import {Footer} from '../components/Footer';
import Card from '../components/Card';

const Team : NextPage = () => {
  return (
     <div className="bg-white">
    <div className="fixed w-full z-40">
    <NavBar/>
    </div>
      <div className="pt-20 font-bebas flex justify-center pt-10 text-black text-5xl">
        meet our team
      </div>
      <div className="font-bebas flex justify-center text-gray-400 text-4xl">
        Executive Board
      </div>
      <div className="flex flex-wrap pt-10 flex flex-wrap justify-center gap-20">
      <Card
      imageSrc="/headshots/24-25/Pres_Noah.JPG"
      name="Noah Saria"
      major="Computer Engineering '25"
      role="President"
      link="https://www.linkedin.com/in/noahdsaria/"
      />
      <Card
      imageSrc="/headshots/24-25/EVP_Amey.JPG"
      name="Amey Halappanavar"
      major="Aerospace Engineering '25"
      role="External Vice President"
      link="https://www.linkedin.com/in/ameyhalappanavar/"
      />
      <Card
      imageSrc="/headshots/24-25/IVP_Charisa.JPG"
      name="Charisa Chairat"
      major="Chemical Engineering '25"
      role="Internal Vice President"
      link="https://www.linkedin.com/in/charisa-chairat-8070a8268/"
      />
      <Card
      imageSrc="/headshots/24-25/Tres_Art.JPG"
      name="Art Young"
      major="Computer Science '25"
      role="Treasurer"
      link="https://www.linkedin.com/in/young-art/"
      />
      <Card
      imageSrc="/headshots/24-25/Secr_Jojo.JPG"
      name="Joseph Nguyen"
      major="Industrial Engineering '26"
      role="Secretary"
      link="https://www.linkedin.com/in/jojon/"
      />
      </div>
      <div className="pt-10 font-bebas flex justify-center text-gray-400 text-4xl">
        General Officers
      </div>

      <div className="flex flex-wrap pt-10 flex flex-wrap justify-center gap-20">
      <Card
      imageSrc="/headshots/24-25\TMD_Sam.JPG"
      name="Samantha Li"
      major="Biochemistry '27"
      role="Tech Marketing Director"
      link="https://www.linkedin.com/in/samantha-li-069a282b7/"
      />
      <Card
      imageSrc="/headshots/24-25\Hist_Luis.JPG"
      name="Luis Albos"
      major="MXET '25"
      role="Historian"
      link="https://www.linkedin.com/in/luis-albos/"
      />
      <Card
      imageSrc="/headshots/24-25\SD_Nikki.JPG"
      name="Nikki Arackal"
      major="MMET '25"
      role="Social Director"
      link="null"
      />
      <Card
      imageSrc="/headshots/24-25\PR_Kiera.JPG"
      name="Kiera Ocampo"
      major="ENGR '27"
      role="Public Relations Director"
      link="https://www.linkedin.com/in/kiera-joy-ocampo-2aa054300/"
      />
      <Card
      imageSrc="/headshots/24-25\FD_Pranav.JPG"
      name="Pranav Moogala"
      major="Mechanical Engineering '26"
      role="Fundraising Director"
      link="https://www.linkedin.com/in/pranav-moogala-b826b221b/"
      />
      <Card
      imageSrc="/headshots/24-25\LD_Mya.JPG"
      name="Mya Tinsay"
      major="MXET '26"
      role="Logistics Director"
      link="https://www.linkedin.com/in/mya-tinsay/"
      />
      <Card
      imageSrc="/headshots/24-25\SC_Mihir.JPG"
      name="Mihir Kalvakaalva"
      major="MSEN '26"
      role="Science Chair"
      link="https://www.linkedin.com/in/mihir-kalvakaalva/"
      />
      <Card
      imageSrc="/headshots/24-25\SC_Nick.JPG"
      name="Nick Truong"
      major="CSEN '26"
      role="Sports Chair"
      link="https://www.linkedin.com/in/nick-truong/"
      />
      </div>
      <div className="pt-10 font-bebas flex justify-center text-gray-400 text-4xl">
        Advisor
      </div>
      <div className="pb-20 flex flex-wrap pt-10 flex flex-wrap justify-center gap-20">
      <Card
      imageSrc="/headshots/advisor.jpg"
      name="Pauline Wade"
      major="Computer Science & Engineering"
      role="Associate Professor of Practice"
      link="https://www.linkedin.com/in/paulinewade"
      />
      </div>
      <div className="block md:hidden flex bg-white items-center justify-center h-96 bg-fixed bg-center bg-cover bg-officer_mobile">
      </div>
      <div className="hidden md:block flex bg-white items-center justify-center h-96 bg-fixed bg-center bg-cover bg-officer">
      </div>
    <Footer/>
    </div>
    
    
  )
}

export default Team;