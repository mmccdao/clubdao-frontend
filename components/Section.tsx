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
    <div className="flex flex-col lg:flex-row py-8">
      <div className="lg:w-2/5">
        <SectionHeading>{heading}</SectionHeading>
        <p className="text-3xl font-semibold lg:text-5xl lg:mr-6">{subheading}</p>
      </div>
      <div className="flex-1 pt-4">
        {children}
        </div>
    </div>
  );
}

export default Section;
