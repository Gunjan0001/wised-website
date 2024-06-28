import { BackArrowIcon, CrossIcon } from "../common/Icons";

const StepBar = ({ activeSteps, totalSteps }) => {
  return (
    <>
      <>
        <div className="flex justify-between items-center">
          <span>
            <BackArrowIcon />
          </span>
          <h2 className="font-semibold text-base text-black">Personalise</h2>
          <span>
            <CrossIcon />
          </span>
        </div>

        <div className="flex gap-1 justify-center mt-12">
          {[...Array(totalSteps)].map((_, index) => (
            <span
              key={index}
              className={`inline-block w-20 h-1.5 rounded-md ${
                index === activeSteps ? "bg-blue-500" : "bg-[#EBF2FF]"
              }`}
            ></span>
          ))}
        </div>
      </>
    </>
  );
};

export default StepBar;
