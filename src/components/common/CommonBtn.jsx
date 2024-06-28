import React from "react";

const CommonBtn = ({ onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        className="text-base font-normal text-white py-2 px-6 bg-primary rounded-[100px] !leading-6 h-14 max-w-[330px] w-[330px]"
      >
        Continue
      </button>
    </>
  );
};

export default CommonBtn;
