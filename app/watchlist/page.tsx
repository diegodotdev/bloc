import { getCryptoCoins, getWatchlists } from "@/lib/requests";
import { Watchlist } from "@/components";

export const revalidate = 300;

export default async function Page() {
  const coins = await getCryptoCoins();
  const watchlists = await getWatchlists();

  return (
    <div className="w-[90vw] mx-auto">
      <Watchlist coins={coins} watchlists={watchlists} />
    </div>
  );
}
