import { useState } from "react";
import { userIntrestData } from "../common/Helper";
import { SearchIcon } from "../common/Icons";
import StepBar from "./StepBar";
import CommonBtn from "../common/CommonBtn";

export function UserIntrestPopup() {
  const [activeSteps, setActiveSteps] = useState(0);
  const totalSteps = 5;

  const handleContinueClick = () => {
    if (activeSteps < totalSteps - 1) {
      setActiveSteps(activeSteps + 1);
    }
  };
  return (
    <div className="max-w-[540px] bg-white shadow rounded-[40px] py-11 px-[22px] mx-auto">
      <StepBar activeSteps={activeSteps} totalSteps={totalSteps} />
      <div className="mt-5">
        <h1 className="text-center text-base font-medium">
          What interests you ?
        </h1>

        <h2 className="text-center text-base font-medium  text-gray mt-3">
          Choose 5 or more
        </h2>

        <div className="flex gap-3 justify-center items-center mt-3">
          <span>
            <SearchIcon />
          </span>
          <p className="text-gray">| Looking for....</p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-5 mt-3">
        {userIntrestData.map((butns, index) => {
          return (
            <div key={index} className="">
              <button className="text-[#4D8AFF]  text-base font-normal py-[6px] px-[18px] border border-[#4D8AFF] rounded-md ">
                {butns.btn}
              </button>
            </div>
          );
        })}
      </div>
      <div className="mt-10 flex justify-center">
        <CommonBtn onClick={handleContinueClick} />
      </div>
    </div>
  );
}
