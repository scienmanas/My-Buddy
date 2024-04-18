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
    const url = resized?await getimage(resized):"";
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
      <div className="signup flex flex-col items-center relative justify-center h-[600px] min-w-96 mx-auto">
        <div className="signup_image absolute top-[60px] left-[110px]"></div>
        {!photo_page ? (
          <div className="w-full p-6 rounded-lg absolute top-[150px]">
            <form>
              <div>
                <label className="label p-2 mb-[-6px]">
                  <span className="text-base label-text text-[15px] font-sans text-[rgb(77 76 99)]">
                    Gender
                  </span>
                </label>
                <GenderCheckbox
                  onCheckboxChange={handlegendercheckboxchange}
                  selectedGender={inputs.gender}
                />
              </div>
              <div className="mt-[-10px]">
                <label className="label p-2  mb-[-6px]">
                  <span className="text-base label-text text-[15px] font-sans text-[rgb(77 76 99)]">
                    Profession
                  </span>
                </label>
                <ProfessionCheckbox
                  onCheckboxChange={handleprofessioncheckboxchange}
                  selectedProfession={inputs.profession}
                />
              </div>
              <div className="mt-[-10px]">
                <label className="label p-2  mb-[-6px]">
                  <span className="text-base label-text text-[15px] font-sans text-[rgb(77 76 99)]">
                    Salary
                  </span>
                </label>
                <SalaryCheckbox
                  onCheckboxChange={handlesalarycheckboxchange}
                  selectedsalary={inputs.salary}
                />
              </div>
            </form>
            <button className="bg-[#2953FF] h-[30px] w-[60px] absolute left-[150px] " onClick={()=>setpohto_page(true)}>NEXT</button>
          </div>
        ) : (
          <div>
            <div className="w-[100px] h-[100px] border-[2px] border-black absolute top-[200px] left-[130px] rounded-[50%]">
              <img
                src={preview||dummy}
                className="w-full h-full rounded-[50%]"
                alt=""
              />
            </div>
            <div className="absolute top-[320px] left-[108px]">
              <button
                onClick={() => {
                  setuploadsection(true);
                }}
                className="bg-[blue] h-[30px] w-[150px] font-sans font-bold rounded-[10px]"
              >
                Upload Image
              </button>
            </div>
            <div className="fixed top-0 left-0 bg-[#F1F5FE] ">
              {uploadsection && (
                <div className="flex flex-col justify-center items-center h-screen w-screen border-[2px] z-[10px]">
                  <Avatar
                    width={600}
                    height={600}
                    src={src}
                    onCrop={oncrop}
                    onClose={onclose}
                  />
                  <div>
                     <button
                    className="w-[180px] h-[30px] border-[2px] border-[black] mt-[10px] "
                    onClick={onclose}
                    >
                    BACK
                  </button>
                      <button
                     className="w-[180px] h-[30px] border-[2px] border-[black] mt-[10px] "
                    onClick={() => handlechoose(preview)}
                     >
                      SET
                    </button>
                  </div>
                
                </div>
              )}
            </div>
            <button className={`w-[150px] h-[30px] absolute top-[360px] left-[108px] font-sans font-bold rounded-[10px] bg-[#2953FF] ${uploadsection?"hidden":""}` } onClick={()=>setpohto_page(false)}>PREVIOUS</button>
            <div>
              <button onClick={handleSubmit} className={`absolute top-[400px] w-[150px] h-[30px] left-[108px] font-sans font-bold rounded-[10px] bg-[#2953FF] ${uploadsection?"hidden":""}`}>
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
