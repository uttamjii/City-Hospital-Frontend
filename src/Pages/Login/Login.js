import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import WhichPage from "../../Components/whichPageComponent/WhichPage";

import googleIcon from "../../images/google.png";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../Actions/userActions";

import constants from "../../Constants";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const buttonRef = useRef();
  const [buttonText, setButtonText] = useState("login");

  const { isAuthenticated, loading } = useSelector((state) => state.user);

  const formSubmitHandler = (e) => {
    e.preventDefault();

    buttonRef.current.disabled = true;
    setButtonText("Please Wait...");

    dispatch(loginUser(e.target.email.value, e.target.password.value));
  };

  const googleLoginHandler = () => {
    window.open(`${constants.url}/auth/google`, "_self");
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate(-1);
    }
    if (loading === false) {
      buttonRef.current.disabled = false;
      setButtonText("login");
    }
  }, [isAuthenticated, navigate, loading]);

  return (
    <>
      <WhichPage whichPage="Login" />

      <section className="min-h-fit pb-16 px-4 ">
        <div className=" py-14 ml-8 sm:ml-[5.4rem]  hover:text-green-500 ">
          <div className="border-[2px] w-[10vmin] border-green-500 my-2"></div>
          <h1 className="text-[5vmin] font-semibold text-left drop-shadow-md ">
            Login{" "}
            <span className="text-[3vmin] text-gray-400 font-bold hover:text-blue-900">
              OR
            </span>{" "}
            Sign In
          </h1>
        </div>

        {/* Login Section */}

        <section className="shadow-md py-8 sm:w-10/12 md:w-8/12 lg:w-7/12 m-auto  p-4 space-y-4">
          <form className=" space-y-4" onSubmit={formSubmitHandler}>
            <input
              type="email"
              className="bg-gray-200 shadow-sm px-3 placeholder:font-normal  ld font-medium border-b-2 border-green-500 box-border border-opacity-0 hover:border-opacity-100 transition-all duration-[0.4s] py-2 w-full outline-none rounded-md"
              placeholder="Email (Required)"
              name="email"
              required
              autoComplete="true"
            />
            <input
              type="password"
              className="bg-gray-200 shadow-sm px-3 placeholder:font-normal  ld font-medium border-b-2 border-green-500 box-border border-opacity-0 hover:border-opacity-100 transition-all duration-[0.4s] py-2 w-full outline-none rounded-md"
              placeholder="Password (Required)"
              name="password"
              required
              autoComplete="true"
            />

            <div className="my-4 drop-shadow-sm py-3 w-full  box-border">
              <div className=" inline relative hoverEffect text-white  bg-blue-900    py-[1.7vmin] rounded-md ">
                <button
                  type="submit"
                  className="text-[2.5vmin] font-bold relative z-[3] w-full "
                  ref={buttonRef}
                >
                  {buttonText}
                </button>
              </div>
            </div>
          </form>
          <div className="flex justify-between items-center flex-col sm:flex-row   py-4 lg:px-4 truncate space-y-4 sm:space-y-0">
            <Link
              to="/forgotpassword"
              className="text-right text-gray-500 text-sm hover:text-green-500"
            >
              <span className="font-semibold drop-shadow-md">
                Forgotten password?
              </span>{" "}
              Send Mail
            </Link>

            <Link
              to="/signup"
              className="text-right text-gray-500 text-sm hover:text-green-500"
            >
              <span className="font-semibold drop-shadow-md">
                Don't have an account?
              </span>{" "}
              Sign Up
            </Link>
          </div>

          <div className="text-center  py-2 font-bold hover:text-green-500 drop-shadow-md ">
            Or
          </div>

          <div
            className="text-center   py-2 font-bold bg-red-600  hover:bg-red-500 cursor-pointer hover:text-white transition-all duration-500  flex justify-center items-center rounded-md"
            onClick={googleLoginHandler}
          >
            <img src={googleIcon} alt="google" className="h-4 w-4" />
            <span className="px-2 font-bold drop-shadow-md">Google</span>
          </div>
        </section>
      </section>
    </>
  );
};

export default Login;
