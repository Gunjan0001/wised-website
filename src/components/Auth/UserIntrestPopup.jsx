import { useState } from "react";
import { userIntrestData } from "../common/Helper";
import { BackArrowIcon, CrossIcon, SearchIcon } from "../common/Icons";
import StepBar from "./StepBar";
import PersonaliseCommonBtn from "./PersonaliseCommonBtn";

const UserInterestPopup = ({ onClose }) => {
  const [activeSteps, setActiveSteps] = useState(0);
  const totalSteps = 5;

  const handleContinueClick = () => {
    if (activeSteps < totalSteps - 1) {
      setActiveSteps(activeSteps + 1);
    }
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 px-3">
      <div className="w-full sm:max-w-[540px] bg-white shadow rounded-[40px] py-11 px-[22px] sm:mx-auto">
        <div className="flex justify-between items-center">
          <button>
            <BackArrowIcon />
          </button>
          <h2 className="font-semibold text-base text-black">Personalise</h2>
          <button onClick={onClose}>
            <CrossIcon />
          </button>
        </div>

        <StepBar activeSteps={activeSteps} totalSteps={totalSteps} />
        <div className="mt-5 flex flex-col gap-3 md:gap-5">
          <h1 className="text-center text-base font-medium">
            What interests you ?
          </h1>

          <h2 className="text-center text-base font-medium  text-gray">
            Choose 5 or more
          </h2>

          <div className="flex gap-3 justify-center items-center">
            <span>
              <SearchIcon />
            </span>
            <p className="text-gray">| Looking for....</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-3 lg:gap-5 mt-3 h-[270px] overflow-scroll">
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
          <PersonaliseCommonBtn onClick={handleContinueClick} />
        </div>
      </div>
    </div>
  );
};
export default UserInterestPopup;
