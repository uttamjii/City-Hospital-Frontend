import WhichPage from "../../Components/whichPageComponent/WhichPage";
import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changePassword } from "../../Actions/userActions";

const ChangePassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {  loading } = useSelector((state) => state.user);

  const buttonRef = useRef();
  const [buttonText, setButtonText] = useState("Update Password");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const password = e.target.password.value;
    const newPassword = e.target.newPassword.value;
    const confirmNewPassword = e.target.confirmNewPassword.value;

    if (newPassword !== confirmNewPassword) {
      dispatch({ type: "addErrors", payload: "Passwords do not match" });
    } else {
      buttonRef.current.disabled = true;
      setButtonText("Please Wait...");
      dispatch(changePassword(password, newPassword, confirmNewPassword));
    }
  };

  useEffect(() => {
    if (loading === false) {
      buttonRef.current.disabled = false;
      setButtonText("Update Password");
    }
  }, [loading]);

  return (
    <>
      <WhichPage whichPage="Change Password" />

      {/* Edit Profile Section */}

      <section className="min-h-fit pb-16 px-4 ">
        <div className=" py-14 ml-8 sm:ml-[5.4rem]  hover:text-green-500 ">
          <div className="border-[2px] w-[10vmin] border-green-500 my-2"></div>
          <h1 className="text-[5vmin] font-semibold text-left drop-shadow-md ">
            Change Password{" "}
            <span className="text-[3vmin] text-gray-400 font-bold hover:text-blue-900">
              OR
            </span>{" "}
            Update Password
          </h1>
        </div>

        {/* Login Section */}

        <section className="shadow-md py-8 sm:w-10/12 md:w-8/12 lg:w-7/12 m-auto  p-4 space-y-4">
          <form onSubmit={formSubmitHandler} className=" space-y-4">
            <input
              type="password"
              className="bg-gray-200 shadow-sm px-3 placeholder:font-normal  ld font-medium border-b-2 border-green-500 box-border border-opacity-0 hover:border-opacity-100 transition-all duration-[0.4s] py-2 w-full outline-none rounded-md"
              placeholder="Password (Required)"
              name="password"
              required
            />
            <input
              type="password"
              className="bg-gray-200 shadow-sm px-3 placeholder:font-normal  ld font-medium border-b-2 border-green-500 box-border border-opacity-0 hover:border-opacity-100 transition-all duration-[0.4s] py-2 w-full outline-none rounded-md"
              placeholder="New Password (Required)"
              name="newPassword"
              required
            />
            <input
              type="password"
              className="bg-gray-200 shadow-sm px-3 placeholder:font-normal  ld font-medium border-b-2 border-green-500 box-border border-opacity-0 hover:border-opacity-100 transition-all duration-[0.4s] py-2 w-full outline-none rounded-md"
              placeholder="Confirm New Password (Required)"
              name="confirmNewPassword"
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
          <div className="text-right   py-4 lg:px-4 truncate">
            <div
              onClick={() => navigate(-1)}
              className="text-right text-gray-500 text-sm hover:text-green-500 cursor-pointer"
            >
              <span className="font-semibold drop-shadow-md">
                Don't Change?
              </span>{" "}
              Go back
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default ChangePassword;
