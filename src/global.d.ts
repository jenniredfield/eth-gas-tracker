declare global {
  interface PricesApi {
    fast: number;
    standard: number;
    instant: number;
  }
  interface PricesParsed {
    dollar: string;
    gwei: string;
  }

  interface GasPricesParsed {
    fast: PricesParsed;
    standard: PricesParsed;
    instant: PricesParsed;
  }
}

export {};
