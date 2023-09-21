import { getNews } from "@/lib/utils";
import { NewsBlock } from "@/components";
import { News } from "@/types";

export default async function Page() {
  const data: News[] = await getNews();

  return (
    <div className="w-[90vw] 2xl:w-[60vw] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 place-items-start">
      {data?.map((news) => (
        <NewsBlock key={news?.url} {...news} />
      ))}
    </div>
  );
}
