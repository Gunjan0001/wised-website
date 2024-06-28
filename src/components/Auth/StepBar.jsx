import React, { useState } from "react";
import { BackArrowIcon, CrossIcon } from "../common/Icons";
import CommonBtn from "../common/CommonBtn";

const StepBar = () => {
  const [activeSteps, setActiveSteps] = useState(0);

  const handleContinueClick = () => {
    if (activeSteps < 5) {
      setActiveSteps(activeSteps + 1);
    }
  };
  return (
    <>
      <div className="max-w-[540px] bg-white shadow rounded-[40px] py-11 px-[22px]">
        <div className="flex justify-between items-center">
          <span>
            <BackArrowIcon />
          </span>
          <h2 className="font-semibold text-base text-black">Personalise</h2>
          <span>
            <CrossIcon />
          </span>
        </div>
        {/* <div className="flex gap-1 justify-center mt-12">
          <span className="inline-block w-20 h-1.5 bg-[#EBF2FF] rounded-md"></span>
          <span className="inline-block w-20 h-1.5 bg-[#EBF2FF] rounded-md"></span>
          <span className="inline-block w-20 h-1.5 bg-[#EBF2FF] rounded-md"></span>
          <span className="inline-block w-20 h-1.5 bg-[#EBF2FF] rounded-md"></span>
          <span className="inline-block w-20 h-1.5 bg-[#EBF2FF] rounded-md"></span>
        </div> */}
        <div className="flex gap-1 justify-center mt-12">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={`inline-block w-20 h-1.5 rounded-md ${
                index < activeSteps ? "bg-primary" : "bg-[#EBF2FF]"
              }`}
            ></span>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <CommonBtn onClick={handleContinueClick} />
        </div>
      </div>
    </>
  );
};

export default StepBar;
