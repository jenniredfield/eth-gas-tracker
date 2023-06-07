import axios from "axios";

export const getEthereumGas = async (): Promise<GasPricesApi> => {
  try {
    const res = await axios.get(
      "https://api.ethgasstation.info/api/fee-estimate",
      { timeout: 9000 }
    );

    return res.data;
  } catch (err) {
    throw err;
  }
};

export const getEthereumDollarPrice = async (): Promise<DollarPriceApi> => {
  try {
    const res = await axios.get(
      "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD",
      { timeout: 9000 }
    );

    return res.data;
  } catch (err) {
    throw err;
  }
};
