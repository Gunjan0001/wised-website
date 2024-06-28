import { useState } from "react";
import { BackArrowIcon, CrossIcon, SearchIcon } from "../common/Icons";
import StepBar from "./StepBar";
import PersonaliseCommonBtn from "./PersonaliseCommonBtn";
import { recommondedPeopledata } from "../common/Helper";

const RecommondedPeople = ({ onClose }) => {
  const [activeSteps, setActiveSteps] = useState(0);
  const totalSteps = 5;

  const handleContinueClick = () => {
    if (activeSteps < totalSteps - 1) {
      setActiveSteps(activeSteps + 1);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 lg:h-screen lg:py-8 px-3">
      <div className="w-full sm:w-[540px] bg-white shadow rounded-[40px] py-6 lg:py-11 px-5 md:px-10 mx-auto ">
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
        <div className="mt-5">
          <h1 className="text-center text-base font-medium">
            Recommended people
          </h1>
          <h2 className="text-center text-base font-medium text-gray mt-1 md:mt-3">
            Choose 5 or more
          </h2>
          <div className="flex gap-3 justify-center items-center mt-1 md:mt-3">
            <span>
              <SearchIcon />
            </span>
            <p className="text-gray">| Looking for....</p>
          </div>
        </div>
        <div className=" mt-2 lg:mt-8 h-[280px] overflow-y-auto hide-scrollbar">
          <div className="items-center justify-between">
            {recommondedPeopledata.map((val, i) => {
              return (
                <div className="flex items-center justify-between mt-4" key={i}>
                  <div className="flex items-center gap-2">
                    <img
                      className=" w-[30px] h-[30px]sm:w-[51px] sm:h-[51px]"
                      src={val.img}
                      alt="logo"
                    />
                    <div>
                      <p className="mb-0 font-medium text-sm sm:text-md">
                        {val.name}
                      </p>
                      <p className="mb-0 text-xs sm:text-base">{val.title}</p>
                    </div>
                  </div>
                  <button className="border border-solid border-gray rounded-[100px] w-[75px] h-[36px]">
                    Follow
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <PersonaliseCommonBtn onClick={handleContinueClick} />
        </div>
      </div>
    </div>
  );
};

export default RecommondedPeople;
