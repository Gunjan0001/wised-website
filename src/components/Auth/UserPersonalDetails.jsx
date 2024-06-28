import React, { useState } from "react";
import StepBar from "./StepBar";
import PersonaliseCommonBtn from "./PersonaliseCommonBtn";

const UserPersonalDetails = () => {
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

  const handleContinueClick = (e) => {
    e.preventDefault();
    if (activeSteps < totalSteps - 1) {
      setActiveSteps(activeSteps + 1);
    }
    console.log("Saved Data: ", formData);
    setFormData({
      username: "",
      day: "",
      month: "",
      year: "",
    });
  };
  const getColorClass = (value) =>
    value ? "text-black  border-black" : "text-gray";

  return (
    <div className="max-w-[540px] h-[640px] flex flex-col bg-white shadow rounded-[40px] py-11 px-[22px]">
      <StepBar activeSteps={activeSteps} totalSteps={totalSteps} />

      <form action="" className="h-full flex flex-col justify-between">
        <div>
          <div className="flex flex-col gap-1 mt-6">
            <label htmlFor="username">Username*</label>
            <input
              className="outline-none border border-gray py-2 px-6 rounded-[100px] text-black font-normal"
              type="text"
              id="username"
              name="username"
              onChange={handleInputChange}
              value={formData.username}
              placeholder="Choose a username"
            />
          </div>
          <h2 className="font-medium text-base text-black  mt-6">Enter DOB*</h2>
          <div className="flex gap-2">
            <div className="flex flex-col gap-1 w-1/3 ">
              <label
                htmlFor="date"
                className="font-normal text-black text-base capitalize"
              >
                Date
              </label>
              <div
                className={`flex justify-between border border-gray py-2 px-3 rounded-3xl ${getColorClass(
                  formData.day
                )}`}
              >
                <select
                  id="day"
                  className={`font-normal text-base w-full outline-none ${getColorClass(
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
                className={`flex justify-between border border-gray py-2 px-3 rounded-3xl ${getColorClass(
                  formData.month
                )}`}
              >
                <select
                  id="month"
                  className={`font-normal text-base w-full outline-none ${getColorClass(
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
                className={`flex justify-between border border-gray py-2 px-3 rounded-3xl ${getColorClass(
                  formData.year
                )}`}
              >
                <select
                  id="year"
                  className={`font-normal text-base w-full outline-none ${getColorClass(
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
          <PersonaliseCommonBtn onClick={handleContinueClick} />
        </div>
      </form>
    </div>
  );
};

export default UserPersonalDetails;
