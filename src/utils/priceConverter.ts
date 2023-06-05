import { getEthereumDollarPrice } from "../services/api";

export const getGweiAndDollarPrices = async (
  gweiEntries: PricesApi
): Promise<GasPricesParsed> => {
  try {
    const etherInDollarPrice = await getEthereumDollarPrice();
    const { USD: ethereumInDollar } = etherInDollarPrice;

    const convertedValues = Object.entries(gweiEntries).map(([key, value]) => {
      const gasLimit = 21000;
      const gasFeeInDollar = value * gasLimit * 10 ** -9 * ethereumInDollar;
      return [
        key,
        { gwei: `${value} gwei`, dollar: `$${gasFeeInDollar.toFixed(2)}` },
      ];
    });

    return Object.fromEntries(convertedValues);
  } catch (err) {
    throw err;
  }
};
