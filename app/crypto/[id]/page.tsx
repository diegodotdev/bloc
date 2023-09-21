import { getCryptoCoin } from "@/lib/requests";
import { CryptoDetails } from "@/types";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { AddToWatchlist } from "@/components";

export default async function Page({ params }: { params: { id: string } }) {
  const data: CryptoDetails = await getCryptoCoin(params?.id);

  return (
    <div className="w-[90vw] md:w-[80vw] 2xl:w-[60vw] mx-auto flex flex-col gap-4">
      <div className="w-full flex justify-between items-center h-[10vh]">
        <div className="flex items-center gap-2">
          <Image
            src={data?.image?.large}
            alt={data?.name}
            width={100}
            height={100}
            className="w-[50px] h-[50px] object-cover"
          />
          <p className="font-[600] text-xl">{data?.name}</p>
          <p className="px-4 py-1 rounded-full bg-gray-200">{data?.symbol}</p>
        </div>
        <AddToWatchlist id={data?.id} />
      </div>
      <div className="w-full flex flex-col md:flex-row gap-4 items-center h-[20vh] md:h-[10vh]">
        <div className="w-full md:w-1/2 border-b border-b-gray-200 h-full flex justify-between items-center">
          <p>Market Cap Rank:</p>
          <p>{data?.market_data?.market_cap_rank}</p>
        </div>
        <div className="w-full md:w-1/2 border-b border-b-gray-200 h-full flex justify-between items-center">
          <p>Coin Gecko Rank:</p>
          <p>{data?.coingecko_rank}</p>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-4 items-center h-[20vh] md:h-[10vh]">
        <div className="w-full md:w-1/2 border-b border-b-gray-200 h-full flex justify-between items-center">
          <p>Market Cap:</p>
          <p>${data?.market_data?.market_cap?.usd?.toLocaleString()}</p>
        </div>
        <div className="w-full md:w-1/2 border-b border-b-gray-200 h-full flex justify-between items-center">
          <p>Total Volume:</p>
          <p>${data?.market_data?.total_volume?.usd?.toLocaleString()}</p>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-4 items-center h-[20vh] md:h-[10vh]">
        <div className="w-full md:w-1/2 border-b border-b-gray-200 h-full flex justify-between items-center">
          <p>% Change:</p>
          <p
            className={cn(
              data?.market_data?.price_change_percentage_24h < 0
                ? "text-red-500"
                : "text-green-700"
            )}
          >
            {data?.market_data?.price_change_percentage_24h?.toFixed(2)}%
          </p>
        </div>
        <div className="w-full md:w-1/2 border-b border-b-gray-200 h-full flex justify-between items-center">
          <p>$ Change:</p>
          <p>
            $
            {data?.market_data?.price_change_24h_in_currency?.usd < 10 &&
            data?.market_data?.price_change_24h_in_currency?.usd > -10
              ? data?.market_data?.price_change_24h_in_currency?.usd
              : data?.market_data?.price_change_24h_in_currency?.usd?.toFixed(
                  2
                )}
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-4 items-center h-[20vh] md:h-[10vh]">
        <div className="w-full md:w-1/2 border-b border-b-gray-200 h-full flex justify-between items-center">
          <p>High 24h:</p>
          <p>${data?.market_data?.high_24h?.usd?.toLocaleString()}</p>
        </div>
        <div className="w-full md:w-1/2 border-b border-b-gray-200 h-full flex justify-between items-center">
          <p>Low 24h:</p>
          <p>${data?.market_data?.low_24h?.usd?.toLocaleString()}</p>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-4 items-center h-[20vh] md:h-[10vh]">
        <div className="w-full md:w-1/2 border-b border-b-gray-200 h-full flex justify-between items-center">
          <p>Current Price:</p>
          <p>
            $
            {data?.market_data?.current_price?.usd < 10
              ? data?.market_data?.current_price?.usd
              : data?.market_data?.current_price?.usd?.toLocaleString()}
          </p>
        </div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: data?.description?.en }} />
    </div>
  );
}
