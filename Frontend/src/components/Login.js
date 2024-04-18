import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../hooks/uselogin";
import {GoogleLogin} from "react-google-login"
import useGsign from "../hooks/usegsign";
import Google from "../assets/icons/google.png"
import "../App.css"
const Login = () => {
  const [emailid, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();
  const {gsignup}=useGsign()

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(emailid, password);
  };

  return (
    <div className="signup_bg p-4 h-screen flex items-center justify-center">
      <div className="signup flex flex-col items-center justify-center h-[600px] relative min-w-96 mx-auto bg-[#FFFFFF] rounded-[8px] ">
      <div className="signup_image absolute top-[70px] left-[110px]">
         </div>
        <div className="w-full p-6 rounded-lg absolute top-[160px] ">
          <form onSubmit={handleSubmit}>
            <div>
              <label className="label p-2">
                <span className="text-base label-text text-[rgb(77 76 99)]">
                  Emailid
                </span>
              </label>
              <input
                type="text"
                placeholder="abc@gmail.com"
                className="w-full input input-bordered h-10 text-[rgb(77 76 99)] border-[2px] rounded-[4px] pl-2"
                value={emailid}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div>
              <label className="label ">
                <span className="text-base label-text text-[rgb(77 76 99)]">
                  Password
                </span>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full input input-bordered h-10 text-[rgb(77 76 99)] border-[2px] rounded-[4px] pl-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Link
              to="/signup"
              className="text-sm  hover:underline hover:text-blue-600 mt-2 inline-block text-[rgb(77 76 99)]"
            >
              {"Don't"} have an account?
            </Link>

            <div>
              <button
                className="w-[100%] h-8 mt-2 border rounded-[10px]  border-slate-700 font-sans font-bold bg-[#2953FF]"
                disabled={loading}
              >
                {loading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  "Login"
                )}
              </button>
            </div>
            <div className="w-full flex justify-center items-center h-[35px]  border-[#cac8c8] border-[2px] rounded-[10px] mt-[10px]"> 
              <GoogleLogin
              clientId={process.env.REACT_APP_GAUTH}
              render={renderProps => (
                <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="flex">
                  <img src={Google} className="w-[30px] pr-[5px]" alt="" />Signin with Google</button>
              )}
              onSuccess={async (res)=>{
                const emailid=res.profileObj.email
                console.log(res.profileObj);
                const fullName=res.profileObj.name
                await gsignup({fullName,emailid,profilepic:res.profileObj.imageUrl});
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
export default Login;
