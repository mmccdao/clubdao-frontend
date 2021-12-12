import React, { FC, Fragment, useState } from "react";

import Section from "./Section";

import styles from "../styles/Home.module.css";

import faq from "../data/faq.json";

const heading = "FAQ";
const subheading = "";

const Item: FC<{ title: String; children: any }> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-2 rounded-lg shadow-sm">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex text-left items-center justify-between w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="font-semibold text-left text-2xl text-gray-300">
          {title}
        </p>
        <svg
          viewBox="0 0 24 24"
          className={`h-4 w-4 text-gray-400 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <polyline
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeMiterlimit="10"
            points="2,7 12,17 22,7"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 pt-0">
          <p className="text-base lg:text-xl text-gray-400">{children}</p>
        </div>
      )}
    </div>
  );
};

const Faq: FC = () => {
  return (
    <div className="bg-gray-800">
      <a id="faq" className={styles.anchor}></a>
      <div className="container px-6 pb-16 max-w-screen-xl mx-auto">
        <Section heading={heading} subheading={subheading}>
          <Fragment></Fragment>
        </Section>

        <div className="space-y-4">
          {faq.map((item) => (
            <Item
              key={Buffer.from(item.question).toString("base64")}
              title={item.question}
            >
              {item.answer.split("\n").map((paragraph) => (
                <p
                  key={Buffer.from(paragraph).toString("base64")}
                  className="mb-2"
                >
                  {paragraph}
                </p>
              ))}
            </Item>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
