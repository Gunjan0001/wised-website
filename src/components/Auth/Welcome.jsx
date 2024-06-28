import React from "react";
import welcomeImg from "../../assets/images/png/welcome.png";

const Welcome = () => {
  return (
    <div>
      <div className="container max-w-[1500px] mx-auto px-5">
        <div className="flex">
          <div className="w-full md:w-1/2">
            <img src={welcomeImg} alt="welcome-user" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
