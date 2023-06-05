import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { getEthereumGas } from "./services/api";
import { getGweiAndDollarPrices } from "./utils/priceConverter";
import GasPriceDetails from "./components/GasPriceDetails";

function App() {
  const [gasPrice, setGasPrice] = useState<null | GasPricesParsed>(null);
  console.log("🚀 ~ file: App.tsx:9 ~ App ~ gasPrice:", gasPrice);

  useEffect(() => {
    const fetchPrices = async () => {
      const res = await getEthereumGas();
      const gasPrices = res.gasPrice;

      const pricesWithDollar = await getGweiAndDollarPrices(gasPrices);

      setGasPrice(pricesWithDollar);
    };
    fetchPrices();
  }, []);

  return (
    <div className="App">
      <div>
        {gasPrice &&
          Object.entries(gasPrice).map(([key, value]) => {
            return (
              <GasPriceDetails
                gasSpeed={key}
                dollar={value.dollar}
                gwei={value.gwei}
              />
            );
          })}
      </div>
    </div>
  );
}

export default App;
