import React, { useState } from "react";
import StepBar from "./StepBar";
import PersonaliseCommonBtn from "./PersonaliseCommonBtn";
import { BackArrowIcon, CrossIcon } from "../common/Icons";

const UserPersonalDetails = ({ onClose }) => {
  const [activeSteps, setActiveSteps] = useState(0);
  const [formData, setFormData] = useState({
    username: "",
    day: "",
    month: "",
    year: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const totalSteps = 5;
  const handleDayChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      day: value,
    }));
  };

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
  const handleContinueClick = () => {
    if (activeSteps < totalSteps - 1) {
      setActiveSteps(activeSteps + 1);
    }
  };
  const onsubmit = (e) => {
    e.preventDefault();
    console.log("Saved Data: ", formData);
    setFormData({
      username: "",
      day: "",
      month: "",
      year: "",
    });
    handleContinueClick()
  };

  const getColorClass = (value) =>
    value ? "text-black  border-black" : "text-gray";

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 xl:h-screen xl:py-8 px-3">
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
      <StepBar className="mt-6" activeSteps={activeSteps} totalSteps={totalSteps} />

      <form onSubmit={onsubmit} action="" className="h-full flex flex-col justify-between">
        <div className="px-6">
          <div className="flex flex-col gap-1 mt-6">
            <label htmlFor="username">Username*</label>
            <input
              className="outline-none border border-gray py-2 px-6 rounded-[100px] text-black font-normal"
              type="text"
              id="username"
              name="username"
              required
              onChange={handleInputChange}
              value={formData.username}
              placeholder="Choose a username"
            />
          </div>
          <h2 className="font-medium text-base text-black  mt-6">Enter DOB*</h2>
          <div className="flex gap-2 ">
            <div className="flex flex-col gap-1 w-1/3 ">
              <label
                htmlFor="date"
                className="font-normal text-black text-base capitalize"
              >
                Date
              </label>
              <div
                className={`flex justify-between border border-gray py-2 px-2 md:px-3 rounded-3xl ${getColorClass(
                  formData.day
                )}`}
              >
                <select
                  id="day"
                  className={`font-normal text-[13px]  sm:text-base w-full outline-none ${getColorClass(
                    formData.day
                  )}`}
                  value={formData.day}
                  onChange={handleDayChange}
                >
                  <option value="">DD</option>
                  {[...Array(31)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-1 w-1/3 ">
              <label
                htmlFor="month"
                className="font-normal text-black text-base capitalize"
              >
                month
              </label>
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
            <div className="flex flex-col gap-1 w-1/3 ">
              <label
                className="font-normal text-black text-base capitalize"
                htmlFor="year"
              >
                Year
              </label>
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
        <div className="mt-10 flex justify-center">
          <PersonaliseCommonBtn  />
        </div>
      </form>
    </div>
    </div>
 
  );
};

export default UserPersonalDetails;
