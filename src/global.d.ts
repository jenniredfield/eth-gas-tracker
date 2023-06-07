declare global {
  interface GasPricesApi {
    gasPrice: PricesApi;
    basePrice: number;
  }
  interface DollarPriceApi {
    USD: number;
  }
  interface PricesApi {
    fast: number;
    standard: number;
    instant: number;
  }
  interface PricesParsed {
    dollar: number;
    gwei: number;
  }

  interface GasPricesParsed {
    fast: PricesParsed;
    standard: PricesParsed;
    instant: PricesParsed;
  }
}

export {};
