import React from "react";

interface Props {
  description: string
  icon: JSX.Element,
  incomplete?: boolean,
  title: string,
}

const Tile = (props: Props) => {
  const { description, icon, incomplete, title } = props;
  return (
    <div className={"min-h-64 border-4 p-2 rounded-md border-gray-100 " + (incomplete && 'border-dashed')}>
      <h4 className="text-md lg:text-lg xl:text-xl font-semibold">
        {icon}
        {title}
      </h4>
      <p className="font-extralight">{description}</p>
    </div>
  );
}

export default Tile;
