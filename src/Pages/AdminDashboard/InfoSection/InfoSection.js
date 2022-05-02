import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateAllBasicInfo } from "../../../Actions/infoAction";

const InfoSection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { info, message, loading, error } = useSelector((state) => state.info);

  const buttonRef = useRef();
  const [buttonText, setButtonText] = useState("Update Info");

  const [emergencyNumber, setEmergencyNumber] = useState(
    info?.emergencyNumber || ""
  );
  const [phoneNumber, setPhoneNumber] = useState(info?.phoneNumber || "");
  const [email, setEmail] = useState(info?.email || "");
  const [address, setAddress] = useState(info?.address || "");
  const [city, setCity] = useState(info?.city || "");
  const [state, setState] = useState(info?.state || "");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateAllBasicInfo({
        emergencyNumber,
        phoneNumber,
        email,
        address,
        city,
        state,
      })
    );

    buttonRef.current.disabled = true;
    setButtonText("Updating...");
  };

  useEffect(() => {
    if (message) {
      dispatch({ type: "addMessageWhenLogin", payload: message });
    }
    if (loading === false) {
      buttonRef.current.disabled = false;
      setButtonText("Update Info");
    }
    if (error) {
      dispatch({ type: "addErrors", payload: error });
    }
    if (info) {
      setEmergencyNumber(info.emergencyNumber);
      setPhoneNumber(info.phoneNumber);
      setEmail(info.email);
      setAddress(info.address);
      setCity(info.city);
      setState(info.state);
    }
  }, [message, dispatch, info, loading, error]);
  return (
    <>
      <section className="min-h-fit  px-4 ">
        <div className=" py-14 ml-8 sm:ml-[5.4rem]  hover:text-green-500 ">
          <div className="border-[2px] w-[10vmin] border-green-500 my-2"></div>
          <h1 className="text-[5vmin] font-semibold text-left drop-shadow-md ">
            Info
            {/* <span className="text-[3vmin] text-gray-400 font-bold hover:text-blue-900">
              OR
            </span>{" "}
            Sign Up */}
          </h1>
        </div>
      </section>
      <section className="flex justify-center pb-20">
        <section className="shadow-md w-11/12 sm:w-10/12 md:w-8/12 lg:w-7/12 m-auto  p-4 space-y-4">
          <form className=" space-y-4 " onSubmit={formSubmitHandler}>
            <section className="space-y-2">
              <label
                htmlFor="emergencyNumber"
                className="text-gray-400 font-semibold  hover:text-gray-500"
              >
                Emergency Number :
              </label>
              <input
                type="text"
                className="bg-gray-200 shadow-sm px-3 placeholder:font-normal   font-medium border-b-2 border-green-500 box-border border-opacity-0 hover:border-opacity-100 transition-all duration-[0.4s] py-2 w-full outline-none rounded-md"
                placeholder="Emergency Number"
                name="emergencyNumber"
                id="emergencyNumber"
                value={emergencyNumber}
                onChange={(e) =>
                  setEmergencyNumber(
                    e.target.value.replace(/[^0-9]/g, "").slice(0, 10)
                  )
                }
              />
            </section>
            <section className="space-y-2">
              <label
                htmlFor="phoneNumber"
                className="text-gray-400 font-semibold   hover:text-gray-500"
              >
                Phone Number :
              </label>
              <input
                type="text"
                className="bg-gray-200 shadow-sm px-3 placeholder:font-normal   font-medium border-b-2 border-green-500 box-border border-opacity-0 hover:border-opacity-100 transition-all duration-[0.4s] py-2 w-full outline-none rounded-md"
                placeholder="Phone Number"
                name="phoneNumber"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) =>
                  setPhoneNumber(
                    e.target.value.replace(/[^0-9]/g, "").slice(0, 10)
                  )
                }
              />
            </section>
            <section className="space-y-2">
              <label
                htmlFor="email"
                className="text-gray-400 font-semibold  hover:text-gray-500"
              >
                Email :
              </label>
              <input
                type="email"
                className="bg-gray-200 shadow-sm px-3 placeholder:font-normal   font-medium border-b-2 border-green-500 box-border border-opacity-0 hover:border-opacity-100 transition-all duration-[0.4s] py-2 w-full outline-none rounded-md"
                placeholder="Email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </section>
            <section className="space-y-2">
              <label
                htmlFor="address"
                className="text-gray-400 font-semibold   hover:text-gray-500"
              >
                Full Address :
              </label>
              <input
                type="text"
                className="bg-gray-200 shadow-sm px-3 placeholder:font-normal   font-medium border-b-2 border-green-500 box-border border-opacity-0 hover:border-opacity-100 transition-all duration-[0.4s] py-2 w-full outline-none rounded-md"
                placeholder="Address"
                name="address"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </section>
            <section className="space-y-2">
              <label
                htmlFor="city"
                className="text-gray-400 font-semibold hover:text-gray-500"
              >
                City :
              </label>
              <input
                type="text"
                className="bg-gray-200 shadow-sm px-3 placeholder:font-normal   font-medium border-b-2 border-green-500 box-border border-opacity-0 hover:border-opacity-100 transition-all duration-[0.4s] py-2 w-full outline-none rounded-md"
                placeholder="City"
                name="city"
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </section>
            <section className="space-y-2">
              <label
                htmlFor="state"
                className="text-gray-400 font-semibold hover:text-gray-500"
              >
                State :
              </label>
              <input
                type="text"
                className="bg-gray-200 shadow-sm px-3 placeholder:font-normal   font-medium border-b-2 border-green-500 box-border border-opacity-0 hover:border-opacity-100 transition-all duration-[0.4s] py-2 w-full outline-none rounded-md"
                placeholder="State"
                required
                name="state"
                id="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </section>

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
              className="text-right text-gray-500 text-sm hover:text-green-500 cursor-pointer"
              onClick={() => navigate(-1)}
            >
              <span className="font-semibold drop-shadow-md">
                No need to change?
              </span>{" "}
              go back
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default InfoSection;
