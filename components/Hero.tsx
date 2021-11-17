import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

import BuyMeerkat from "../components/BuyMeerkat";
import Header from "../components/Header";

import marketplaces from "../data/markets.json";

const Hero: FC = () => {
  return (
    <div>
      <div id="home" className="min-h-screen">
        <Header />

        <div className="static flex flex-col-reverse px-4 py-16 mx-auto lg:block lg:flex-col lg:pt-48 md:px-8 sm:max-w-xl md:max-w-full">
          <div className="z-0 flex justify-center h-full overflow-hidden pt-32 lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center">
            <Image
              src="/mmcc-og-4896-nogb.png"
              className="z-0 object-cover object-top w-full h-auto transform lg:transform-none -translate-x-1/2 translate-y-24 scale-90 lg:w-auto lg:h-full"
              alt="Featured Meerkat"
              layout="fill"
            />
            <div className="lg:hidden absolute bottom-0 w-screen opacity-80 h-screen bg-gradient-to-t from-black"></div>
          </div>

          <div className="w-screen lg:w-full items-center absolute lg:static left-1/2 lg:left-0 bottom-4 transform -translate-x-1/2 lg:translate-x-0 flex flex-col lg:flex-row lg:max-w-screen-xl mx-auto xl:pr-32 justify-end text-center lg:text-left">
            <div className="px-8 lg:px-0 lg:mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
              <div>
                <h2 className="mb-6">
                  <span className="inline-block py-px mb-4 text-4xl text-5xl font-extralight tracking-wider text-gray-100 rounded-full">
                    Meerkat Millionaire
                  </span>
                  <br />
                  <span className="font-sans font-bold text-4xl lg:text-7xl tracking-tight text-gray-100 uppercase sm:leading-none">
                    Club DAO
                  </span>
                </h2>
                <p className="text-lg text-gray-300 md:text-2xl">
                  A community-owned and operated organization for Meerkats to
                  grow, innovate, have fun, and make impact in the Solana NFT
                  space together.
                </p>
              </div>
              <div className="my-2 lg:mt-8">
                <h3 className="text-yellow-300 lg:text-yellow-300 mb-3 font-bold text-lg text-gray-300 md:text-2xl">
                  Already an MMCC holder?
                </h3>
                <p className="text-lg text-gray-300 md:text-2xl">
                  Take the next step in ownership and share your vision with the
                  community.
                </p>
                <div className="mt-8 lg:mt-12">
                  <Link href="https://discord.gg/UcWSDk88ZF">
                    <a target="_blank" className="border-2 p-4 px-8 rounded-full items-center justify-center w-full lg:h-12 lg:px-12 font-semibold text-xl lg:text-2xl tracking-wide text-gray-100 hover:text-gray-900 transition duration-200 rounded shadow-md hover:bg-gray-100 focus:shadow-outline focus:outline-none border-gray-300">
                      Join the DAO
                    </a>
                  </Link>
                </div>
              </div>
              <div className="mt-10 space-x-8 lg:space-x-8 lg:pl-20">
                <Link href="https://twitter.com/mmcclubdao">
                  <a target="_blank">
                    <Image
                      src="/twitter.svg"
                      className="object-cover object-right w-full h-auto lg:w-auto lg:h-full"
                      alt="twitter"
                      width="28px"
                      height="28px"
                    />
                  </a>
                </Link>
                <Link href="https://discord.gg/UcWSDk88ZF">
                  <a target="_blank">
                    <Image
                      src="/discord.svg"
                      className="object-cover object-right w-full h-auto lg:w-auto lg:h-full"
                      alt="discord"
                      width="28px"
                      height="28px"
                    />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BuyMeerkat />
    </div>
  );
};

export default Hero;
