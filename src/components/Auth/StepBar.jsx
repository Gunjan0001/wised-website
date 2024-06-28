
const StepBar = ({ activeSteps, totalSteps }) => {
  return (
    <>
      <>
        
        <div className="flex gap-1 justify-center mt-5 lg:mt-12">
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
