import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../hooks/uselogin";
import { GoogleLogin } from "react-google-login"
import useGsign from "../hooks/usegsign";
import Google from "../assets/icons/google.png"
import "../App.css"
import GeneralSmallLoader from "./loaders/GeneralSmallLoader";

const Login = () => {

  const [waitGoogle, setWaitGoogle] = useState(false)
  const [wait, setWait] = useState(false)

  const [emailid, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();
  const { gsignup } = useGsign()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setWait(() => true)
    await login(emailid, password);
    setWait(() => false)
  };


  return (
    <div className="signup_bg p-4 h-screen flex items-center justify-center">
      <div className="signup flex flex-col items-center justify-center h-fit py-10 sm:px-2 w-fit mx-auto bg-[#FFFFFF] rounded-2xl">
        <div className="signup_image">
        </div>
        <div className="w-full p-6 rounded-lg  ">
          <form
            className="flex flex-col gap-[6px]"
            onSubmit={handleSubmit}>
            <div>
              <div className="text-base label-text text-[rgb(77 76 99)]">
                Email
              </div>
              <input
                type="text"
                placeholder="abc@gmail.com"
                className="w-full input input-bordered h-9 text-[rgb(77 76 99)] border-[2px] rounded-lg pl-2"
                value={emailid}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div>
              <div className="text-base label-text text-[rgb(77 76 99)]">
                Password
              </div>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full input input-bordered h-9 text-[rgb(77 76 99)] border-[2px] rounded-lg pl-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Link
              to="/signup"
              className="text-sm  hover:underline hover:text-blue-600 mt-2 inline-block text-[rgb(77 76 99)] duration-200"
            >
              Don't have an account?
            </Link>
            <div className="button-wrap-element flex flex-col w-full h-fit gap-[6px]">
              <div className="login-login-page">
                <button
                  className="w-full flex flex-row items-center justify-center gap-2 h-fit px-1 py-1 border rounded-[10px]  border-slate-700 font-sans font-bold bg-blue-600 duration-200 hover:bg-blue-800 text-white"
                  disabled={loading}
                >
                  <div className="login-text-buddy">
                    Log In
                  </div>
                  {wait && <GeneralSmallLoader />}
                </button>
              </div>
              <div className="w-full flex justify-center items-center h-[35px]  border-[#cac8c8] border-[2px] rounded-[10px] hover:bg-slate-100 duration-200">
                <GoogleLogin
                  clientId={process.env.REACT_APP_GAUTH}
                  render={renderProps => (
                    <button
                      onClick={() => {
                        setWaitGoogle(() => true)
                        renderProps.onClick()
                      }}
                      disabled={renderProps.disabled}
                      className="flex"
                    >
                      <img src={Google} className="w-[30px] pr-[5px]" alt="" />
                      <div className="text-google-login">
                        Login with Google
                      </div>
                      {waitGoogle && <GeneralSmallLoader />}
                    </button>
                  )}
                  onSuccess={async (res) => {
                    const emailid = res.profileObj.email
                    const fullName = res.profileObj.name
                    await gsignup({ fullName, emailid, profilepic: res.profileObj.imageUrl });
                  }}
                  onFailure={(res) => { console.log("Failed") }}
                  cookiePolicy={"single_host_origin"}
                  isSignedIn={false}
                  className="w-[300px]"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
