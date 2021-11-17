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
        "min-h-64 color-gray-200 border-2 p-4 rounded-md border-gray-200 " +
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
        <div className="w-full my-4 h-80 relative justify-center">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default Tile;
