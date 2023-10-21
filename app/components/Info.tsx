import React from "react";
import Image from "next/image";
import AppStore from "../images/appstore.svg";
import GooglePlay from "../images/googleplay.svg";
import CarMax from "../images/carmax.png";
import { Star } from "../icons/Star";

const Info = () => {
  return (
    <div className="flex justify-between items-center bg-gray-100 p-8 w-full">
      <div className="flex items-center space-x-4">
        <div className="flex">
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>
        <span className="text-black">5 Stars Reviews</span>
      </div>

      <div className="flex items-center space-x-4">
        <Image src={CarMax} alt="IKEA Logo" width={180} />
        <span className="text-black">Partnered with IKEA</span>
      </div>

      <div className="flex items-center space-x-4">
        <div className="">
          <Image src={AppStore} alt="App Store" />
        </div>
        <div className="">
          <Image src={GooglePlay} alt="Google Play" />
        </div>
      </div>
    </div>
  );
};
export default Info;
