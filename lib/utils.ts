export const cn = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

export const getCryptoCoins = async () => {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false&locale=en"
  );
  const result = await response.json();
  return result;
};

export const getCryptoCoin = async (id: string) => {
  const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
  const result = await response.json();
  return result;
};

export const getNews = async () => {
  const url: any = process.env.NEXT_PUBLIC_API_URL;
  const options: any = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY,
      "X-RapidAPI-Host": process.env.NEXT_PUBLIC_API_HOST,
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result?.articles;
  } catch (error) {
    console.error(error);
  }
};
