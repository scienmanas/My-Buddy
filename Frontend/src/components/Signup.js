import { Link } from "react-router-dom";
import { useState } from "react";
import useSignup from "../hooks/usesignup.js";
import useGsign from "../hooks/usegsign.js"
import {GoogleLogin} from "react-google-login"
import Google from "../assets/icons/google.png"
import "../index.css"
const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    emailid: "",
    password: "",
    confirmPassword: "",
    gsign:"false",
  });

  const { loading, signup } = useSignup();
  const {gsignup}=useGsign();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className=" signup_bg -4 h-screen  flex items-center justify-center">
      <div className="signup flex flex-col items-center relative justify-center h-[600px] min-w-96 mx-auto">
        <div className="signup_image absolute top-[70px] left-[110px]">
         </div>
        <div className="w-full p-6 rounded-lg absolute top-[160px]">
          <form onSubmit={handleSubmit}>
            <div>
              <label className="label p-2 mb-[-4px]">
                <span className="text-base label-text text-[15px] font-sans text-[rgb(77 76 99)]">
                  Full Name
                </span>
              </label>
              <input
                type="text"
                placeholder="Alan Walker"
                className="w-full input input-bordered text-[12px] h-6 font-sans text-[rgb(77 76 99)] border-[2px] rounded-[4px] pl-2 "
                value={inputs.fullName}
                onChange={(e) =>
                  setInputs({ ...inputs, fullName: e.target.value })
                }
              />
            </div>
            <div>
              <label className="label p-2  mb-[-4px]">
                <span className="text-base label-text text-[15px] font-sans text-[rgb(77 76 99)]">
                  Email
                </span>
              </label>
              <input
                type="text"
                placeholder="abc@gmail.com"
                className="w-full input input-bordered  text-[12px] h-6 font-sans text-[rgb(77 76 99)] border-[2px] rounded-[4px] pl-2"
                value={inputs.emailid}
                onChange={(e) =>
                  setInputs({ ...inputs, emailid: e.target.value })
                }
              />
            </div>
            <div>
              <label className="label  mb-[-4px]">
                <span className="text-base label-text text-[15px] font-sans text-[rgb(77 76 99)]">
                  Password
                </span>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full input input-bordered text-[12px] h-6 font-sans text-[rgb(77 76 99)] border-[2px] rounded-[4px] pl-2 "
                value={inputs.password}
                onChange={(e) =>
                  setInputs({ ...inputs, password: e.target.value })
                }
              />
            </div>
            <div>
              <label className="label  mb-[-4px]">
                <span className="text-base label-text text-[15px] font-sans text-[rgb(77 76 99)]">
                  Confirm Password
                </span>
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full input input-bordered  text-[12px] h-6 font-sans text-[rgb(77 76 99)] border-[2px] rounded-[4px] pl-2"
                value={inputs.confirmPassword}
                onChange={(e) =>
                  setInputs({ ...inputs, confirmPassword: e.target.value })
                }
              />
            </div>
            <Link
              to="/login"
              className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block font-sans text-[rgb(77 76 99)]"
              href="#"
            >
              Already have an account?
            </Link>
            <div>
              <button
                className="w-[100%] h-8 mt-2 border rounded-[10px]  border-slate-700 font-sans font-bold bg-[#2953FF]"
                disabled={loading}
              >
                {loading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  "Sign Up"
                )}
              </button>
            </div>
            <div className="w-full flex justify-center items-center h-[35px]  border-[#cac8c8] border-[2px] rounded-[10px] mt-[10px]"> 
              
              <GoogleLogin
              clientId={process.env.REACT_APP_GAUTH}
              render={renderProps => (
                <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="flex ">
                  <img src={Google} className="w-[30px] pr-[5px]" alt="" />Signup with Google</button>
              )}
              onSuccess={async (res)=>{
                const emailid=res.profileObj.email
                const fullName=res.profileObj.name
                const profilepic=res.profileObj.imageUrl;
                await gsignup({fullName,emailid,profilepic:profilepic});
              }}
              onFailure={(res)=>{console.log("Failed")}}
              cookiePolicy={"single_host_origin"}
              isSignedIn={false}
              className="w-[300px]"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
