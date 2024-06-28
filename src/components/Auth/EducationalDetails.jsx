import React, { useState, useEffect, useRef } from "react";
import {
  AddIcon,
  BackArrowIcon,
  CrossIcon,
  DeleteIcon,
  DropDownIcon,
  EditIcon,
} from "../common/Icons";
import PersonaliseCommonBtn from "./PersonaliseCommonBtn";
import StepBar from "./StepBar";
const EducationalDetails = ({ onClose }) => {
  const [industryTerm, setIndustryTerm] = useState("");
  const [companyTerm, setCompanyTerm] = useState("");
  const [workingHereTerm, setWorkingHereTerm] = useState("");
  const [designationTerm, setDesignationTerm] = useState("");
  const [locationTerm, setLocationTerm] = useState("");
  const [years, setYears] = useState("");
  const [activeDropdown, setActiveDropdown] = useState("");
  const [addDetails, setAddDetails] = useState([]);
  const [activeSteps, setActiveSteps] = useState(0);

  const [formData, setFormData] = useState({
    month: "",
    year: "",
  });

  const handleMonthChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      month: value,
    }));
  };

  const handleYearChange = (e) => {
    const { value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      year: value,
    }));
  };
  const totalSteps = 5;
  const handleContinueClick = () => {
    if (activeSteps < totalSteps - 1) {
      setActiveSteps(activeSteps + 1);
    }
  };

  const industryOptions = [
    "DLF Groups",
    "TATA",
    "Reliance Industries Limited.",
  ];
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
  useEffect(() => {}, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      industry: industryTerm,
      company: companyTerm,
      workingHere: workingHereTerm,
      designation: designationTerm,
      location: locationTerm,
    };
    setAddDetails(formData);

    setAddDetails((prevDetails) => [{ ...prevDetails, formData }]);
    setIndustryTerm("");
    setCompanyTerm("");
    setWorkingHereTerm("");
    setDesignationTerm("");
    setLocationTerm("");
  };
  //   console.log(addDetails, "add details");
  const getColorClass = (value) =>
    value ? "text-black  border-black" : "text-gray";
  return (
    <>
      <div className="w-full sm:w-[540px] bg-white shadow rounded-[40px] py-6 xl:py-11 px-5 md:px-10 mx-auto ">
        <div className="flex justify-between items-center">
          <button>
            <BackArrowIcon />
          </button>
          <h2 className="font-semibold text-base text-black">Personalise</h2>
          <button onClick={onClose}>
            <CrossIcon />
          </button>
        </div>
        <StepBar
          className="mt-6"
          activeSteps={activeSteps}
          totalSteps={totalSteps}
        />

        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="flex flex-col items-end mt-6">
            <span>
              {" "}
              <button
                type="submit"
                className="flex items-center gap-2 py-[10px] px-6 text-base font-normal hover:bg-blue-500 hover:text-white border rounded-[100px] border-[#BEC1C3] "
              >
                <span>
                  <AddIcon />
                </span>{" "}
                Add
              </button>
            </span>
            <div className="flex w-full">
              {addDetails.map((items, index) => {
                console.log(items, "items");
                return (
                  <div
                    key={index}
                    className="bg-[#F7F7F7] w-full py-3 sm:py-5 px-3 sm:px-8 rounded-[10px] flex flex-wrap mt-6"
                  >
                    <div className="w-full sm:w-1/2">
                      <p className="font-normal text-base text-black">
                        {items.company}
                      </p>
                      <p className="font-normal text-base text-black">
                        {items.designation}
                      </p>
                      <p className="font-normal text-base text-black">
                        {items.industry}
                      </p>
                      <p className="font-normal text-base text-black">
                        {items.location}
                      </p>
                      <p className="font-normal text-base text-black">
                        {items.workingHere}
                      </p>
                    </div>
                    <div className="w-full sm:w-1/2 ">
                      <div className="flex w-full h-full justify-end items-center">
                        <span className="flex gap-4 sm:gap-7">
                          <EditIcon />

                          <DeleteIcon />
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Industry Input */}
          <div className="relative mt-6">
            <label className="text-base font-medium" htmlFor="industry">
              School / University details*
            </label>{" "}
            <br />
            <div className="relative w-full  pt-1.5 py-[7px] px-[27px] border overflow-hidden border-[#BEC1C3] rounded-[100px]">
              <input
                className="w-full  text-base font-medium outline-none "
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
                      className="px-4 py-2 border rounded-[10px] mt-1 p-1  hover:bg-blue-500 duration-300 hover:text-white cursor-pointer"
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
              Institute name
            </label>{" "}
            <br />
            <div className="relative w-full  py-[7px] px-[27px] pt-1.5 border overflow-hidden border-[#BEC1C3] rounded-[100px]">
              <input
                className="w-full text-base font-medium outline-none "
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
                      className="px-4 py-2 border rounded-[10px] mt-1 p-1  hover:bg-blue-500 duration-300 hover:text-white cursor-pointer"
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
              Specialisation*
            </label>{" "}
            <br />
            <div className="relative w-full py-[7px] pt-1.5 px-[27px] overflow-hidden border border-[#BEC1C3] rounded-[100px]">
              <input
                className="w-full text-base font-medium outline-none"
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
                      className="px-4 py-2  cursor-pointer border rounded-[10px] mt-1 p-1  hover:bg-blue-500 duration-300 hover:text-white"
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
          </div>{" "}
          {/* Designation Input */}
          <div className="relative mt-6">
            <label className="text-base font-medium" htmlFor="designation">
              Currently studying here*
            </label>{" "}
            <br />
            <div className="relative w-full py-[7px] pt-1.5 px-[27px] overflow-hidden border border-[#BEC1C3] rounded-[100px]">
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
                      className="px-4 py-2  cursor-pointer border rounded-[10px] mt-1 p-1  hover:bg-blue-500 duration-300 hover:text-white"
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
          <div className="flex flex-wrap justify-between w-full mt-6">
            <div className="flex min-[400px]:w-1/2 flex-col gap-2">
              <label
                htmlFor="month"
                className="font-normal text-black text-base capitalize"
              >
                month
              </label>
              <div className="flex w-full gap-2">
                <div className="flex w-1/2 flex-col gap-1 px-2">
                  <div
                    className={`flex justify-between border border-gray py-2 px-2 md:px-3 rounded-3xl ${getColorClass(
                      formData.month
                    )}`}
                  >
                    <select
                      id="month"
                      className={`font-normal text-[13px]  sm:text-base w-full outline-none ${getColorClass(
                        formData.month
                      )}`}
                      value={formData.month}
                      onChange={handleMonthChange}
                    >
                      <option value="">MM</option>
                      {[...Array(12)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="flex w-1/2 flex-col gap-1 px-2">
                  <div
                    className={`flex justify-between border border-gray py-2 px-2 md:px-3 rounded-3xl ${getColorClass(
                      formData.year
                    )}`}
                  >
                    <select
                      id="year"
                      className={`font-normal text-[13px] sm:text-base w-full outline-none ${getColorClass(
                        formData.year
                      )}`}
                      value={formData.year}
                      onChange={handleYearChange}
                    >
                      <option value="">YYYY</option>
                      {[...Array(100)].map((_, i) => (
                        <option key={i + 1930} value={i + 1930}>
                          {i + 1925}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex min-[400px]:w-1/2 flex-col gap-2">
              <label
                htmlFor="month"
                className="font-normal text-black text-base capitalize"
              >
                Year
              </label>
              <div className="flex  w-full gap-2 ">
                <div className="w-1/2 flex flex-col gap-1 px-2">
                  <div
                    className={`flex justify-between border border-gray py-2 px-2 md:px-3 rounded-3xl ${getColorClass(
                      formData.month
                    )}`}
                  >
                    <select
                      id="month"
                      className={`font-normal text-[13px]  sm:text-base w-full outline-none ${getColorClass(
                        formData.month
                      )}`}
                      value={formData.month}
                      onChange={handleMonthChange}
                    >
                      <option value="">MM</option>
                      {[...Array(12)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="w-1/2 flex flex-col gap-1 px-2">
                  <div
                    className={`flex justify-between border border-gray py-2 px-2 md:px-3 rounded-3xl ${getColorClass(
                      formData.year
                    )}`}
                  >
                    <select
                      id="year"
                      className={`font-normal text-[13px] sm:text-base w-full outline-none ${getColorClass(
                        formData.year
                      )}`}
                      value={formData.year}
                      onChange={handleYearChange}
                    >
                      <option value="">YYYY</option>
                      {[...Array(100)].map((_, i) => (
                        <option key={i + 1930} value={i + 1930}>
                          {i + 1925}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Location Input */}
          <div className="relative mt-6">
            <label className="text-base font-medium" htmlFor="location">
              If currently studying*
            </label>{" "}
            <br />
            <div className="flex gap-3">
              {" "}
              <div className="relative w-full pt-1.5 py-[7px] px-[27px] border  border-[#BEC1C3] rounded-[100px]">
                <input
                  className="w-full text-base font-medium outline-none"
                  type="text"
                  placeholder="Year"
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
              <div className="relative w-full pt-1.5 py-[7px] px-[27px] border  border-[#BEC1C3] rounded-[100px]">
                <input
                  className="w-full text-base font-medium outline-none"
                  type="text"
                  placeholder="Semester"
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
                      className="px-4 py-2 border rounded-[10px] mt-1 p-1  hover:bg-blue-500 duration-300 hover:text-white cursor-pointer"
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
        </form>
        <div className="mt-10 flex justify-center">
          <PersonaliseCommonBtn onClick={handleContinueClick} />
        </div>
      </div>
    </>
  );
};

export default EducationalDetails;
