import axios from "axios";

export const getEthereumGas = async () => {
  try {
    const res = await axios.get(
      "https://api.ethgasstation.info/api/fee-estimate"
    );
    console.log("🚀 ~ file: api.js:6 ~ getEthereumGas ~ res", res);
    return res.data;
  } catch (err) {
    console.log("🚀 ~ file: api.js:9 ~ getEthereumGas ~ err", err);
    throw err;
  }
};

export const getEthereumDollarPrice = async () => {
  try {
    const res = await axios.get(
      "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD"
    );

    return res.data;
  } catch (err) {
    throw err;
  }
};
