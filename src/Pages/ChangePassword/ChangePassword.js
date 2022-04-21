import WhichPage from "../../Components/whichPageComponent/WhichPage";
import React from "react";
import { Link, useNavigate } from "react-router-dom";


const ChangePassword = () => {
  const navigate = useNavigate();

  
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
          <form action="" className=" space-y-4">
            <input
              type="password"
              className="bg-gray-200 shadow-sm px-3 placeholder:font-normal  ld font-medium border-b-2 border-green-500 box-border border-opacity-0 hover:border-opacity-100 transition-all duration-[0.4s] py-2 w-full outline-none rounded-md"
              placeholder="Password"
            />
            <input
              type="password"
              className="bg-gray-200 shadow-sm px-3 placeholder:font-normal  ld font-medium border-b-2 border-green-500 box-border border-opacity-0 hover:border-opacity-100 transition-all duration-[0.4s] py-2 w-full outline-none rounded-md"
              placeholder="New Password"
            />
            <input
              type="password"
              className="bg-gray-200 shadow-sm px-3 placeholder:font-normal  ld font-medium border-b-2 border-green-500 box-border border-opacity-0 hover:border-opacity-100 transition-all duration-[0.4s] py-2 w-full outline-none rounded-md"
              placeholder="Confirm New Password"
            />

            <div className="my-4 drop-shadow-sm py-3 w-full  box-border">
              <div className=" inline relative hoverEffect text-white  bg-blue-900    py-[1.7vmin] rounded-md ">
                <button className="text-[2.5vmin] font-bold relative z-[3] w-full ">
                  Update Password
                </button>
              </div>
            </div>
          </form>
          <div className="text-right   py-4 lg:px-4 truncate">
            <Link
              to="/login"
              className="text-right text-gray-500 text-sm hover:text-green-500"
            >
              <span
                className="font-semibold drop-shadow-md"
                onClick={() => navigate(-1)}
              >
                Don't Change?
              </span>{" "}
              Go back
            </Link>
          </div>
        </section>
      </section>
    </>
  );
};

export default ChangePassword;
