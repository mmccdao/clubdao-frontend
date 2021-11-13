import React from "react";

interface Props {
  description: string
  icon: JSX.Element,
  incomplete?: boolean,
  title: string,
  color: string,
}

const Tile = (props: Props) => {
  const { color, description, icon, incomplete, title } = props;
  return (
    <div className={"min-h-64 color-gray-200 border-4 p-4 rounded-md border-gray-200 " + (incomplete ? 'border-dashed': '')}>
      <h4 className="flex mb-2 items-center text-md lg:text-lg xl:text-xl font-semibold">
        <span className={`rounded-full mr-4 inline h-14 w-14 lg:h-18 lg:w-18 flex flex-shrink-0 items-center justify-center ${color}`}>{icon}</span>
        {title}
      </h4>
      <p className="font-extralight">{description}</p>
    </div>
  );
}

export default Tile;
