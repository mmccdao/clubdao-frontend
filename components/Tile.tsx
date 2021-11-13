import React, { FC } from "react";

interface Props {
  children: JSX.Element,
  incomplete?: boolean,
}

const Tile = (props: Props) => {
  const { children, incomplete } = props;
  return (
    <div className={"border-4 p-2 rounded-md border-gray-100 " + (incomplete && 'border-dashed')}>
      {children}
    </div>
  );
}

export default Tile;
