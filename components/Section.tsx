import React from "react";
import SectionHeading from './text/SectionHeading';

interface Props {
  children: JSX.Element,
  heading: string,
  subheading: string,
}

const Section = (props: Props) => {
  const { heading, subheading, children } = props;
  return (
    <div className="flex flex-col py-8">
      <div>
        <SectionHeading>{heading}</SectionHeading>
      </div>
      <div className="flex">
        <p className="text-2xl w-2/5 xl:flex-shrink flex-grow flex-shrink-0 lg:text-3xl mr-6">{subheading}</p>
        {children}
        </div>
    </div>
  );
}

export default Section;