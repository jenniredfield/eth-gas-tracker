import React, { useEffect, useRef, useState } from "react";
import { capitalize } from "../utils/capitalize";

export default function GasPriceDetails({
  gasSpeed,
  gwei,
  dollar,
  index,
}: {
  gasSpeed: string;
  gwei: number;
  dollar: number;
  index: number;
}) {
  const [textColour, setTextColour] = useState("primary");
  const oldValueGwei = useRef<null | number>(null);

  useEffect(() => {
    if (!oldValueGwei.current || oldValueGwei.current === gwei) {
      oldValueGwei.current = gwei;
    } else {
      setTextColour(oldValueGwei.current < gwei ? "green-600" : "red-600");
    }
  }, [gwei, dollar]);
  return (
    <div
      className="bg-primary text-primary font-bold py-6 text-center w-11/12 md:w-4/12 
      flex flex-col justify-center rounded-md shadow-md opacity-0 fade-in border-2 border-slate-200"
      style={{
        animationDelay: `${index * 1.5 * 100}ms`,
      }}
    >
      <div className="flex justify-center items-center">
        <span className="mr-2" style={{ fontSize: "25px" }}>{`${
          gasSpeed === "standard" ? "🐌" : gasSpeed === "fast" ? "🚀" : "⚡"
        }`}</span>
        <p className={`text-lg`}>{capitalize(gasSpeed)} </p>
      </div>
      <p className={`text-2xl text-${textColour}`}>{`${gwei} gwei`}</p>
      <p className={`text-lg text-${textColour}`}>
        {`$${dollar?.toFixed(2)}`} 💵
      </p>
    </div>
  );
}
