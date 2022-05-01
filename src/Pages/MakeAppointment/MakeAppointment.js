import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import WhichPage from "../../Components/whichPageComponent/WhichPage";

import { useDispatch, useSelector } from "react-redux";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { createAppointment } from "../../Actions/appointmentAction";

const MakeAppointment = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { loading, message, error } = useSelector(
    (state) => state.forgotPassword
  );

  const buttonRef = useRef();
  const [buttonText, setButtonText] = useState("Appointment");
  const optionsReService = useRef();
  const optionsRefGender = useRef();
  const [optionValueService, setOptionValueService] = useState(
    "Choose your Service"
  );
  const [optionValueGender, setOptionValueGender] =
    useState("Choose your Gender");

  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [phone, setPhone] = useState("");

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    const appointmentDate = e.target.appointmentDate.value;
    const appointmentTime = e.target.appointmentTime.value;
    const message = e.target.message.value;
    const date = new Date(appointmentDate).getDate();
    const todayDate = new Date().getDate();


    if ((phone.length < 10 || phone.length > 10) && !(date >= todayDate)) {
      return dispatch({
        type: "addErrors",
        payload: "Please Enter a Valid Number or Date",
      });
    } else {
      if (phone.length < 10 || phone.length > 10) {
        return dispatch({
          type: "addErrors",
          payload: "Please Enter a Valid Number",
        });
      }

      if (!(date >= todayDate)) {
        return dispatch({
          type: "addErrors",
          payload: "Please Enter a Valid Date",
        });
      }
    }

    if (phone.toString() === "0000000000") {
      return dispatch({
        type: "addErrors",
        payload: "Please Enter a Valid Number",
      });
    }

    if (optionValueService === "Choose your Service") {
      return dispatch({
        type: "addErrors",
        payload: "Please Choose a Service",
      });
    }
    if (optionValueGender === "Choose your Gender") {
      return dispatch({ type: "addErrors", payload: "Please Choose A Gender" });
    }

    buttonRef.current.disabled = true;
    setButtonText("Please Wait...");

    await dispatch(
      createAppointment(
        name,
        email,
        phone,
        appointmentDate,
        appointmentTime,
        optionValueGender,
        message,
        optionValueService
      )
    );
    e.target.reset();
  };

  useEffect(() => {
    if (loading === false) {
      buttonRef.current.disabled = false;
      setButtonText("Appointment");
    }
    if (message) {
      dispatch({ type: "addMessageWhenLogin", payload: message });
      setName("");
      setEmail("");
      setPhone("");
      setOptionValueService("Choose your Service");
      setOptionValueGender("Choose your Gender");
    }
    if (error) {
      dispatch({ type: "addErrors", payload: error });
      
    }
    if(user){
      setName(user.name);
      setEmail(user.email);
    }
  }, [loading, message, dispatch, error,user]);

  const optionsHandlerSerivce = (e) => {
    setOptionValueService(e.target.innerText);
    optionsReService.current.classList.toggle("hidden");
  };

  const optionsHandlerGender = (e) => {
    setOptionValueGender(e.target.innerText);
    optionsRefGender.current.classList.toggle("hidden");
  };

  return (
    <>
      <WhichPage whichPage="Appointment" />

      <section className="min-h-fit pb-16 px-4 ">
        <div className=" py-14 ml-8 sm:ml-[5.4rem]  hover:text-green-500 ">
          <div className="border-[2px] w-[10vmin] border-green-500 my-2"></div>
          <h1 className="text-[5vmin] font-semibold text-left drop-shadow-md ">
            Make an Appointment
            {/* <span className="text-[3vmin] text-gray-400 font-bold hover:text-blue-900">
              OR
            </span>{" "}
            Sign Up */}
          </h1>
        </div>

        {/* Login Section */}

        <section className="shadow-md py-8 sm:w-10/12 md:w-8/12 lg:w-7/12 m-auto  p-4 space-y-4">
          <form onSubmit={formSubmitHandler} className=" space-y-4">
            <input
              type="text"
              className="bg-gray-200 shadow-sm px-3 placeholder:font-normal   font-medium border-b-2 border-green-500 box-border border-opacity-0 hover:border-opacity-100 transition-all duration-[0.4s] py-2 w-full outline-none rounded-md"
              placeholder="Name (Required)"
              required
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              className="bg-gray-200 shadow-sm px-3 placeholder:font-normal   font-medium border-b-2 border-green-500 box-border border-opacity-0 hover:border-opacity-100 transition-all duration-[0.4s] py-2 w-full outline-none rounded-md"
              placeholder="Email (Required)"
              required
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              className="bg-gray-200 shadow-sm px-3 placeholder:font-normal   font-medium border-b-2 border-green-500 box-border border-opacity-0 hover:border-opacity-100 transition-all duration-[0.4s] py-2 w-full outline-none rounded-md"
              placeholder="Phone Number (Required)"
              required
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, "").slice(0, 10))}
            />
            {/* Service Options */}
            <section className="relative ">
              <section
                className="flex relative items-center"
                onClick={optionsHandlerSerivce}
              >
                <h1 className="bg-gray-200 shadow-sm px-3 placeholder:font-normal  ld font-medium border-b-2 border-green-500 box-border border-opacity-0 hover:border-opacity-100 transition-all duration-[0.4s] py-2 w-full outline-none rounded-md cursor-pointer ">
                  {optionValueService}
                </h1>
                <span className="absolute right-2 ">
                  <KeyboardArrowDownIcon className="cursor-pointer" />
                </span>
              </section>

              <section
                className="bg-gray-200 shadow-sm  placeholder:font-normal  ld font-medium border-b-2 border-green-500 box-border border-opacity-0 hover:border-opacity-100 transition-all duration-[0.4s] py-4 -translate-y-2 px-4 outline-none rounded-md  cursor-pointer hidden absolute w-full z-30 select-none "
                ref={optionsReService}
                onClick={optionsHandlerSerivce}
              >
                <h1 className=" p-1">Neurology</h1>
                <h1 className=" p-1">Cardiology</h1>
                <h1 className=" p-1">Dental</h1>
                <h1 className=" p-1">Ophthalmology</h1>
                <h1 className=" p-1">Other Services</h1>
              </section>
            </section>
            {/* Gender Options */}
            <section className="relative ">
              <section
                className="flex relative items-center"
                onClick={optionsHandlerGender}
              >
                <h1 className="bg-gray-200 shadow-sm px-3 placeholder:font-normal  ld font-medium border-b-2 border-green-500 box-border border-opacity-0 hover:border-opacity-100 transition-all duration-[0.4s] py-2 w-full outline-none rounded-md cursor-pointer ">
                  {optionValueGender}
                </h1>
                <span className="absolute right-2 ">
                  <KeyboardArrowDownIcon className="cursor-pointer" />
                </span>
              </section>

              <section
                className="bg-gray-200 shadow-sm  placeholder:font-normal  ld font-medium border-b-2 border-green-500 box-border border-opacity-0 hover:border-opacity-100 transition-all duration-[0.4s] py-4 -translate-y-2 px-4 outline-none rounded-md  cursor-pointer hidden absolute w-full z-30 select-none "
                ref={optionsRefGender}
                onClick={optionsHandlerGender}
              >
                <h1 className=" p-1">Male</h1>
                <h1 className=" p-1">Female</h1>
                <h1 className=" p-1">Other</h1>
              </section>
            </section>
            <input
              type="date"
              className="bg-gray-200 shadow-sm  px-3  md:pr-3 placeholder:font-normal   font-medium border-b-2 border-green-500 box-border border-opacity-0 hover:border-opacity-100 transition-all duration-[0.4s] py-2 w-full outline-none rounded-md  "
              required
              name="appointmentDate"
              placeholder="Appointment Date (Required)"
            />{" "}
            <input
              type="time"
              className="bg-gray-200 shadow-sm  px-3  md:pr-3 placeholder:font-normal   font-medium border-b-2 border-green-500 box-border border-opacity-0 hover:border-opacity-100 transition-all duration-[0.4s] py-2 w-full outline-none rounded-md  "
              name="appointmentTime"
              placeholder="Appointment Time (Optional)"
            />
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
          <div className="text-right   py-4 lg:px-4 truncate">
            <Link
              to="/login"
              className="text-right text-gray-500 text-sm hover:text-green-500"
            >
              <span className="font-semibold drop-shadow-md">
                have an account?
              </span>{" "}
              Sign In
            </Link>
          </div>
        </section>
      </section>
    </>
  );
};

export default MakeAppointment;
