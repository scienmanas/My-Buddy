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
    profilepic: "",
  });

  const { loading, updatedetails } = useUpdateDetails();
  const [resized, setresized] = useState("");
  const [photo_page, setpohto_page] = useState(false);
  const { gsignup } = useGsign();
  const [uploadsection, setuploadsection] = useState(false);
  const [preview, setpreview] = useState(null);
  const [src, setsrc] = useState();


  const handleSubmit = async (e) => {
    const url = resized ? await getimage(resized) : "";
    setInputs({ ...inputs, profilepic: url });
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


  const oncrop = (view) => {
    setpreview(view);
  };

  const onclose = () => {
    setuploadsection(false);
  };

  const handlechoose = (preview) => {
    onclose();

    resizeBase64Img(preview, 150, 150)
      .then((resizedBase64) => {
        setresized(resizedBase64);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };


  const getimage = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/message/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ base64String: resized }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);

      return data?.url;
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className=" signup_bg -4 h-screen  flex items-center justify-center">
      <div className="signup flex flex-col items-center justify-center h-fit w-fit px-3 py-40 rounded-2xl">
        <div className="signup_image"></div>
        {!photo_page ? (
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
            <button className="bg-blue-600 w-fit h-fit px-3 py-2 rounded-lg text-white hover:bg-blue-800 duration-200" onClick={() => setpohto_page(true)}>
              Next
            </button>
          </div>
        ) : (
          <div className="h-fit px-4 flex flex-col gap-5">
            <div className="w-[100px] h-[100px] border-[2px] border-black rounded-full overflow-hidden">
              <img
                src={preview || dummy}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <div>
              <button
                onClick={() => {
                  setuploadsection(true);
                }}
                className="bg-blue-500 h-10 w-32 text-white font-bold rounded-lg"
              >
                Upload Image
              </button>
            </div>
            <div className="bg-blue-100 flex flex-col gap-4 rounded-lg">
              {uploadsection && (
                <div className="flex flex-col justify-center items-center h-screen w-screen border-2 z-10">
                  <Avatar
                    width={600}
                    height={600}
                    src={src}
                    onCrop={oncrop}
                    onClose={onclose}
                  />
                  <div className="flex gap-4">
                    <button
                      className="w-32 h-10 border-2 border-black mt-4 rounded-lg"
                      onClick={onclose}
                    >
                      BACK
                    </button>
                    <button
                      className="w-32 h-10 border-2 border-black mt-4 rounded-lg"
                      onClick={() => handlechoose(preview)}
                    >
                      SET
                    </button>
                  </div>
                </div>
              )}
            </div>
            <button className={`text-white font-bold rounded-lg bg-blue-500 ${uploadsection ? "hidden" : ""}`} onClick={() => setpohto_page(false)}>PREVIOUS</button>
            <div>
              <button onClick={handleSubmit} className={`font-bold rounded-lg text-white bg-blue-500 ${uploadsection ? "hidden" : ""}`}>
                Submit
              </button>
            </div>
          </div>

        )}
      </div>
    </div>
  );
};
export default Details;
