import Image from "next/image";
import Link from "next/link";
import React, { FC, Fragment, useState, useEffect } from "react";

import markets from "../data/markets.json";
import meerkats from "../data/meerkats.json";

import IMeerkat from "../types/IMeerkat";
import IMarket from "../types/IMarket";

import BuyMeerkatItem from "../components/BuyMeerkatItem";

interface IMarketDirectory extends Record<string, IMarket> {}

const BuyMeerkat: FC = () => {
  const marketDirectory: IMarketDirectory = markets
  return (
    <div className="py-12 z-50 bg-pink-800">
      <div className="px-4 mb-8 flex flex-col">
        <h2 className="font-semibold text-3xl lg:text-4xl text-center">
          Still need a meerkat ?
        </h2>
        <p className="mt-4 font-light text-xl text-center max-w-sm mx-auto">
          Grab your first kat on one of our supported secondary markets.
        </p>
      </div>
      <div className="">
        <ul className="flex flex-row px-8 xl:pl-0 space-x-8 justify-start xl:justify-center overflow-x-scroll no-scrollbar">
          {meerkats.map((meerkat) => (
            <BuyMeerkatItem key={meerkat.name} meerkat={meerkat} market={marketDirectory[meerkat.market.id]}/>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BuyMeerkat;
