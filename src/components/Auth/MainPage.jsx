import React, { useState } from "react";
import CommonBtn from "../common/CommonBtn";
import RecommondedPeople from "./RecommondedPeople";
import UserInterestPopup from "./UserIntrestPopup";
import UserPersonalDetails from "./UserPersonalDetails";
import { ProfessionalDetails } from "./ProfessionalDetails";

const MainPage = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => {
    setShowPopup(true);
    console.log("sdabsh");
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <div>
      <button
        onClick={handleOpenPopup}
        className="text-base font-normal text-white py-2 px-6 bg-primary rounded-[100px] !leading-6 h-14 max-w-[330px] w-full mb-10"
      >
        Continue
      </button>

      {showPopup && <UserPersonalDetails onClose={handleClosePopup} />}
    </div>
  );
};

export default MainPage;