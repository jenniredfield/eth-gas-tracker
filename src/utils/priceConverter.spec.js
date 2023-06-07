import { getGweiAndDollarPrices } from "./priceConverter";

describe("getGweiAndDollarPrices", () => {
  const gweiEntries = {
    fast: 50,
    average: 30,
    slow: 10,
  };
  const ethereumInDollar = 3000;

  it("returns the expected GasPricesParsed object", async () => {
    const expected = {
      fast: { gwei: 50, dollar: 3.1500000000000004 },
      average: { gwei: 30, dollar: 1.8900000000000001 },
      slow: { gwei: 10, dollar: 0.63 },
    };

    const result = await getGweiAndDollarPrices(gweiEntries, ethereumInDollar);

    expect(result).toEqual(expected);
  });
});
