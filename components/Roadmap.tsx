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

import styles from '../styles/Home.module.css'

const heading = "Roadmap";
const subheading = "Developed by decentralized teams";
const daoTitle = "ClubDAO";
const treasuryTitle = "Treasury";
const storeTitle = "MMCC merch store";
const votingTitle = "On-chain voting mechanism";
const katTitle = "$KAT token airdrop";
const marketPlaceTitle = "Meerkatplace and escrow trade";
const genericDescription =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia fugit soluta quod vitae.";

const Roadmap: FC = () => {
  return (
    <div className="bg-gray-900">
    <a id="roadmap" className={styles.anchor}></a>
      <div className="container px-6 pb-16 max-w-screen-xl mx-auto">
        <Section heading={heading} subheading={subheading}>
          <Fragment>
            <p className="text-gray-400 text-lg lg:text-2xl">
              A summary of ClubDAO projects that will be delivered across
              multiple releases. Here you will find an overview of the goals, as
              well as descriptions of the main features, links to associated
              partenerships and status updates.
            </p>
          </Fragment>
        </Section>

        <div className="grid gap-5 grid-cols-1 lg:grid-cols-2">
          <Tile
            color="bg-blue-400"
            icon={<UserGroupIcon className="w-8 lg:w-10 inline text-white-900" />}
            title={daoTitle}
            description={genericDescription}
            image="/placeholder.png"
          />
          <Tile
            color="bg-green-400"
            icon={<CurrencyDollarIcon className="w-8 lg:w-10 inline text-white-900" />}
            title={treasuryTitle}
            description={genericDescription}
            image="/placeholder.png"
          />
          <Tile
            color="bg-red-400"
            icon={<ShoppingCartIcon className="w-8 lg:w-10 inline text-white-900" />}
            title={storeTitle}
            description={genericDescription}
            image="/placeholder.png"
          />
          <Tile
            color="bg-purple-400"icon={<HandIcon className="w-8 lg:w-10 inline text-white-900" />}
            title={votingTitle}
            description={genericDescription}
            image="/placeholder.png"
            incomplete
          />
          <Tile
            color="bg-yellow-400"
            icon={<SparklesIcon className="w-8 lg:w-10 inline text-white-900" />}
            title={katTitle}
            description={genericDescription}
            image="/placeholder.png"
            incomplete
          />
          <Tile
            color="bg-pink-400"icon={<TableIcon className="w-8 lg:w-10 inline text-white-900" />}
            title={marketPlaceTitle}
            description={genericDescription}
            image="/placeholder.png"
            incomplete
          />
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
