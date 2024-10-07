import { useDispatch } from "react-redux";
import { SignUpVideo } from "../../../assets";
import OutlineButton from "../../../components/common/outlineButton";
import RoundedButton from "../../../components/common/roundedbutton";
import { loginUser } from "../../../api/query";
import { useNavigate } from "react-router-dom";


const SignUpPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

const handleLogin = (event) => {
    event.preventDefault();
    let credentials = {
        username: "venkatsp17",
        password: "123456",
    };
    dispatch(loginUser(credentials));
    const user = atob(localStorage.getItem("user"));
    setTimeout(() => {
        if (user) {
        navigate("/");
        }
    }, 1000);
};
const navigateToSignIn = () =>{
    navigate('/session/new', { replace: true });
}

  return (
    <div className="min-h-screen w-100 flex relative justify-center bg-white">
      <div className="absolute top-0 left-0 h-screen hidden custom-md:block custom-md:w-2/5 custom-lg1:w-[400px]">
        <video autoPlay muted loop className="w-full h-full object-cover">
          <source src={SignUpVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="w-[420px] flex flex-col justify-center items-start transform translate-x-0 custom-md:translate-x-36 custom-lg1:translate-x-24 custom-lg2:translate-x-40 xl:translate-x-0">
        <p className="text-2xl mb-10"> Sign up to Dribble</p>
        <div className="w-full" onClick={()=>handleLogin(event)}>
        <RoundedButton
                text={"Sign up with Google"}
                padding={"4"}
                width={"full"}
                weight={"semibold"}
            />
        </div>
        <p className="my-8 relative w-full flex justify-center text-gray-600 font-medium before:content-[''] before:absolute before:left-0 before:top-1/2 before:w-40 before:h-px before:bg-gray-300 after:content-[''] after:absolute after:right-0 after:top-1/2 after:w-40 after:h-px after:bg-gray-300">
          <span className="relative bg-white px-4 heading1">or</span>
        </p>
        <OutlineButton
          text={"Continue with email"}
          padding={"4"}
          width={"full"}
          weight={"semibold"}
        />
        <p className="heading1 mt-5 self-center">
          Already have an account? <u className="cursor-pointer" onClick={navigateToSignIn}>Sign in</u>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
