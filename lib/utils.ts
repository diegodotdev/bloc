import { createClient } from "@supabase/supabase-js";

export const cn = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPA_URL || "",
  process.env.NEXT_PUBLIC_SUPA_SERVICE || ""
);

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
