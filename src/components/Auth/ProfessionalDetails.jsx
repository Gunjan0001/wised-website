import React, { useState, useEffect, useRef } from "react";
import {
  AddIcon,
  BackArrowIcon,
  CrossIcon,
  DropDownIcon,
} from "../common/Icons";
import PersonaliseCommonBtn from "./PersonaliseCommonBtn";
import StepBar from "./StepBar";

export function ProfessionalDetails({ onClose }) {
  const [industryTerm, setIndustryTerm] = useState("");
  const [companyTerm, setCompanyTerm] = useState("");
  const [workingHereTerm, setWorkingHereTerm] = useState("");
  const [designationTerm, setDesignationTerm] = useState("");
  const [locationTerm, setLocationTerm] = useState("");
  const [activeDropdown, setActiveDropdown] = useState("");
  const [activeSteps, setActiveSteps] = useState(0);
  const totalSteps = 5;

  const handleContinueClick = () => {
    if (activeSteps < totalSteps - 1) {
      setActiveSteps(activeSteps + 1);
    }
  };

  const industryOptions = ["Option 1", "Option 2", "Option 3"];
  const workingHereOptions = ["Yes", "No"];

  const formRef = useRef(null);

  const handleInputChange = (setter, dropdownName) => (e) => {
    setter(e.target.value);
    setActiveDropdown(dropdownName);
  };

  const handleSelectOption = (setter, dropdownName) => (option) => {
    setter(option);
    setActiveDropdown("");
  };

  const handleClickOutside = (e) => {
    if (formRef.current && !formRef.current.contains(e.target)) {
      setActiveDropdown("");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="w-full sm:max-w-[540px] bg-white shadow-xl rounded-[40px] py-11 px-[22px] sm:mx-auto">
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
        <div className="flex justify-end mt-6 sm:px-9">
          <button className="flex items-center gap-2 py-[10px] px-6 text-base font-normal border rounded-[100px] border-[#BEC1C3]">
            <AddIcon />
            Add
          </button>
        </div>
        <form ref={formRef} className="sm:px-9">
          {/* Industry Input */}
          <div className="relative">
            <label className="text-base font-medium" htmlFor="industry">
              Industry*
            </label>{" "}
            <br />
            <div className="relative w-full  mt-1.5 py-[7px] px-[27px] border overflow-hidden border-[#BEC1C3] rounded-[100px]">
              <input
                className="w-[440px] max-w-[440px] text-base font-medium outline-none "
                type="text"
                placeholder="Industry"
                value={industryTerm}
                onChange={handleInputChange(setIndustryTerm, "industry")}
                onClick={() => setActiveDropdown("industry")}
              />
              <span
                onClick={() =>
                  setActiveDropdown(
                    activeDropdown === "industry" ? "" : "industry"
                  )
                }
                className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
              >
                <DropDownIcon />
              </span>
            </div>
            {activeDropdown === "industry" && (
              <div className="absolute left-0 w-full bg-white  rounded-[10px] shadow-lg z-10">
                {industryOptions
                  .filter((option) =>
                    option.toLowerCase().includes(industryTerm.toLowerCase())
                  )
                  .map((option, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() =>
                        handleSelectOption(setIndustryTerm, "industry")(option)
                      }
                    >
                      {option}
                    </div>
                  ))}
              </div>
            )}
          </div>

          {/* Company Name Input */}
          <div className="relative mt-6">
            <label className="text-base font-medium" htmlFor="company">
              Company name*
            </label>{" "}
            <br />
            <div className="relative w-full  py-[7px] px-[27px] mt-1.5 border overflow-hidden border-[#BEC1C3] rounded-[100px]">
              <input
                className="w-[440px] max-w-[440px] text-base font-medium outline-none "
                type="text"
                placeholder="Company name"
                value={companyTerm}
                onChange={handleInputChange(setCompanyTerm, "company")}
                onClick={() => setActiveDropdown("company")}
              />
              <span
                onClick={() =>
                  setActiveDropdown(
                    activeDropdown === "industry" ? "" : "industry"
                  )
                }
                className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
              >
                <DropDownIcon />
              </span>
            </div>
            {activeDropdown === "company" && (
              <div className="absolute left-0 w-full bg-white  border-[#BEC1C3] rounded-[10px] shadow-lg z-10">
                {industryOptions
                  .filter((option) =>
                    option.toLowerCase().includes(companyTerm.toLowerCase())
                  )
                  .map((option, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() =>
                        handleSelectOption(setCompanyTerm, "company")(option)
                      }
                    >
                      {option}
                    </div>
                  ))}
              </div>
            )}
          </div>

          {/* Currently Working Here Input */}
          <div className="relative mt-6">
            <label className="text-base font-medium" htmlFor="workingHere">
              Currently working here*
            </label>{" "}
            <br />
            <div className="relative w-full py-[7px] mt-1.5 px-[27px] overflow-hidden border border-[#BEC1C3] rounded-[100px]">
              <input
                className="w-[440px]  max-w-[440px] text-base font-medium outline-none"
                type="text"
                placeholder="Yes"
                value={workingHereTerm}
                onChange={handleInputChange(setWorkingHereTerm, "workingHere")}
                onClick={() => setActiveDropdown("workingHere")}
              />
              <span
                onClick={() =>
                  setActiveDropdown(
                    activeDropdown === "industry" ? "" : "industry"
                  )
                }
                className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
              >
                <DropDownIcon />
              </span>
            </div>
            {activeDropdown === "workingHere" && (
              <div className="absolute left-0 w-full bg-white  border-[#BEC1C3] rounded-[10px] mt-1 shadow-lg z-10">
                {workingHereOptions
                  .filter((option) =>
                    option.toLowerCase().includes(workingHereTerm.toLowerCase())
                  )
                  .map((option, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() =>
                        handleSelectOption(
                          setWorkingHereTerm,
                          "workingHere"
                        )(option)
                      }
                    >
                      {option}
                    </div>
                  ))}
              </div>
            )}
                  </div>
                  
                  {/* STARTING AND ENDING DATE */}
                  

          {/* Designation Input */}
          <div className="relative mt-6">
            <label className="text-base font-medium" htmlFor="designation">
              Designation*
            </label>{" "}
            <br />
            <div className="relative w-full py-[7px] mt-1.5 px-[27px] overflow-hidden border border-[#BEC1C3] rounded-[100px]">
              <input
                className="w-[440px]  max-w-[440px] text-base font-medium outline-none"
                type="text"
                placeholder="Designation"
                value={designationTerm}
                onChange={handleInputChange(setDesignationTerm, "designation")}
                onClick={() => setActiveDropdown("designation")}
              />
              <span
                onClick={() =>
                  setActiveDropdown(
                    activeDropdown === "industry" ? "" : "industry"
                  )
                }
                className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
              >
                <DropDownIcon />
              </span>
            </div>
            {activeDropdown === "designation" && (
              <div className="absolute left-0 w-full bg-white  border-[#BEC1C3] rounded-[10px] mt-1 shadow-lg z-10">
                {industryOptions
                  .filter((option) =>
                    option.toLowerCase().includes(designationTerm.toLowerCase())
                  )
                  .map((option, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() =>
                        handleSelectOption(
                          setDesignationTerm,
                          "designation"
                        )(option)
                      }
                    >
                      {option}
                    </div>
                  ))}
              </div>
            )}
          </div>

          {/* Location Input */}
          <div className="relative mt-6">
            <label className="text-base font-medium" htmlFor="location">
              Location
            </label>{" "}
            <br />
            <div className="relative w-full mt-1.5 py-[7px] px-[27px] border overflow-hidden border-[#BEC1C3] rounded-[100px]">
              <input
                className="w-[440px] max-w-[440px] text-base font-medium outline-none"
                type="text"
                placeholder="Location"
                value={locationTerm}
                onChange={handleInputChange(setLocationTerm, "location")}
                onClick={() => setActiveDropdown("location")}
              />
              <span
                onClick={() =>
                  setActiveDropdown(
                    activeDropdown === "industry" ? "" : "industry"
                  )
                }
                className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
              >
                <DropDownIcon />
              </span>
            </div>
            {activeDropdown === "location" && (
              <div className="absolute left-0 w-full bg-white  border-[#BEC1C3] rounded-[10px] mt-1 shadow-lg z-10">
                {industryOptions
                  .filter((option) =>
                    option.toLowerCase().includes(locationTerm.toLowerCase())
                  )
                  .map((option, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() =>
                        handleSelectOption(setLocationTerm, "location")(option)
                      }
                    >
                      {option}
                    </div>
                  ))}
              </div>
            )}
          </div>
          <div className="mt-10 flex justify-center">
            <PersonaliseCommonBtn onClick={handleContinueClick} />
          </div>
        </form>
      </div>
    </>
  );
}
