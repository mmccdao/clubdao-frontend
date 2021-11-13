import React, { FC, Fragment } from "react";
import SectionHeading from "./text/SectionHeading";
import Section from "./Section";
import Tile from "./Tile";

const Roadmap: FC = () => {
  const heading = "Roadmap";
  const subheading = "Objective-driven projects";
  return (
    <div id="faq" className="bg-gray-900">
      <div className="container px-6 pb-16 max-w-screen-xl mx-auto">
        <Section heading={heading} subheading={subheading}>
          <Fragment>
            <p className="text-gray-400 text-lg lg:text-2xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Distinctio suscipit, veniam voluptates culpa magni porro cum
              temporibus molestiae vel laudantium architecto, ea facilis quia,
              animi eligendi repudiandae dolor alias earum.
            </p>
          </Fragment>
        </Section>

        <div className="grid gap-4 grid-cols-2">
          <Tile>
            <p>Launch DAO</p>
          </Tile>
          <Tile>
            <p>Fund the treasury</p>
          </Tile>
          <Tile>
            <p>Launch MMCC merch store</p>
          </Tile>
          <Tile incomplete>
            <p>Implement on-chain voting mechanism</p>
          </Tile>
          <Tile incomplete>
            <p>Develop and airdrop $KAT token</p>
          </Tile>
          <Tile incomplete>
            <p>Launch Meerkatplace for secondary sales and escrow trade</p>
          </Tile>
          <Tile incomplete>
            <p>More developments TBA</p>
          </Tile>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
