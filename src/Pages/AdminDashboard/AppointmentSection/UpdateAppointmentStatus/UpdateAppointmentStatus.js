import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useDispatch, useSelector } from "react-redux";
import { updateAppointmentStatus } from "../../../../Actions/appointmentAction";

const UpdateAppointmentStatus = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  let [searchParams] = useSearchParams();
  const status = searchParams.get("status");

  const { message, error: asUserError } = useSelector((state) => state.users);

  const {
    message: asUpdateStatus,
    error,
    loading,
  } = useSelector((state) => state.adminAppointments);

  const buttonRef = useRef();
  const [buttonText, setButtonText] = useState("Update Status");

  const optionsRef = useRef();
  const [optionValue, setOptionValue] = useState(
    status === "Finished" || status === "Cancelled" || status === "Confirmed"
      ? status
      : "Choose Appointment Status"
  );

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setButtonText("Updating...");
    buttonRef.current.disabled = true;
    const message = e.target?.message?.value;
    dispatch(updateAppointmentStatus(id, optionValue, message));
  };

  const optionsHandler = (e) => {
    setOptionValue(e.target.innerText);
    optionsRef.current.classList.toggle("hidden");
  };

  useEffect(() => {
    if (message) {
      dispatch({ type: "addMessageWhenLogin", payload: message });
    }
    if (asUserError) {
      dispatch({ type: "addErrors", payload: asUserError });
    }
    if (asUpdateStatus) {
      dispatch({ type: "addMessageWhenLogin", payload: asUpdateStatus });
    }
    if (error) {
      dispatch({ type: "addErrors", payload: error });
    }
    if (loading === false) {
      setButtonText("Update Status");
      buttonRef.current.disabled = false;
    }
  }, [dispatch, message, asUserError, loading, error, asUpdateStatus]);

  return (
    <>
      <section className="min-h-fit pb-16 px-4 ">
        <div className=" py-14 ml-8 sm:ml-[5.4rem]  hover:text-green-500 ">
          <div className="border-[2px] w-[10vmin] border-green-500 my-2"></div>
          <h1 className="text-[5vmin] font-semibold text-left drop-shadow-md ">
            Update Status
          </h1>
        </div>

        {/* Login Section */}

        <section className="shadow-md py-8 sm:w-10/12 md:w-8/12 lg:w-7/12 m-auto  p-4 space-y-4">
          <form className=" space-y-4" onSubmit={formSubmitHandler}>
            {/*  Options */}
            <section className="relative ">
              <section
                className="flex relative items-center"
                onClick={optionsHandler}
              >
                <h1 className="bg-gray-200 shadow-sm px-3 placeholder:font-normal  ld font-medium border-b-2 border-green-500 box-border border-opacity-0 hover:border-opacity-100 transition-all duration-[0.4s] py-2 w-full outline-none rounded-md cursor-pointer ">
                  {optionValue}
                </h1>
                <span className="absolute right-2 ">
                  <KeyboardArrowDownIcon className="cursor-pointer" />
                </span>
              </section>

              <section
                className="bg-gray-200 shadow-sm  placeholder:font-normal  ld font-medium border-b-2 border-green-500 box-border border-opacity-0 hover:border-opacity-100 transition-all duration-[0.4s] py-4 -translate-y-2 px-4 outline-none rounded-md  cursor-pointer hidden absolute w-full z-30 select-none "
                ref={optionsRef}
                onClick={optionsHandler}
              >
                {status !== "Confirmed" && <h1 className=" p-1">Confirmed</h1>}
                {status !== "Cancelled" && <h1 className=" p-1">Cancelled</h1>}
                {status !== "Finished" && <h1 className=" p-1">Finished</h1>}
              </section>
            </section>
            <textarea
              className="bg-gray-200 shadow-sm px-3 placeholder:font-normal   font-medium border-b-2 border-green-500 box-border border-opacity-0 hover:border-opacity-100 transition-all duration-[0.4s] py-2 w-full outline-none rounded-md  "
              placeholder="Message (Optional)"
              name="message"
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
          <div className="flex justify-end items-center flex-col sm:flex-row   py-4 lg:px-4 truncate space-y-4 sm:space-y-0">
            <div
              className="text-right text-gray-500 text-sm hover:text-green-500 cursor-pointer"
              onClick={() => navigate(-1)}
            >
              <span className="font-semibold drop-shadow-md">
                No need to update?
              </span>{" "}
              go back
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default UpdateAppointmentStatus;
