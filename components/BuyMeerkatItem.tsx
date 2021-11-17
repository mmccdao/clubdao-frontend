import Image from "next/image";
import Link from "next/link";
import React, { FC, Fragment, useState, useEffect } from "react";

import IMeerkat from "../types/IMeerkat";
import Market from "../types/Market";

interface Props {
  key: string;
  meerkat: IMeerkat;
  market: Market;
}

const BuyMeerkatItem: FC<Props> = ({ key, meerkat, market }) => {
  return (
    <li key={key} className="z-10 lg:py-4 flex flex-col items-center">
      <Link href={meerkat.market.url}>
        <a
          target="_blank"
          className="relative block rounded-md border-8 border-gray-100 p-0 w-72 h-72"
        >
          <Image
            src={meerkat.image}
            alt={meerkat.name}
            layout="intrinsic"
            width="300px"
            height="300px"
          />
          <div className="absolute flex top-0 h-full w-full opacity-0 focus:opacity-100 hover:opacity-100 p-2 justify-center items-end">
            <p className="relative rounded-md mb-2 p-2 px-4 font-semibold text-xl text-gray-900 bg-gray-100">
              {meerkat.name}
            </p>
          </div>
        </a>
      </Link>
      <Link href={market.url}>
        <a
          target="_blank"
          className="block w-44 -mt-2 py-1 rounded-md bg-black focus:bg-pink-700 hover:bg-pink-700 text-center border-8"
        >
          Buy on
          <br /> {market.name}
        </a>
      </Link>
    </li>
  );
};

export default BuyMeerkatItem;
