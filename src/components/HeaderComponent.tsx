import React from "react";
import Lottie from "lottie-react";
import { Typewriter } from "react-simple-typewriter";

import ethereumAnimation from "../assets/lottie/ethereum-coin.json";

const HeaderComponent = ({ ethInDollar }: { ethInDollar: number | null }) => {
  return (
    <div className="w-full flex flex-col relative px-4 md:px-2">
      <div className="top-header flex items-center gap-10">
        <Lottie
          animationData={ethereumAnimation}
          loop={true}
          style={{ width: 100, height: 100 }}
        />
        <div className="text-5xl text-primary">
          <Typewriter
            words={["Ethereum", "Gas", "Tracker"]}
            loop={900}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>
      </div>
      <div className="bottom-header flex justify-between items-center">
        <div className="flex">
          <p className="text-primary font-bold md:text-2xl mr-1">
            Eth In Dollar:
          </p>
          <p className="text-primary font-bold md:text-2xl">{`$${ethInDollar}`}</p>
        </div>
        <div className="flex">
          <p className="text-sm text-gray-500">Updates every 10 seconds</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
