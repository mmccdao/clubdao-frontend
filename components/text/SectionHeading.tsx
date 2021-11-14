import React, { FC } from "react";

const SectionHeading: FC = (props) => (
  <h2 className="text-2xl xl:text-3xl py-4 font-light text-pink-700">{props.children}</h2>
);

export default SectionHeading;