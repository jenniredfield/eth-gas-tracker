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
      fast: { gwei: 50, dollar: 0.315 },
      average: { gwei: 30, dollar: 0.189 },
      slow: { gwei: 10, dollar: 0.063 },
    };

    const result = await getGweiAndDollarPrices(gweiEntries, ethereumInDollar);

    expect(result).toEqual(expected);
  });

  it("throws an error if an error occurs during conversion", async () => {
    const faultyGweiEntries = {
      fast: 50,
      average: -30, // Invalid value to trigger an error
      slow: 10,
    };

    await expect(
      getGweiAndDollarPrices(faultyGweiEntries, ethereumInDollar)
    ).rejects.toThrow();
  });
});
