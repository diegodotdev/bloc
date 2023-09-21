import { supabase } from "@/lib/utils";

export const getCryptoCoins = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/crypto`
  );
  const result = await response.json();
  return result;
};

export const getCryptoCoin = async (id: string) => {
  const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
  const result = await response.json();
  return result;
};

export const getWatchlists = async () => {
  const { data, error: supaError } = await supabase
    .from("watchlist")
    .select("*");

  try {
    return data;
  } catch (error) {
    return supaError;
  }
};
