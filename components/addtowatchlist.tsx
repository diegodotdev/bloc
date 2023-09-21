"use client";

import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { supabase } from "@/lib/utils";

type Props = {
  id: string;
};

export default function AddToWatchlist({ id }: Props) {
  const [list, setList] = useState<string[]>([]);
  const { user, isSignedIn } = useUser();

  const fetchList = async () => {
    const { data }: any = await supabase
      .from("watchlist")
      .select("*")
      .eq("user_id", user?.id);
    setList(data[0]?.crypto);
  };

  useEffect(() => {
    fetchList();
  }, []);

  const addToWatchList = async (id: string, userId: string) => {
    try {
      if (list?.length === 0) {
        list[list?.length] = id;
        await supabase
          .from("watchlist")
          .insert({
            user_id: user?.id,
            crypto: list,
          })
          .then(() => {
            window.location.reload();
          });
      } else {
        list[list?.length] = id;
        await supabase
          .from("watchlist")
          .update({ crypto: list })
          .eq("user_id", user?.id)
          .then(() => {
            window.location.reload();
          });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const removeFromWatchlist = async (id: string, user: string) => {
    const updatedList = list?.filter((coin) => coin !== id);

    try {
      await supabase
        .from("watchlist")
        .update({ crypto: updatedList })
        .eq("user_id", user)
        .then(() => window.location.reload());
    } catch (error) {
      console.error(error);
    }
  };

  if (!isSignedIn) return <div />;
  return (
    <>
      {list?.filter((coin) => coin === id)?.length !== 0 ? (
        <button
          className="border border-gray-200 rounded-full px-5 py-2 bg-gray-800 text-[#f1efe9]"
          onClick={() => removeFromWatchlist(id, user?.id)}
        >
          Remove from Watchlist
        </button>
      ) : (
        <button
          className="border border-gray-200 rounded-full px-5 py-2"
          onClick={() => addToWatchList(id, user?.id)}
        >
          Add to Watchlist
        </button>
      )}
    </>
  );
}
