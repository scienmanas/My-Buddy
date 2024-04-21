import { Link } from "react-router-dom";
import { useState } from "react";
import useSignup from "../hooks/usesignup.js";
import useGsign from "../hooks/usegsign.js"
import { GoogleLogin } from "react-google-login"
import Google from "../assets/icons/google.png"
import "../index.css"


const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    emailid: "",
    password: "",
    confirmPassword: "",
    gsign: "false",
  });

  const { loading, signup } = useSignup();
  const { gsignup } = useGsign();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };


  return (
    <div className=" signup_bg -4 h-screen  flex items-center justify-center">
      <div className="signup flex flex-col items-center relative justify-center h-fit py-5 w-80 sm:w-96 sm:px-2 rounded-3xl">
        <div className="signup_image">
        </div>
        <div className="sign-up-contents-form w-full p-6 rounded-lg flex flex-col">
          <form
            className="h-fit w-full flex flex-col gap-[6px]"
            onSubmit={handleSubmit
            }>
            <div className="name-user flex w-full h-fit items-start flex-col gap-[2px]">
              <div className="text-[15px] font-sans text-[rgb(77 76 99)]">
                Nickname &#128521;
              </div>
              <input
                type="text"
                placeholder="Your sweet name?"
                className="w-full input input-bordered text-[14px] h-8 font-sans text-[rgb(77 76 99)] border-[2px] rounded-lg pl-2 "
                value={inputs.fullName}
                onChange={(e) =>
                  setInputs({ ...inputs, fullName: e.target.value })
                }
              />
            </div>
            <div className="email-user flex w-full h-fit items-start flex-col gap-[2px]">
              <div className="text-[15px] font-sans text-[rgb(77 76 99)]">
                Email
              </div>
              <input
                type="text"
                placeholder="Enter Email"
                className="w-full input input-bordered  text-[14px] h-8 font-sans text-[rgb(77 76 99)] border-[2px] rounded-lg pl-2"
                value={inputs.emailid}
                onChange={(e) =>
                  setInputs({ ...inputs, emailid: e.target.value })
                }
              />
            </div>
            <div className="password-user">
              <div className="text-[15px] font-sans text-[rgb(77 76 99)] gap-[2px]">
                Password
              </div>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full input input-bordered text-[14px] h-8 font-sans text-[rgb(77 76 99)] border-[2px] rounded-lg pl-2 "
                value={inputs.password}
                onChange={(e) =>
                  setInputs({ ...inputs, password: e.target.value })
                }
              />
            </div>
            <div className="confirm-password-user">
              <div className="text-[15px] font-sans text-[rgb(77 76 99)] gap-[2px]">
                Confirm Password
              </div>
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full input input-bordered  text-[14px] h-8 font-sans text-[rgb(77 76 99)] border-[2px] rounded-lg pl-2"
                value={inputs.confirmPassword}
                onChange={(e) =>
                  setInputs({ ...inputs, confirmPassword: e.target.value })
                }
              />
            </div>
            <div className="already-have-an-account">
              <Link
                to="/login"
                className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block font-sans text-[rgb(77 76 99)]"
                href="#"
              >
                Already have an account?
              </Link>
            </div>
            <div className="signin-buttons-multiple-options flex flex-col w-full h-fit gap-2">
              <div className="sign-up-button-signup-page cursor-pointer">
                <button
                  className="button-sign-up py-1 w-full border rounded-[10px] border-slate-700 font-sans font-bold bg-[#2953FF] text-white text-[15px] hover:bg-[#1E3DE4] hover:text-white duration-200"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="loading loading-spinner"></span>
                  ) : (
                    "Sign Up"
                  )}
                </button>
              </div>
              <div className="google-login-button w-full flex justify-center items-center h-[35px]  border-[#cac8c8] border-[2px] rounded-[10px] hover:bg-slate-200 duration-200 cursor-pointer">
                <GoogleLogin
                  clientId={process.env.REACT_APP_GAUTH}
                  render={renderProps => (
                    <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="flex ">
                      <img src={Google} className="w-[30px] pr-[5px]" alt="" />Signup with Google</button>
                  )}
                  onSuccess={async (res) => {
                    const emailid = res.profileObj.email
                    const fullName = res.profileObj.name
                    const profilepic = res.profileObj.imageUrl;
                    await gsignup({ fullName, emailid, profilepic: profilepic });
                  }}
                  onFailure={(res) => { console.log("Failed") }}
                  cookiePolicy={"single_host_origin"}
                  isSignedIn={false}
                  className="w-full h-fit"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};


export default SignUp;
