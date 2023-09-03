// Code has been updated

import Image from "next/image";

export default function Home() {
  return (
    <main className="w-[90vw] 2xl:w-[60vw] mx-auto h-[76vh] flex justify-center items-center flex-col md:flex-row">
      <div className="w-full md:w-1/2 h-1/2 md:h-full flex justify-center items-center md:items-start flex-col gap-2">
        <p className="text-5xl font-[600]">Welcome to Bloc</p>
        <p className="opacity-90 text-center md:text-left">
          Learn and keep up with the blockchain in an simple <br />
          manner. Check out current coin data and trending news.
        </p>
      </div>
      <div className="w-full md:w-1/2 h-1/2 md:h-full grid place-items-center">
        <Image
          className="h-[150px] md:h-[300px] object-contain"
          src="/images/ethereum.svg"
          alt="people reaching for the ethereum logo"
          width={1000}
          height={1000}
          loading="lazy"
        />
      </div>
    </main>
  );
}
