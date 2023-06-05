import React from "react";

export default function GasPriceDetails({
  gasSpeed,
  gwei,
  dollar,
}: {
  gasSpeed: string;
  gwei: string;
  dollar: string;
}) {
  return (
    <div>
      <p>{gasSpeed}</p>
      <p>{`${gwei} GWEI`}</p>
      <p>{dollar}</p>
    </div>
  );
}
