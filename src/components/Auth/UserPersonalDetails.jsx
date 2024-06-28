import React, { useState } from "react";
import StepBar from "./StepBar";
import CommonBtn from "../common/CommonBtn";

const UserPersonalDetails = () => {
  const [activeSteps, setActiveSteps] = useState(0);
  const totalSteps = 5;

  const handleContinueClick = () => {
    if (activeSteps < totalSteps - 1) {
      setActiveSteps(activeSteps + 1);
    }
  };
  return (
    <div className="max-w-[540px] bg-white shadow rounded-[40px] py-11 px-[22px]">
      <StepBar activeSteps={activeSteps} totalSteps={totalSteps} />
      <div className="mt-10 flex justify-center">
        <CommonBtn onClick={handleContinueClick} />
      </div>
      <form action="">
        <div className="flex flex-col gap-1 mt-6">
          <label htmlFor="username">Username*</label>
          <input
            className="outline-none border border-gray py-2 px-6 rounded-[100px] text-black font-normal"
            type="text"
            id="username"
            name="username"
            placeholder="Choose a username"
          />
        </div>

        <h2>Enter DOB*</h2>
        <div className="flex">
          <div class="form-group col-md-4">
            <label for="day">Day</label>
            <select id="day" class="form-control">
              <option value="">Day</option>
            </select>
          </div>
          <div class="form-group col-md-4">
            <label for="month">Month</label>
            <select id="month" class="form-control">
              <option value="">Month</option>
            </select>
          </div>
          <div class="form-group col-md-4">
            <label for="year">Year</label>
            <select id="year" class="form-control">
              <option value="">Year</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserPersonalDetails;
