import { useState } from "react";
import { SignInVideo } from "../../assets";
import OutlineButton from "../../components/outlineButton";
import RoundedButton from "../../components/roundedbutton";
import { loginUser } from "../../api/query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    let credentials = {
      username: username,
      password: password,
    };
    dispatch(loginUser(credentials));
    const user = atob(localStorage.getItem("user"));
    setTimeout(() => {
      if (user) {
        navigate("/");
      }
    }, 1000);
  };

  const navigateToSignUp = () =>{
    navigate('/signup/new', { replace: true });
}



  return (
    <div className="min-h-screen w-100 flex relative justify-center bg-white">
      <div className="absolute top-0 left-0 h-screen hidden custom-md:block custom-md:w-2/5 custom-lg1:w-[400px]">
        <video autoPlay muted loop className="w-full h-full object-cover">
          <source src={SignInVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="w-[420px] flex flex-col justify-center items-start transform translate-x-0 custom-md:translate-x-36 custom-lg1:translate-x-24 custom-lg2:translate-x-40 xl:translate-x-0">
        <p className="text-2xl mb-10"> Sign in to Dribble</p>
        <OutlineButton
          text={"Sign in with Google"}
          padding={"4"}
          width={"full"}
        />
        <p className="mt-10 relative w-full flex justify-center text-gray-600 font-medium before:content-[''] before:absolute before:left-0 before:top-1/2 before:w-28 before:h-px before:bg-gray-300 after:content-[''] after:absolute after:right-0 after:top-1/2 after:w-28 after:h-px after:bg-gray-300">
          <span className="relative bg-white px-4 heading1">or sign in with email</span>
        </p>
        <form className="mt-8 w-full">
          <div className="flex flex-col">
            <label htmlFor="username">Username or Email</label>
            <input
              name="username"
              type="text"
              value={username}
              onChange={(event) => {
                setusername(event.target.value);
              }}
              className="mt-1 p-3 bg-transparent border border-gray-300 rounded-lg"
            />
          </div>
          <div className="flex flex-col mt-8 mb-8">
            <div className="flex justify-between">
              <label htmlFor="password">Password</label>
              <label className="font-normal heading1">
                <u>Forgot?</u>
              </label>
            </div>
            <input
              name="password"
              type="password"
              value={password}
              onChange={(event) => {
                setpassword(event.target.value);
              }}
              className="mt-1 p-3 bg-transparent border border-gray-300 rounded-lg"
            />
          </div>
          <div onClick={(event) => handleLogin(event)}>
            <RoundedButton
              text={"Sign In"}
              width={"full"}
              padding={"4"}
              weight={"semibold"}
            />
          </div>
        </form>
        <p className="heading1 mt-5 self-center">
          Don’t have an account? <u className="cursor-pointer" onClick={navigateToSignUp}>Sign up</u>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
