"use client";

import { Crypto, Watchlist as List } from "@/types";
import { useUser } from "@clerk/nextjs";
import { Coin } from ".";

type Props = {
  coins: Crypto[];
  watchlists: List[] | any;
};

export default function Watchlist({ coins, watchlists }: Props) {
  const { user } = useUser();
  const usersList = watchlists.filter(
    (list: any) => list?.user_id === user?.id
  );

  const usersCoins = coins?.filter((coin) =>
    usersList[0]?.crypto?.includes(coin?.id)
  );
  return (
    <div className="w-full">
      <div className="w-full flex items-center h-[10vh] border-b border-gray-200 bg-[#f1efe9] sticky top-[12vh] right-0">
        <div className="w-1/2 md:w-1/5 flex justify-start">
          <p className="font-[600]">Coin</p>
        </div>
        <div className="w-1/5 hidden md:grid place-items-center">
          <p className="font-[600]">Market Cap</p>
        </div>
        <div className="w-1/5 hidden md:grid place-items-center">
          <p className="font-[600]">Volume</p>
        </div>
        <div className="w-1/5 hidden md:grid place-items-center">
          <p className="font-[600]">% Change</p>
        </div>
        <div className="w-1/2 md:w-1/5 flex justify-end">
          <p className="font-[600]">Price</p>
        </div>
      </div>
      {usersCoins?.map((coin) => (
        <Coin key={coin?.id} {...coin} />
      ))}
    </div>
  );
}
