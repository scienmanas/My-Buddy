import React from "react";
import { useState } from "react";
import "../index.css";
import GenderCheckbox from "./GenderCheckBox.js";
import ProfessionCheckbox from "./ProfessionCheckbox.js";
import SalaryCheckbox from "./SalaryCheckBox.js";
import useUpdateDetails from "../hooks/useupdatedetails.js";
import GeneralSmallLoader from "./loaders/GeneralSmallLoader.js";


const Details = () => {


  const [wait, setWait] = useState(false)

  const [inputs, setInputs] = useState({
    gender: "",
    profession: "",
    salary: "",
  });

  const { loading, updatedetails } = useUpdateDetails();


  const handleSubmit = async (e) => {
    setWait(() => true)
    await updatedetails(inputs);
    setWait(() => false)
  };

  const handlegendercheckboxchange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleprofessioncheckboxchange = (profession) => {
    setInputs({ ...inputs, profession });
  };

  const handlesalarycheckboxchange = (salary) => {
    setInputs({ ...inputs, salary });
  };

  return (
    <div className=" signup_bg -4 h-screen  flex items-center justify-center">
      <div className="signup flex flex-col items-center justify-center h-fit w-fit px-3 py-40 rounded-2xl">
        <div className="signup_image"></div>
        <div className="user-information-form w-full h-fit gap-2 flex flex-col">
          <div className="gender-info flex-col flex gap-[2px]">
            <div className="text-[16px] font-sans text-[rgb(77 76 99)]">
              Gender
            </div>
            <div className="checkboxes-gender">
              <GenderCheckbox
                onCheckboxChange={handlegendercheckboxchange}
                selectedGender={inputs.gender}
              />
            </div>
          </div>
          <div className="profession-info">
            <div className="text-[16px] font-sans text-[rgb(77 76 99)]">
              Profession
            </div>
            <div className="profession-info-boxes">
              <ProfessionCheckbox
                onCheckboxChange={handleprofessioncheckboxchange}
                selectedProfession={inputs.profession}
              />
            </div>
          </div>
          <div className="salary-info">
            <div className="text-base label-text text-[15px] font-sans text-[rgb(77 76 99)]">
              Salary
            </div>
            <div className="salary-info-boxes">
              <SalaryCheckbox
                onCheckboxChange={handlesalarycheckboxchange}
                selectedsalary={inputs.salary}
              />
            </div>
          </div>
          <button onClick={handleSubmit} className={`font-bold rounded-lg text-white bg-blue-500 w-fit h-fit px-3 py-2 hover:bg-blue-700 duration-150 mx-auto flex flex-row items-center justify-center gap-2`}>
            <div className="text-submit-button-details w-fit h-fit">
              Submit
            </div>
            {wait && <GeneralSmallLoader />}
          </button>
        </div>

      </div>
    </div>
  );
};


export default Details;
