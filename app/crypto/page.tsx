import { getCryptoCoins } from "@/lib/utils";
import { Coin, CryptoData } from "@/components";
import { Crypto } from "@/types";
import { Search } from "lucide-react";

export default async function Page() {
  const coins = await getCryptoCoins();

  return (
    <div className="w-[90vw] 2xl:w-[60vw] mx-auto">
      <CryptoData coins={coins} />
    </div>
  );
}
