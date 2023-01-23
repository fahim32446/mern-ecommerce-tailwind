import React from "react";
import { Oval } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex justify-center items-center  h-screen overflow-hidden w-[70vw]">
      <Oval radius="10" color="blue" secondaryColor="white" />
    </div>
  );
};

export default Loading;
