import React, { FC, Fragment } from "react";

import Section from "./Section";

const heading = "Who We Are";
const subheading = "";

const WhoWeAre: FC = () => {
  return (
    <div id="who-we-are" className="blue-gray-900">
      <div className="container px-6 pb-16 max-w-screen-lg mx-auto">
        <Section heading={heading} subheading={subheading}>
          <Fragment></Fragment>
        </Section>

        <p className="text-gray-200 text-base lg:text-xl mb-3 xl:mb-4">
          When the team at VenusLabs created MMCC, they set out from the start
          to do things differently. Bucking the trend of cookie-cutter profile
          pic collections, MMCC became the first project on Solana to offer 100%
          of royalties back to its minters and holders.
        </p>
        <p className="text-gray-200 text-base lg:text-xl mb-3 xl:mb-4">
          They made that unconventional choice because they understood that, in
          their own words, “the most innovative force that exists is the
          community.”
        </p>
        <p className="text-gray-200 text-base lg:text-xl mb-3 xl:mb-4">
          It was their vision to empower MMCC holders to take true ownership of
          the project and accountability for its future success. So they built a
          mechanism to fund the community directly, equipping them with the
          resources to do whatever they could imagine and achieve together.
        </p>
        <p className="text-gray-200 text-base lg:text-xl mb-3 xl:mb-4">From that vision, ClubDAO was born.</p>
        <p className="text-gray-200 text-base lg:text-xl">
          Now, we’re more than fun-loving, golf-club-swinging,
          nude-beach-frequenting meerkat millionaires. We’re a #MeerkatMob
          building our future together.
        </p>
      </div>
    </div>
  );
};

export default WhoWeAre;
