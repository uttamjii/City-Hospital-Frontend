import React, { useEffect, useRef , useState} from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import WhichPage from "../../Components/whichPageComponent/WhichPage";

import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../../Actions/userActions";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id, token } = useParams();

  const buttonRef = useRef();
  const [buttonText, setButtonText] = useState("Reset Password");
  
  const { message, error, loading } = useSelector(
    (state) => state.forgotPassword
  );

  const formSubmitHandler = (e) => {
    e.preventDefault();

    buttonRef.current.disabled = true;
    setButtonText("Please Wait...");

    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    if (password !== confirmPassword) {
      dispatch({ type: "addErrors", payload: "Passwords do not match" });
    } else {
      dispatch(resetPassword(id, token, password, confirmPassword));
    }
  };

  useEffect(() => {
    if (message) {
      dispatch({ type: "addMessage", payload: message });
      navigate("/login");
    }
    if (error) {
      dispatch({ type: "addErrors", payload: error });
    }
    if (loading === false) {
      buttonRef.current.disabled = false;
      setButtonText("Reset Password");
    }
  }, [navigate, message, error, dispatch, loading]);

  return (
    <>
      <WhichPage whichPage=" Reset Password" />

      <section className="min-h-fit pb-16 px-4 ">
        <div className=" py-14 ml-8 sm:ml-[5.4rem]  hover:text-green-500 ">
          <div className="border-[2px] w-[10vmin] border-green-500 my-2"></div>
          <h1 className="text-[5vmin] font-semibold text-left drop-shadow-md ">
            Reset Password{" "}
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
              type="password"
              className="bg-gray-200 shadow-sm px-3 placeholder:font-normal  ld font-medium border-b-2 border-green-500 box-border border-opacity-0 hover:border-opacity-100 transition-all duration-[0.4s] py-2 w-full outline-none rounded-md"
              placeholder="New Password (Required)"
              name="password"
              required
            />
            <input
              type="password"
              className="bg-gray-200 shadow-sm px-3 placeholder:font-normal  ld font-medium border-b-2 border-green-500 box-border border-opacity-0 hover:border-opacity-100 transition-all duration-[0.4s] py-2 w-full outline-none rounded-md"
              placeholder="Confrim Password (Required)"
              name="confirmPassword"
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
              to="/forgotpassword"
              className="text-right text-gray-500 text-sm hover:text-green-500"
            >
              <span className="font-semibold drop-shadow-md">resend Mail?</span>{" "}
              go back
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

export default ResetPassword;
