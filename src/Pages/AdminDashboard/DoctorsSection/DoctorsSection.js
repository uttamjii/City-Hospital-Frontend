import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";

import DeleteIcon from "@mui/icons-material/Delete";
import { EditRounded } from "@mui/icons-material";
import image from "../../../images/avatarPreview.png";
import { useNavigate, Link } from "react-router-dom";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { deleteDoctor, getAllDoctors } from "../../../Actions/doctorAction";
import VaccinesIcon from "@mui/icons-material/Vaccines";

const DoctorsSection = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const toggleRef = useRef();
  const [openInfoCardData, setOpenInfoCardData] = useState(null);

  const { doctors, message, error } = useSelector((state) => state.doctor);

  const [hideDeleteAdminButton, setHideDeleteAdminButton] = useState("");

  const deleteAdminHandler = async (id) => {
    setHideDeleteAdminButton("hidden");
    await dispatch(deleteDoctor(id));
    await dispatch(getAllDoctors());
    setHideDeleteAdminButton("");
  };

  const editHandler = (id, available) => {
    navigate(`update/${id}`);
  };

  const closeHandler = () => {
    toggleRef.current.classList.toggle("-translate-y-[150%]");
  };

  const editeNameHandler = (name) => {
    let nameEdit = name;

    const spliceName =
      name.slice(3).trim().slice(0, 1).toUpperCase() +
      name.slice(3).trim().slice(1);

    if (name.startsWith("Dr.")) {
      nameEdit = spliceName;
    }
    if (name.startsWith("dr.")) {
      nameEdit = spliceName;
    }
    if (name.startsWith("dr ")) {
      nameEdit = spliceName;
    }
    if (name.startsWith("dr")) {
      nameEdit =
        name.slice(2).trim().slice(0, 1).toUpperCase() +
        name.slice(2).trim().slice(1);
    }
    nameEdit =
      nameEdit.trim().slice(0, 1).toUpperCase() + nameEdit.trim().slice(1);

    return `Dr. ${nameEdit}`;
  };

  const viewDetalsHandler = (id) => {
    const details = doctors.find((doctor) => doctor._id === id);
    setOpenInfoCardData(details);
    toggleRef.current.classList.toggle("-translate-y-[150%]");
  };

  const statusCardColorClassRender = (status) => {
    if (status === "yes") {
      return "text-green-400";
    } else if (status === "no") {
      return "text-red-500";
    }
  };

  useEffect(() => {
    dispatch(getAllDoctors());
  }, [dispatch]);

  useEffect(() => {
    if (message) {
      dispatch({ type: "addMessageWhenLogin", payload: message });
    }
    if (error) {
      dispatch({ type: "addErrors", payload: error });
    }
  }, [dispatch, message, error]);

  return (
    <>
      <section className="min-h-fit pb-16 ">
        <div className=" p-14   hover:text-green-500  ">
          <div className="border-[2px] w-[10vmin] border-green-500 my-2"></div>
          <h1 className="text-[5vmin] font-semibold text-left drop-shadow-md ">
            Doctors
          </h1>
        </div>

        <div className="text-right p-6 sm:p-8 md:p-10  lg:p-14  w-full ">
          <span>
            <div className=" inline relative hoverEffect text-white  bg-blue-900  font-bold py-[1.8vmin] px-[2vmin]  text-[2.5vmin] justify-center items-center">
              <Link to={"addnewdoctor"} className=" relative z-[3] text-center">
                <PersonAddIcon className="profileIcons " />
                <span className="pl-1">Add New Doctor</span>
              </Link>
            </div>
          </span>
        </div>

        <section className="min-h-[24rem]   py-[1.8vmin] px-[2.3vmin] w-full lg:w-11/12 m-auto grid grid-cols-1   md:grid-cols-2 lg:grid-cols-3  gap-4 place-items-center drop-shadow-md overflow-x-hidden ">
          {doctors && doctors.length > 0 ? (
            doctors.map((doctor, index) => (
              <section
                className={` w-full min-h-[14rem] h-full  transition-all shadow-xl hover:shadow-inner bg-white   duration-500  rounded-md px-3 py-2  `}
                key={index}
              >
                <div className="flex justify-between items-center  py-2 px-2">
                  <h1 className="text-lg font-bold  drop-shadow-md rounded-[50%] bg-green-500 p-2 h-12 w-12 text-center hover:bg-blue-900 hover:text-white duration-500 cursor-pointer selection:text-white">
                    {doctors.length - index}
                  </h1>
                  <h1
                    className={`text-lg font-bold  drop-shadow-md rounded-[50%] bg-green-500 p-2 h-12 w-12 text-center hover:bg-blue-900 hover:text-white duration-500 cursor-pointer selection:text-white ${hideDeleteAdminButton}`}
                    onClick={() => {
                      deleteAdminHandler(doctor._id);
                    }}
                  >
                    <DeleteIcon />
                  </h1>
                </div>

                <section className=" flex flex-col  justify-center items-center space-x-6 space-y-6  pb-3">
                  <div className="">
                    <img
                      src={doctor?.avatar?.url || image}
                      alt="avatar "
                      className="w-44 h-44 rounded-full border-2 border-green-500 transition-all duration-[.5s] hover:scale-110 cursor-pointer object-cover"
                    />
                  </div>
                  <div>
                    <h1 className="drop-shadow-sm">
                      <span className="text-lg font-bold hover:text-green-500">
                        Name :{" "}
                      </span>{" "}
                      <span className="text-lg text-gray-400 font-semibold hover:text-gray-500">
                        {
                          editeNameHandler(doctor?.name) ||
                          "Please Refresh Page"}
                      </span>
                    </h1>
                    <h1 className="drop-shadow-sm">
                      <span className="text-lg font-bold hover:text-green-500">
                        Speciality :{" "}
                      </span>{" "}
                      <span className="text-lg text-gray-400 font-semibold hover:text-gray-500">
                        {doctor?.speciality || "Please Refresh Page"}
                      </span>
                    </h1>
                  </div>
                </section>

                <div className="grid grid-cols-1 sm:grid-cols-2 pb-3 place-items-center sm:place-items-stretch">
                  <div>
                    <h1
                      className="text-lg font-bold  drop-shadow-md rounded-sm bg-green-500 p-2 m-2 h-12 w-12 text-center hover:bg-blue-900 hover:text-white duration-500 cursor-pointer selection:text-white inline-block"
                      title="Edit Role"
                      onClick={() => {
                        editHandler(doctor?._id);
                      }}
                    >
                      <EditRounded />
                    </h1>
                    <h1
                      className="text-lg font-bold  drop-shadow-md rounded-sm bg-green-500 p-2 m-2 h-12 w-12 text-center hover:bg-blue-900 hover:text-white duration-500 cursor-pointer selection:text-white inline-block"
                      title="Edit Role"
                      onClick={() => {
                        viewDetalsHandler(doctor?._id);
                      }}
                    >
                      <RemoveRedEyeIcon />
                    </h1>
                  </div>

                  <h1
                    className={`font-bold h-full px-6 sm:h-auto  drop-shadow-md rounded-sm  flex items-center justify-center m-2 text-center hover:bg-blue-900 hover:text-white duration-500 cursor-pointer selection:text-white ${
                      doctor?.available === "YES"
                        ? "bg-green-300"
                        : "bg-red-300"
                    }`}
                  >
                    <span className="relative">
                      {doctor?.available === "YES" ? (
                        <VaccinesIcon />
                      ) : (
                        <>
                          <VaccinesIcon />
                          <CloseIcon className="-translate-x-full text-white absolute" />
                        </>
                      )}
                      {doctor?.available === "YES"
                        ? "Available"
                        : "Unavailable"}
                    </span>
                  </h1>
                </div>
              </section>
            ))
          ) : (
            <div className=" text-center text-2xl  col-span-3 font-semibold text-gray-400 w-full py-8 ">
              No Doctor Yet!
            </div>
          )}
        </section>
      </section>

      {/* Doctor Details View Dialog Box */}
      {openInfoCardData && (
        <section
          className={`h-screen w-full min-h-fit fixed top-0 duration-500    z-[1000] flex justify-center overflow-y-auto bg-[#00000036]`}
          ref={toggleRef}
        >
          <section
            className="p-4 space-y-3   w-full md:w-10/12
           lg:w-8/12 min-h-fit h-fit  bg-white rounded-md shadow-2xl "
          >
            <div className="  flex flex-col items-center hover:text-green-500  ">
              <h1 className="text-[3.5vmin] font-semibold drop-shadow-md  ">
                Doctor Details
              </h1>
              <div className="border-b-[4px] w-[10vmin] border-green-500 my-2 "></div>
            </div>

            <section className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-3 ">
              <h1 className="text-[3vmin] bg-gray-200 shadow-sm px-3 placeholder:font-normal  ld font-medium border-b-2 border-green-500 box-border border-opacity-0 hover:border-opacity-100 transition-all duration-[0.4s] py-2 w-full outline-none rounded-md  drop-shadow-md  border-2 truncate">
                <span>
                  Name <span className="text-gray-400">:</span>{" "}
                </span>{" "}
                <span>{editeNameHandler(openInfoCardData?.name)}</span>
              </h1>

              <h1 className="text-[3vmin] bg-gray-200 shadow-sm px-3 placeholder:font-normal  ld font-medium border-b-2 border-green-500 box-border border-opacity-0 hover:border-opacity-100 transition-all duration-[0.4s] py-2 w-full outline-none rounded-md  drop-shadow-md  border-2">
                <span>
                  Gender <span className="text-gray-400">:</span>{" "}
                </span>{" "}
                <span>{openInfoCardData?.gender}</span>
              </h1>

              <h1 className="text-[3vmin] bg-gray-200 shadow-sm px-3 placeholder:font-normal  ld font-medium border-b-2 border-green-500 box-border border-opacity-0 hover:border-opacity-100 transition-all duration-[0.4s] py-2 w-full outline-none rounded-md  drop-shadow-md  border-2">
                <span>
                  Available <span className="text-gray-400">:</span>{" "}
                </span>{" "}
                <span
                  className={`${statusCardColorClassRender(
                    openInfoCardData.available?.toLowerCase()
                  )}`}
                >
                  {openInfoCardData?.available}
                </span>
              </h1>
              <h1 className="text-[3vmin] bg-gray-200 shadow-sm px-3 placeholder:font-normal  ld font-medium border-b-2 border-green-500 box-border border-opacity-0 hover:border-opacity-100 transition-all duration-[0.4s] py-2 w-full outline-none rounded-md  drop-shadow-md  border-2 ">
                <span>
                  Speciality <span className="text-gray-400">:</span>{" "}
                </span>{" "}
                <span>{openInfoCardData?.speciality}</span>
              </h1>
            </section>

            <>
              {" "}
              {openInfoCardData?.description && (
                <>
                  <h1 className="text-[3vmin] bg-gray-200 shadow-sm px-3 placeholder:font-normal  ld font-medium border-b-2 border-green-500 box-border border-opacity-0 hover:border-opacity-100 transition-all duration-[0.4s] py-2 w-full outline-none rounded-md  drop-shadow-md  md:text-center border-2  overflow-hidden text-ellipsis">
                    <span>Description </span>{" "}
                    <p>{openInfoCardData?.description}</p>
                  </h1>
                </>
              )}
            </>

            <div className="my-4 drop-shadow-sm py-3 w-full  box-border">
              <div className=" inline relative hoverEffect text-white  bg-blue-900    py-[1.7vmin] rounded-md ">
                <button
                  type="submit"
                  className="text-[2.5vmin] font-bold relative z-[3] w-full "
                  onClick={closeHandler}
                >
                  Close
                </button>
              </div>
            </div>
          </section>
        </section>
      )}
    </>
  );
};

export default DoctorsSection;
