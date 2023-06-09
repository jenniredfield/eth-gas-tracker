export const getGweiAndDollarPrices = (
  gweiEntries: PricesApi,
  ethereumInDollar: number
): GasPricesParsed => {
  try {
    const convertedValues = Object.entries(gweiEntries).map(([key, value]) => {
      const gasLimit = 21000;
      const gasFeeInDollar = value * gasLimit * 10 ** -9 * ethereumInDollar;
      return [key, { gwei: value, dollar: gasFeeInDollar }];
    });

    return Object.fromEntries(convertedValues);
  } catch (err) {
    throw err;
  }
};
