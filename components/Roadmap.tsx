import React, { FC, Fragment } from "react";
import {
  CurrencyDollarIcon,
  GlobeIcon,
  SparklesIcon,
  ShoppingCartIcon,
  HandIcon,
  TableIcon,
  UserGroupIcon,
} from "@heroicons/react/solid";
import Section from "./Section";
import Tile from "./Tile";

const heading = "Roadmap";
const subheading = "Objective-driven projects";
const daoTitle = "Launch DAO";
const treasuryTitle = "Fund the treasury";
const storeTitle = "Launch MMCC merch store";
const votingTitle = "Implement on-chain voting mechanism";
const katTitle = "Develop and airdrop $KAT token";
const marketPlaceTitle =
  "Launch Meerkatplace for secondary sales and escrow trade";
const tbaTitle = "More developments TBA";
const genericDescription =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia fugit soluta quod vitae.";

const Roadmap: FC = () => {
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

      <div className="grid gap-5 grid-cols-2">
        <Tile
          color="blue"
          icon={<UserGroupIcon className="w-8 lg:w-14 inline text-white-900"/>}
          title={daoTitle}
          description={genericDescription}
          />
        <Tile
          color="green"
          icon={<CurrencyDollarIcon className="w-8 lg:w-14 inline text-white-900" />}
          title={treasuryTitle}
          description={genericDescription}
          />
        <Tile
          color="red"
          icon={<ShoppingCartIcon className="w-8 lg:w-14 inline text-white-900" />}
          title={storeTitle}
          description={genericDescription}
          />
        <Tile
          color="purple"
          icon={<HandIcon className="w-8 lg:w-14 inline text-white-900" />}
          title={votingTitle}
          description={genericDescription}
          incomplete
          />
        <Tile
          color="yellow"
          icon={<SparklesIcon className="w-8 lg:w-14 inline text-white-900" />}
          title={katTitle}
          description={genericDescription}
          incomplete
          />
        <Tile
          color="pink"
          icon={<TableIcon className="w-8 lg:w-14 inline text-white-900" />}
          title={marketPlaceTitle}
          description={genericDescription}
          incomplete
          />
        <Tile
          color="indigo"
          icon={<GlobeIcon className="w-8 lg:w-14 inline text-white-900" />}
          title={tbaTitle}
          description={genericDescription}
          incomplete
          />
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
