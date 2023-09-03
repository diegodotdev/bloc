"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Crypto } from "@/types";
import { Coin } from "@/components";

type Props = {
  coins: Crypto[];
};

export default function CryptoData({ coins }: Props) {
  const [search, setSearch] = useState("");

  const filteredCoins = coins?.filter((coin) =>
    coin?.name?.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      <div className="w-full h-[10vh] flex justify-end items-center bg-[#f1efe9] sticky top-[12vh] right-0">
        <div className="px-4 py-2 border border-gray-200 rounded-lg flex items-center gap-1 w-full md:w-[300px]">
          <Search size="15px" />
          <input
            type="text"
            placeholder="Search"
            className="grow outline-none bg-transparent"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </div>
      </div>
      <div className="w-full flex items-center h-[10vh] border-b border-gray-200 bg-[#f1efe9] sticky top-[22vh] right-0">
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
      {filteredCoins?.map((coin: Crypto) => (
        <Coin key={coin.id} {...coin} />
      ))}
    </div>
  );
}
