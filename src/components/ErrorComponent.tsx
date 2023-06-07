import React from "react";
import Lottie from "lottie-react";
import ErrorAnimation from "../assets/lottie/error-404.json";

const ErrorComponent = () => {
  return (
    <div className="h-full relative flex flex-col justify-center items-center">
      <Lottie
        animationData={ErrorAnimation}
        loop={true}
        className="h-[500px] w-[500px]"
      />
      <p className="text-2xl font-bold">
        There was an error fetching details...
      </p>
      <p className="text-2xl font-bold">Please try again in a minute...</p>
    </div>
  );
};

export default ErrorComponent;
