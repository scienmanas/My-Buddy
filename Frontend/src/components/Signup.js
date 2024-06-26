import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useSignup from "../hooks/usesignup.js";
import useGsign from "../hooks/usegsign.js"
import { GoogleLogin } from "react-google-login"
import Google from "../assets/icons/google.png"
import "../index.css"
import GeneralSmallLoader from './loaders/GeneralSmallLoader.js';


const SignUp = (props) => {

  const [wait, setWait] = useState(false)
  const [waitGoogle, setWaitGoogle] = useState(false)


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
    setWait(() => true)
    await signup(inputs);
    setWait(() => false)
  };

  useEffect(() => {
    if (wait || waitGoogle) {
      setTimeout(() => {
        props.showAlert("Servers On free instances", "Please wait")
      }
        , 10000)
    }
    return () => {
      clearTimeout()
    }
  }, [wait, waitGoogle])



  return (
    <div className=" signup_bg -4 h-screen  flex items-center justify-center">
      <div className="signup flex flex-col items-center relative justify-center h-fit py-5 w-80 sm:w-96 sm:px-2 rounded-3xl">
        <div className="signup_image">
        </div>
        <div className="sign-up-contents-form w-full p-6 rounded-lg flex flex-col">
          <form
            className="h-fit w-full flex flex-col gap-[6px]"
            onSubmit={handleSubmit}
          >
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
                  className="button-sign-up py-1 w-full border rounded-[10px] border-slate-700 font-sans font-bold bg-[#2953FF] text-white text-[15px] hover:bg-[#1E3DE4] hover:text-white duration-200 flex justify-center items-center flex-row gap-2"
                  disabled={loading}
                >
                  <div className="text-sign-up w-fit h-fit">
                    Sign up
                  </div>
                  {wait ? <GeneralSmallLoader /> : null}
                </button>
              </div>
              <div className="google-login-button w-full flex justify-center items-center h-[35px]  border-[#cac8c8] border-[2px] rounded-[10px] hover:bg-slate-200 duration-200 cursor-pointer">
                <GoogleLogin
                  clientId={process.env.REACT_APP_GAUTH}
                  render={renderProps => (
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        setWaitGoogle(() => true)
                        renderProps.onClick()
                      }}
                      disabled={renderProps.disabled}
                      className="flex flex-row justify-center items-center gap-2 w-full"
                    >
                      <img src={Google} className="w-[30px] pr-[5px]" alt="" />
                      <div className="text-signup-google">
                        Signup with Google
                      </div>
                      {waitGoogle ? <GeneralSmallLoader /> : null}
                    </button>
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
