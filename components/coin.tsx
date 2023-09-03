import Link from "next/link";
import Image from "next/image";
import { Crypto } from "@/types";
import { cn } from "@/lib/utils";

export default function Coin(props: Crypto) {
  const {
    id,
    image,
    name,
    market_cap,
    total_volume,
    price_change_percentage_24h,
    current_price,
  } = props;

  return (
    <Link
      href={`/crypto/${id}`}
      className="w-full flex items-center h-[10vh] border-b border-gray-200"
    >
      <div className="w-1/2 md:w-1/5 flex justify-start items-center gap-1">
        <Image
          src={image}
          alt="coin logo"
          width={200}
          height={200}
          className="w-[15px] aspect-square"
          loading="lazy"
        />
        <p>{name}</p>
      </div>
      <div className="hidden w-1/5 md:grid place-items-center">
        <p>${market_cap?.toLocaleString()}</p>
      </div>
      <div className="hidden w-1/5 md:grid place-items-center">
        <p>${total_volume?.toLocaleString()}</p>
      </div>
      <div className="hidden w-1/5 md:grid place-items-center">
        <p
          className={cn(
            price_change_percentage_24h < 0 ? "text-red-500" : "text-green-700"
          )}
        >
          {price_change_percentage_24h?.toFixed(2)}%
        </p>
      </div>
      <div className="w-1/2 md:w-1/5 flex justify-end">
        <p
          className={cn(
            price_change_percentage_24h < 0
              ? "text-red-500 md:text-gray-800"
              : "text-green-700 md:text-gray-800"
          )}
        >
          $
          {current_price < 10 ? current_price : current_price?.toLocaleString()}
        </p>
      </div>
    </Link>
  );
}
