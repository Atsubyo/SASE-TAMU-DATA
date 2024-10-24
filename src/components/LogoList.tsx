import React from 'react';


//string of image values is passed into this interface, which is futher specified in inteface Image
interface LogoList {
  images: Image[];
}

interface Image {
  link: string;
  alt: string;
  path: string;
}

const LogoList: React.FC<LogoList> = ({ images }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {images.map((image: Image, index: number) => (
        <a href={image.link} key={index}>
        <img
          src={image.path}
          alt={image.alt}
          //change the following className for styling
          className="h-36 p-4"
        />
        </a>
      ))}
    </div>
  );
};

export default LogoList;
