import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import avatarPreviewImage from "../../../../images/avatarPreview.png";
import { addNewDoctor } from "../../../../Actions/doctorAction";

const specialist = [
  "Cardiologist",
  "Allergy and immunology",
  "Anesthesiology",
  "Dermatology",
  "Diagnostic radiology",
  "Emergency medicine",
  "Family medicine",
  "Internal medicine",
  "Medical genetics",
  "Neurology",
  "Nuclear medicine",
  "Obstetrics and gynecology",
  "Ophthalmology",
  "Pathology",
  "Pediatrics",
  "Physical medicine and rehabilitation",
  "Preventive medicine",
  "Psychiatry",
  "Radiation oncology",
  "Surgery",
  "Urology",
  "Other Services",
];

const AddNewDoctor = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { message, loading, error } = useSelector((state) => state.doctor);

  const buttonRef = useRef();
  const [buttonText, setButtonText] = useState("Add New Doctor");

  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState(avatarPreviewImage);

  const optionsSpecialityRef = useRef();
  const [optionSpecialityValue, setOptionValueSpeciality] = useState(
    "Choose Doctor Speciality"
  );

  const optionsRefGender = useRef();
  const [optionValueGender, setOptionValueGender] = useState(
    "Choose Doctor Gender"
  );

  const optionsRefAvailable = useRef();
  const [optionValueAvailable, setOptionValueAvailable] = useState(
    "Will Doctor Available "
  );

  const optionsHandlerAvailable = (e) => {
    setOptionValueAvailable(e.target.innerText);
    optionsRefAvailable.current.classList.toggle("hidden");
  };

  const optionsHandlerGender = (e) => {
    setOptionValueGender(e.target.innerText);
    optionsRefGender.current.classList.toggle("hidden");
  };

  const optionsSpecialityHandler = (e) => {
    setOptionValueSpeciality(e.target.innerText);
    optionsSpecialityRef.current.classList.toggle("hidden");
  };

  const handleChange = (e) => {
    if (e.target.value) {
      const reader = new FileReader();
      const file = e.target.files[0];
      reader.onloadend = () => {
        setAvatarPreview(reader.result);
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    let name = e.target?.name?.value;
    let description = e.target?.description?.value;

    if (name.length < 5) {
      return dispatch({
        type: "addErrors",
        payload: "Name Will Be 5 Characters At Least.",
      });
    }

    if (description.length < 60) {
      return dispatch({
        type: "addErrors",
        payload: "Description Will Be 15 Words At Least.",
      });
    }

    buttonRef.current.disabled = true;
    setButtonText("Please Wait...");

    await dispatch(
      addNewDoctor({
        name,
        description,
        avatar,
        gender: optionValueGender,
        speciality: optionSpecialityValue,
        available: optionValueAvailable,
      })
    );

    e.target.reset();
  };

  useEffect(() => {
    if (message) {
      dispatch({ type: "addMessageWhenLogin", payload: message });
    }
    if (loading === false) {
      buttonRef.current.disabled = false;
      setButtonText("Add New Doctor");
    }
    if (error) {
      dispatch({ type: "addErrors", payload: error });
    }
  }, [message, dispatch, loading, error]);
  return (
    <>
      <section className="min-h-fit  px-4 ">
        <div className=" py-14 ml-8 sm:ml-[5.4rem]  hover:text-green-500 ">
          <div className="border-[2px] w-[10vmin] border-green-500 my-2"></div>
          <h1 className="text-[5vmin] font-semibold text-left drop-shadow-md ">
            Add New Doctor
          </h1>
        </div>
      </section>
      <section className="flex justify-center pb-20">
        <section className="shadow-md w-11/12 sm:w-10/12 md:w-8/12 lg:w-7/12 m-auto  p-4 space-y-4">
          <form className=" space-y-4 " onSubmit={formSubmitHandler}>
            <section className="space-y-2">
              <label
                htmlFor="name"
                className="text-gray-400 font-semibold  hover:text-gray-500"
              >
                Name (Required) :
              </label>
              <input
                type="text"
                className="bg-gray-200 shadow-sm px-3 placeholder:font-normal   font-medium border-b-2 border-green-500 box-border border-opacity-0 hover:border-opacity-100 transition-all duration-[0.4s] py-2 w-full outline-none rounded-md"
                placeholder="Doctor Name (Required)"
                required
                name="name"
                id="name"
              />
            </section>

            {/*  Options */}
            <section className="space-y-2">
              <h1 className="text-gray-400 font-semibold  hover:text-gray-500">
                Doctor Speciality (Required) :
              </h1>

              <section className="relative ">
                <section
                  className="flex relative items-center"
                  onClick={optionsSpecialityHandler}
                >
                  <h1 className="bg-gray-200 shadow-sm px-3 placeholder:font-normal  ld font-medium border-b-2 border-green-500 box-border border-opacity-0 hover:border-opacity-100 transition-all duration-[0.4s] py-2 w-full outline-none rounded-md cursor-pointer ">
                    {optionSpecialityValue}
                  </h1>
                  <span className="absolute right-2 ">
                    <KeyboardArrowDownIcon className="cursor-pointer" />
                  </span>
                </section>

                <section
                  className="bg-gray-200 shadow-sm  placeholder:font-normal  ld font-medium border-b-2 border-green-500 box-border border-opacity-0 hover:border-opacity-100 transition-all duration-[0.4s] py-4 -translate-y-2 px-4 outline-none rounded-md  cursor-pointer hidden absolute w-full z-30 select-none h-[20rem] overflow-y-auto "
                  ref={optionsSpecialityRef}
                  onClick={optionsSpecialityHandler}
                >
                  {specialist.map((item, index) => (
                    <h1 key={index} className=" p-1">
                      {item}
                    </h1>
                  ))}
                </section>
              </section>
            </section>

            {/* Gender Options */}
            <section className="space-y-2">
              <h1 className="text-gray-400 font-semibold  hover:text-gray-500">
                Doctor Gender (Required) :
              </h1>
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
            </section>

            {/* Available Options */}
            <section className="space-y-2">
              <h1 className="text-gray-400 font-semibold  hover:text-gray-500">
                Available (Required) :
              </h1>
              <section className="relative ">
                <section
                  className="flex relative items-center"
                  onClick={optionsHandlerAvailable}
                >
                  <h1 className="bg-gray-200 shadow-sm px-3 placeholder:font-normal  ld font-medium border-b-2 border-green-500 box-border border-opacity-0 hover:border-opacity-100 transition-all duration-[0.4s] py-2 w-full outline-none rounded-md cursor-pointer ">
                    {optionValueAvailable}
                  </h1>
                  <span className="absolute right-2 ">
                    <KeyboardArrowDownIcon className="cursor-pointer" />
                  </span>
                </section>

                <section
                  className="bg-gray-200 shadow-sm  placeholder:font-normal  ld font-medium border-b-2 border-green-500 box-border border-opacity-0 hover:border-opacity-100 transition-all duration-[0.4s] py-4 -translate-y-2 px-4 outline-none rounded-md  cursor-pointer hidden absolute w-full z-30 select-none "
                  ref={optionsRefAvailable}
                  onClick={optionsHandlerAvailable}
                >
                  <h1 className=" p-1">Yes</h1>
                  <h1 className=" p-1">No</h1>
                </section>
              </section>
            </section>

            <section className="space-y-2">
              <label
                htmlFor="avatar"
                className="text-gray-400 font-semibold  hover:text-gray-500"
              >
                Doctor Avatar :
              </label>

              <section className="flex flex-col items-center space-y-3">
                <div className="">
                  <img
                    src={avatarPreview}
                    alt="avatar "
                    className="w-16 h-16 rounded-full border-2 border-green-500 transition-all duration-[.5s] hover:scale-125 cursor-pointer"
                  />
                </div>
                <input
                  type="file"
                  className="file:bg-gray-200 file:shadow-sm file:px-3 placeholder:font-normal  ld font-medium border-b-2 border-green-500 box-border border-opacity-0 hover:border-opacity-100 transition-all duration-[0.4s] file:py-2 outline-none w-full rounded-md file:w-full file:border-none file:outline-none hover:cursor-pointer"
                  accept="image/*"
                  onChange={handleChange}
                  name="avatar"
                  id="avatar"
                />
              </section>
            </section>

            <section className="space-y-2">
              <label
                htmlFor="description"
                className="text-gray-400 font-semibold  hover:text-gray-500"
              >
                Short Description (Required) :
              </label>
              <textarea
                className="bg-gray-200 shadow-sm px-3 placeholder:font-normal   font-medium border-b-2 border-green-500 box-border border-opacity-0 hover:border-opacity-100 transition-all duration-[0.4s] py-2 w-full outline-none rounded-md h-[7rem] sm:h-auto  "
                placeholder="Short Description About Doctor At Least 15 words (Required)"
                required
                name="description"
                id="description"
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
                No need to add?
              </span>{" "}
              go back
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default AddNewDoctor;
