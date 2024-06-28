import React from "react";
import { CrossIcon } from "../common/Icons";
import logo from "../../assets/images/png/Logo.png";
const RecommondedPeople = ({ onClose }) => {
  return (
    <div className="w-[540px] p-6">
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            <CrossIcon />
          </button>
          <p className="font-medium text-base mt-12 text-center">
            Recommended people
          </p>
          <p className="font-medium text-base mt-3 text-center text-gray">
            Choose 5 or more
          </p>
          <div className="text-base mt-3 justify-center flex items-center gap-2 text-gray">
            <p>| Looking for....</p>
          </div>
          <div className="mt-8 w-[540px]">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img src={logo} alt="person" />
               <div>
               <p className="ml-2 mb-0 font-medium text-md">Darrell Steward</p>
               <p className="ml-2 mb-0">QA Engineer</p>
               </div>
              </div>
              <button className="flex items-center text-sm w-[75px] h-[36px]">
                Follow
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommondedPeople;
