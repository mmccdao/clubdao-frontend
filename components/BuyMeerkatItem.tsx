import Image from "next/image";
import Link from "next/link";
import React, { FC, Fragment, useState, useEffect } from "react";

import IMeerkat from "../types/IMeerkat";
import IMarket from "../types/IMarket";

interface Props {
  key: string,
  meerkat: IMeerkat,
  market: IMarket,
}

const BuyMeerkatItem: FC<{key: string, meerkat: IMeerkat, market: IMarket }> = ({key, meerkat, market}) => {
  return (
    <li key={key} className="z-10 lg:py-4 flex flex-col items-center">
      <Link href={meerkat.market.url}>
        <a
          target="_blank"
          className="block rounded-md border-8 border-gray-100 p-0 w-72 h-72"
        >
          <Image
            src={meerkat.image}
            alt={meerkat.name}
            layout="intrinsic"
            width="300px"
            height="300px"
          />
        </a>
      </Link>
      <Link href={market.url}>
        <a className="block w-44 -mt-2 py-1 rounded-md bg-black text-center border-8">
          Buy on
          <br /> {market.name}
        </a>
      </Link>
    </li>
  );
};

export default BuyMeerkatItem;
