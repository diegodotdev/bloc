export interface Crypto {
  id: string;
  image: string;
  name: string;
  market_cap: number;
  total_volume: number;
  price_change_percentage_24h: number;
  current_price: number;
}

export interface CryptoDetails {
  id: string;
  name: string;
  symbol: string;
  coingecko_rank: number;
  description: {
    en: string;
  };
  image: {
    large: string;
  };
  market_data: {
    current_price: {
      usd: number;
    };
    market_cap: {
      usd: number;
    };
    market_cap_rank: number;
    total_volume: {
      usd: number;
    };
    high_24h: {
      usd: number;
    };
    low_24h: {
      usd: number;
    };
    price_change_percentage_24h: number;
    price_change_24h_in_currency: {
      usd: number;
    };
  };
}

export interface News {
  date: string;
  source: string;
  title: string;
  url: string;
}
