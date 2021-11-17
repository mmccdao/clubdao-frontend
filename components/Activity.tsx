import Link from "next/link";
import Image from "next/image";
import React, { FC, Fragment, useState } from "react";

import Section from "./Section";

const heading = "Activities";
const subheading = "";

const Activity: FC = () => {
  return (
    <div id="faq" className="bg-gray-800">
      <div className="container px-6 pb-16 max-w-screen-xl mx-auto">
        <Section heading={heading} subheading={subheading}>
          <Fragment></Fragment>
        </Section>

        <div className="flex flex-col space-y-8 lg:space-y-0 lg:flex-row justify-between items-center text-gray-300">
          <div className="flex flex-col w-80 items-center text-center">
            <div className="mb-6">
              <Image
                src="/marketing-collaboration.png"
                alt="Marketing Collaborations"
                layout="fixed"
                width="96"
                height="96"
              />
            </div>
            <p className="text-2xl font-semibold lg:text-3xl">
              Marketing Collaborations
            </p>
            <p className="py-6 text-lg lg:text-xl">
              We partner with other new and established NFT projects for
              co-promotion and other collaborations.
            </p>
            <p className="text-lg lg:text-xl">
              <Link href="https://twitter.com/mmcclubdao">
                <a
                  className="underline hover:no-underline focus:text-pink-700"
                  target="_blank"
                >
                  Contact us
                </a>
              </Link>{" "}
              to discuss possibilities.{" "}
            </p>
          </div>
          <div className="flex flex-col w-80 items-center text-center">
            <div className="mt-6 lg:mt-0 mb-6">
              <Image
                src="/education.png"
                alt="Crypto Education"
                layout="fixed"
                width="96"
                height="96"
              />
            </div>
            <p className="text-2xl font-semibold lg:text-3xl">
              Crypto
              <br />
              Education
            </p>
            <p className="py-6 text-lg lg:text-xl">
              We create programs and media to drive awareness, skill building,
              and safety in the crypto and Solana NFT spaces.
            </p>
            <p className="text-lg lg:text-xl">Details TBA.</p>
          </div>
          <div className="flex flex-col w-80 items-center text-center">
            <div className="mt-6 lg:mt-0 mb-6">
              <Image
                src="/beer-cheers.png"
                alt="Events"
                layout="fixed"
                width="96"
                height="96"
              />
            </div>
            <p className="text-2xl font-semibold lg:text-3xl">
              Community
              <br />
              Events
            </p>
            <p className="py-6 text-lg lg:text-xl">
              We host local and virtual events for members and guests to meet,
              socialize, share alpha, and build long-lasting relationships.
            </p>
            <p className="text-lg lg:text-xl">
              <Link href="https://twitter.com/mmcclubdao">
                <a
                  className="underline hover:no-underline focus:text-pink-700"
                  target="_blank"
                >
                  Tune in
                </a>
              </Link>{" "}
              to our Twitter Spaces.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
