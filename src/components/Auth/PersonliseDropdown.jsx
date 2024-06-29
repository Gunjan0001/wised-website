import React, { useState, useEffect, useRef } from "react";
import { DropDownIcon } from "../common/Icons";

const PersonliseDropdown = ({ mapdata, index }) => {
  const [formData, setFormData] = useState({});
  const [activeDropdown, setActiveDropdown] = useState("");
  const formRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setActiveDropdown(name);
  };

  const handleSelectOption = (name, option) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: option,
    }));
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
    <div>
      <form ref={formRef}>
        <div className="relative mt-6">
          <label className="text-base font-medium" htmlFor="industry">
            {mapdata.dataAbout}
          </label>
          <br />
          <div className="relative w-full pt-1.5 py-[7px] px-[27px] border overflow-hidden border-[#BEC1C3] rounded-[100px]">
            <input
              className="w-full text-base font-medium outline-none"
              type="text"
              name="industry"
              placeholder={mapdata.placeholder}
              value={formData.industry}
              onChange={handleInputChange}
              onClick={() => setActiveDropdown(index)}
            />
            <span
              onClick={() =>
                setActiveDropdown(activeDropdown === index ? "" : index)
              }
              className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
            >
              <DropDownIcon />
            </span>
          </div>
          <div className="flex">
            {mapdata.date && (
              <>
                {mapdata.date.map((nestedData, nestedIndex) => (
                  <div key={nestedIndex} className="relative mt-6">
                    <label className="text-base font-medium" htmlFor="industry">
                      {nestedData.from}
                    </label>
                    <div className="relative w-full pt-1.5 py-[7px] px-[27px] border overflow-hidden border-[#BEC1C3] rounded-[100px]">
                      <input
                        className="w-full text-base font-medium outline-none"
                        type="text"
                        name="date"
                        placeholder={nestedData.placeholder}
                        value={formData.date || ""}
                        onChange={handleInputChange}
                        onClick={() => setActiveDropdown(`date-${nestedIndex}`)}
                      />
                      <span
                        onClick={() =>
                          setActiveDropdown(
                            activeDropdown === `date-${nestedIndex}`
                              ? ""
                              : `date-${nestedIndex}`
                          )
                        }
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                      >
                        <DropDownIcon />
                      </span>
                    </div>
                    {activeDropdown === `date-${nestedIndex}` && (
                      <div className="absolute left-0 w-full bg-white rounded-[10px] shadow-lg z-10">
                        {nestedData.choose.map((option, optionIndex) => (
                          <div
                            key={optionIndex}
                            className={`px-4 py-2 border rounded-[10px] mt-1 p-1 hover:bg-blue-500 duration-300 hover:text-white cursor-pointer`}
                            onClick={() => handleSelectOption("date", option)}
                          >
                            {option}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </>
            )}
          </div>

          {activeDropdown === index && (
            <div className="absolute left-0 w-full bg-white rounded-[10px] shadow-lg z-10">
              {mapdata.choose.map((option, optionIndex) => (
                <div
                  key={optionIndex}
                  className={`px-4 py-2 border rounded-[10px] mt-1 p-1 hover:bg-blue-500 duration-300 hover:text-white cursor-pointer `}
                  onClick={() => handleSelectOption("industry", option)}
                >
                  {option}
                </div>
              ))}
              {mapdata.date &&
                mapdata.date.map((option, optionIndex) => (
                  <div
                    key={optionIndex}
                    className={`px-4 py-2 border rounded-[10px] mt-1 p-1 hover:bg-blue-500 duration-300 hover:text-white cursor-pointer `}
                    onClick={() => handleSelectOption("industry", option)}
                  >
                    {option}
                  </div>
                ))}
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default PersonliseDropdown;
