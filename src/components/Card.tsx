import React from 'react';
import { BsLinkedin } from 'react-icons/bs';


interface CardProps {
  imageSrc: string;
  name: string;
  major: string;
  role: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, name, major, role, link }) => {
  return (

    <div className="card w-64 h-96 bg-base-100 shadow-xl">
     <figure><img src={imageSrc}/>
     <div className="flex justify-center pt-10 rounded-2xl text-shadow-md font-sans"></div></figure>
     <div className="card-body bg-white text-md">
      <div>
        <div className="inline-flex">
        <p className="text-black">{name}</p>
        <div className="pl-4 mt-1"><a href={link} className="hover:text-sky-600"><BsLinkedin/></a></div>
        </div>
         <p className="text-gray-400">{major}</p>
         <p className="text-gray-400">{role}</p>
      </div>
     </div>
     </div>



  );
};

export default Card;


