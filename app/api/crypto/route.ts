import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false&locale=en"
  );
  const result = await response.json();

  try {
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ message: "There was an error." });
  }
}
