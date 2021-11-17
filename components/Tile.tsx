import Image from "next/image";
import React from "react";

interface Props {
  description: string;
  icon: JSX.Element;
  incomplete?: boolean;
  title: string;
  color: string;
  image: string;
}

const Tile = (props: Props) => {
  const { color, description, image, icon, incomplete, title } = props;
  return (
    <div
      className={
        "min-h-64 lg:mt-6 color-gray-200 border-2 p-4 lg:p-6 rounded-md border-gray-200 " +
        (incomplete ? "border-dashed" : "")
      }
    >
      <h4 className="flex mb-2 items-center text-xl lg:text-2xl font-semibold">
        <span
          className={`rounded-full mr-4 inline h-16 w-16 p-3 lg:h-18 lg:w-18 flex flex-shrink-0 items-center justify-center ${color}`}
        >
          {icon}
        </span>
        {title}
      </h4>
      <p className="p-2 font-extralight text-lg lg:text-xl">{description}</p>
      {image != "" && (
        <div className="h-52 lg:h-80 my-4 relative aspect-w-1 aspect-h-1 justify-center">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default Tile;
