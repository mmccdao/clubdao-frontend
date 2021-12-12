import Image from "next/image";
import Link from "next/link";
import React, { FC, Fragment, useState, useEffect } from "react";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="flex flex-col text-center justufy-center pt-5 pb-10">
          <p className="text-sm text-gray-400">
            ClubDAO is a community owned and operated organization. It is
            neither directly affiliated with nor managed by Meerkat Millionaire
            Country Club or Venus Labs.
          </p>
          <p className="mt-2 text-sm text-gray-400">
            © Copyright 2021 ClubDAO. All rights reserved.
          </p>
          <div className="flex justify-center mt-4 space-x-4">
            <Link href="https://twitter.com/mmcclubdao">
              <a target="_blank">
                <Image
                  src="/twitter.svg"
                  className="object-cover object-right w-full h-auto w-auto lg:h-full"
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
  );
};

export default Footer;
