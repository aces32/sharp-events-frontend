// import { useState, useEffect } from "react";

interface OptionProps {
  url: any;
}

const ImageCard = ({ url }: OptionProps) => {
  return (
    <div className="mx-4 mb-4 w-40 space-y-2 rounded-lg bg-white shadow-md">
      <img src={url} alt="img" className="h-[7.75rem] w-40 rounded-t-lg " />
    </div>
  );
};

export default ImageCard;
