import { News } from "@/types";
import moment from "moment";

export default function NewsBlock(props: News) {
  const { url, title, date, source } = props;

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="w-full h-[170px] flex flex-col rounded-lg overflow-hidden border border-gray-800"
    >
      <div className="w-full h-[150px] flex flex-col justify-between p-2">
        <p className="font-[600] text-base">{title}</p>
        <div className="w-full flex justify-between items-center">
          <p>{source}</p>
          <p>{moment(date).format("MM-DD-YY")}</p>
        </div>
      </div>
      <div className="w-full h-[20px] bg-gray-800"></div>
    </a>
  );
}
