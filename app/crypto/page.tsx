import { getCryptoCoins } from "@/lib/requests";
import { CryptoData } from "@/components";

export default async function Page() {
  const coins = await getCryptoCoins();

  return (
    <div className="w-[90vw] 2xl:w-[60vw] mx-auto">
      <CryptoData coins={coins} />
    </div>
  );
}
