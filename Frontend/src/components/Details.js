import { Link } from "react-router-dom";
import { useState } from "react";
import useSignup from "../hooks/usesignup.js";
import useGsign from "../hooks/usegsign.js";
import { GoogleLogin } from "react-google-login";
import Google from "../assets/icons/google.png";
import "../index.css";
import GenderCheckbox from "./GenderCheckBox.js";
import ProfessionCheckbox from "./ProfessionCheckbox.js";
import SalaryCheckbox from "./SalaryCheckBox.js";
import Avatar from "react-avatar-edit";
import { resizeBase64Img } from "../utils/resize.js";
import useUpdateDetails from "../hooks/useupdatedetails.js";
import toast from "react-hot-toast";
import dummy from "../assets/icons/dummy.jpeg"
const Details = () => {
  const [inputs, setInputs] = useState({
    gender: "",
    profession: "",
    salary: "",
  });

  const { loading, updatedetails } = useUpdateDetails();
  
  const { gsignup } = useGsign();

  const handleSubmit = async (e) => {
    await updatedetails(inputs);
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
            <button onClick={handleSubmit} className={`font-bold rounded-lg text-white bg-blue-500 w-[80px] mx-auto`}>
                Submit
             </button>
          </div>
        
      </div>
    </div>
  );
};
export default Details;
