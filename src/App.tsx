import { useCallback, useEffect, useState } from "react";
import { CirclesWithBar } from "react-loader-spinner";
import Lottie from "lottie-react";

import GasPriceDetails from "./components/GasPriceDetails";
import HeaderComponent from "./components/HeaderComponent";
import ErrorComponent from "./components/ErrorComponent";

import { getGweiAndDollarPrices } from "./utils/priceConverter";
import { getEthereumDollarPrice, getEthereumGas } from "./services/api";

import cryptoAnimation from "./assets/lottie/crypto-animation.json";

import "./App.css";

function App() {
  const [gasPrice, setGasPrice] = useState<null | GasPricesParsed>(null);
  const [ethInDollar, setEthInDollar] = useState<null | number>(null);
  const [isLoading, setIsLoading] = useState<null | boolean>(true);
  const [hasError, setError] = useState<null | boolean>(false);

  const fetchPrices = useCallback(async (isRefetching?: boolean) => {
    try {
      if (!isRefetching) {
        setIsLoading(true);
      }
      const res = await getEthereumGas();
      const gasPrices = res.gasPrice;
      const resEthUSD = await getEthereumDollarPrice();
      setIsLoading(false);
      const { USD } = resEthUSD;
      const { standard, fast, instant } = getGweiAndDollarPrices(
        gasPrices,
        USD
      );
      setError(false);
      setGasPrice({ standard, fast, instant });
      setEthInDollar(USD);
    } catch (err) {
      setError(true);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPrices();
    // keep fetching every 10 seconds...
    const interval = setInterval(() => {
      fetchPrices(true);
    }, 10000);
    return () => clearInterval(interval);
  }, [fetchPrices]);

  if (hasError) {
    return <ErrorComponent />;
  }

  if (isLoading) {
    return (
      <div className="h-full flex justify-center mt-2">
        <CirclesWithBar
          height="50"
          width="50"
          color="#1A1A1A"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          outerCircleColor=""
          innerCircleColor=""
          barColor=""
          ariaLabel="circles-with-bar-loading"
        />
      </div>
    );
  }

  return (
    <div className="h-full relative">
      <div className="container md:w-6/12 mx-auto">
        <HeaderComponent ethInDollar={ethInDollar} />
        <div className="flex items-center md:justify-between py-4 gap-2 flex flex-col md:flex-row mt-2">
          {gasPrice &&
            Object.entries(gasPrice).map(([key, value], index) => {
              return (
                <GasPriceDetails
                  gasSpeed={key}
                  dollar={value.dollar}
                  gwei={value.gwei}
                  index={index}
                  key={key}
                />
              );
            })}
        </div>
      </div>
      <div className="absolute right-0 md:right-10 bottom-2">
        <Lottie
          animationData={cryptoAnimation}
          loop={true}
          className="md:h-[400px] md:w-[300px] h-[230px] w-[190px]"
        />
      </div>
    </div>
  );
}

export default App;
