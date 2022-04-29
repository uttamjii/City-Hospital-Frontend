import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import WhichPage from "../../Components/whichPageComponent/WhichPage";

import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "../../Actions/userActions";

const ForgotPassword = () => {
  const dispatch = useDispatch();

  const buttonRef = useRef();
  const [buttonText, setButtonText] = useState("Send Mail");
  const { message, error, loading } = useSelector(
    (state) => state.forgotPassword
  );

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    buttonRef.current.disabled = true;
    dispatch(forgotPassword(e.target.email.value));
  };

  useEffect(() => {
    if (message) {
      dispatch({ type: "addMessage", payload: message });
    }
    if (error) {
      dispatch({ type: "addErrors", payload: error });
    }
    if (loading === false) {
      setButtonText("Send Mail");
      buttonRef.current.disabled = false;
    }
  }, [message, error, dispatch, loading]);

  return (
    <>
      <WhichPage whichPage=" Forgot Password" />

      <section className="min-h-fit pb-16 px-4 ">
        <div className=" py-14 ml-8 sm:ml-[5.4rem]  hover:text-green-500 ">
          <div className="border-[2px] w-[10vmin] border-green-500 my-2"></div>
          <h1 className="text-[5vmin] font-semibold text-left drop-shadow-md ">
            Forgot Password{" "}
            {/* <span className="text-[3vmin] text-gray-400 font-bold hover:text-blue-900">
              OR
            </span>{" "}
            Sign In */}
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
              to="/login"
              className="text-right text-gray-500 text-sm hover:text-green-500"
            >
              <span className="font-semibold drop-shadow-md">
                have an account?
              </span>{" "}
              Sign In
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
        </section>
      </section>
    </>
  );
};

export default ForgotPassword;
