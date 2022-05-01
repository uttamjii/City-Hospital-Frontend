import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteUserAndAdmin,
  getAllAdmins,
  getAllUsers,
} from "../../../Actions/adminUsersActions";
import DeleteIcon from "@mui/icons-material/Delete";
import { EditRounded } from "@mui/icons-material";
import image from "../../../images/avatarPreview.png";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";

const UserSection = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const {
    users,
    message,
    error: asUserError,
  } = useSelector((state) => state.users);
  const { admins, error: asAdminError } = useSelector((state) => state.admins);

  const [hideDeleteAdminButton, setHideDeleteAdminButton] = useState("");
  const [hideDeleteUserButton, setHideDeleteUserButton] = useState("");

  const deleteAdminHandler = async (id) => {
    setHideDeleteAdminButton("hidden");
    await dispatch(deleteUserAndAdmin(id));
    await dispatch(getAllAdmins());
    setHideDeleteAdminButton("");
  };

  const deleteUserHandler = async (id) => {
    setHideDeleteUserButton("hidden");
    await dispatch(deleteUserAndAdmin(id));
    await dispatch(getAllUsers());
    setHideDeleteUserButton("");
  };

  const editRoleHandler = (id, role) => {
    let roleCap = role.slice(0,1).toUpperCase() + role.slice(1);
    navigate(`updaterole/${id}?role=${roleCap}`);
  };

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getAllAdmins());
  }, [dispatch]);

  useEffect(() => {
    if (message) {
      dispatch({ type: "addMessageWhenLogin", payload: message });
    }
    if (asAdminError) {
      dispatch({ type: "addErrors", payload: asAdminError });
    }
    if (asUserError) {
      dispatch({ type: "addErrors", payload: asUserError });
    }
  }, [dispatch, message, asAdminError, asUserError]);

  return (
    <>
      <section className="min-h-fit pb-16 ">
        <div className=" p-14   hover:text-green-500  ">
          <div className="border-[2px] w-[10vmin] border-green-500 my-2"></div>
          <h1 className="text-[5vmin] font-semibold text-left drop-shadow-md ">
            Admins
          </h1>
        </div>

        <section className="min-h-[24rem]   py-[1.8vmin] px-[2.3vmin] w-full lg:w-11/12 m-auto grid grid-cols-1   md:grid-cols-2 lg:grid-cols-3  gap-4 place-items-center drop-shadow-md max-h-[50rem] overflow-y-auto overflow-x-hidden  shadow-lg">
          {admins && admins.length > 0 ? (
            admins.map((admin, index) => (
              <section
                className={` w-full min-h-[14rem] h-full  transition-all shadow-xl hover:shadow-inner bg-white   duration-500  rounded-md px-3 py-2  `}
                key={index}
              >
                <div className="flex justify-between items-center  py-2 px-2">
                  <h1 className="text-lg font-bold  drop-shadow-md rounded-[50%] bg-green-500 p-2 h-12 w-12 text-center hover:bg-blue-900 hover:text-white duration-500 cursor-pointer selection:text-white">
                    {admins.length - index}
                  </h1>
                  <h1
                    className={`text-lg font-bold  drop-shadow-md rounded-[50%] bg-green-500 p-2 h-12 w-12 text-center hover:bg-blue-900 hover:text-white duration-500 cursor-pointer selection:text-white ${hideDeleteAdminButton}`}
                    onClick={() => {
                      deleteAdminHandler(admin._id);
                    }}
                  >
                    <DeleteIcon />
                  </h1>
                </div>

                <section className=" flex flex-col  justify-center items-center space-x-6 space-y-6  pb-3">
                  <div className="">
                    <img
                      src={admin?.avatar?.url || image}
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
                        {admin?.name || "Please Refresh Page"}
                      </span>
                    </h1>
                    <h1 className="drop-shadow-sm">
                      <span className="text-lg font-bold hover:text-green-500">
                        Email :{" "}
                      </span>{" "}
                      <span className="text-lg text-gray-400 font-semibold hover:text-gray-500">
                        {admin?.email || "Please Refresh Page"}
                      </span>
                    </h1>
                  </div>
                </section>

                <div className="grid grid-cols-2">
                  <h1
                    className="text-lg font-bold  drop-shadow-md rounded-sm bg-green-500 p-2 m-2 h-12 w-12 text-center hover:bg-blue-900 hover:text-white duration-500 cursor-pointer selection:text-white"
                    title="Edit Role"
                    onClick={() => {
                      editRoleHandler(admin?._id, admin.role);
                    }}
                  >
                    <EditRounded />
                  </h1>

                  <h1 className=" font-bold  drop-shadow-md rounded-sm bg-green-300 flex items-center justify-center m-2 text-center hover:bg-blue-900 hover:text-white duration-500 cursor-pointer selection:text-white">
                    <span>
                      <AdminPanelSettingsIcon />
                      Admin
                    </span>
                  </h1>
                </div>
              </section>
            ))
          ) : (
            <div className=" text-center text-2xl  col-span-3 font-semibold text-gray-400 w-full py-8 ">
              No Admin Yet!
            </div>
          )}
        </section>
      </section>

      <section className="min-h-fit pb-16 ">
        <div className=" p-14   hover:text-green-500   ">
          <div className="border-[2px] w-[10vmin] border-green-500 my-2"></div>
          <h1 className="text-[5vmin] font-semibold text-left drop-shadow-md ">
            Users
          </h1>
        </div>

        <section className="min-h-[24rem]   py-[1.8vmin] px-[2.3vmin] w-full lg:w-11/12 m-auto grid grid-cols-1   md:grid-cols-2 lg:grid-cols-3  gap-4 place-items-center drop-shadow-md max-h-[50rem] overflow-y-auto overflow-x-hidden shadow-lg">
          {users && users.length > 0 ? (
            users.map((user, index) => (
              <section
                className={` w-full min-h-[14rem] h-full  transition-all shadow-xl hover:shadow-inner bg-white   duration-500  rounded-md px-3 py-2  `}
                key={index}
              >
                <div className="flex justify-between items-center  py-2 px-2">
                  <h1 className="text-lg font-bold  drop-shadow-md rounded-[50%] bg-green-500 p-2 h-12 w-12 text-center hover:bg-blue-900 hover:text-white duration-500 cursor-pointer selection:text-white ">
                    {users.length - index}
                  </h1>
                  <h1
                    className={`text-lg font-bold  drop-shadow-md rounded-[50%] bg-green-500 p-2 h-12 w-12 text-center hover:bg-blue-900 hover:text-white duration-500 cursor-pointer selection:text-white ${hideDeleteUserButton}`}
                    onClick={() => {
                      deleteUserHandler(user._id);
                    }}
                  >
                    <DeleteIcon />
                  </h1>
                </div>

                <section className=" flex flex-col  justify-center items-center space-x-6 space-y-6  pb-3">
                  <div className="">
                    <img
                      src={user?.avatar?.url || image}
                      alt="avatar "
                      className="w-44 h-44 rounded-full border-2 border-green-500 transition-all duration-[.5s] hover:scale-110 cursor-pointer object-cover"
                    />
                  </div>
                  <div>
                    <h1 className="drop-shadow-sm ">
                      <span className="text-lg font-bold hover:text-green-500">
                        Name :{" "}
                      </span>{" "}
                      <span className="text-lg text-gray-400 font-semibold hover:text-gray-500">
                        {user?.name || "Please Refresh Page"}
                      </span>
                    </h1>
                    <h1 className="drop-shadow-sm">
                      <span className="text-lg font-bold hover:text-green-500">
                        Email :{" "}
                      </span>{" "}
                      <span className="text-lg text-gray-400 font-semibold hover:text-gray-500 ">
                        {user?.email || "Please Refresh Page"}
                      </span>
                    </h1>
                  </div>
                </section>

                <div className="grid grid-cols-2">
                  <h1
                    className="text-lg font-bold  drop-shadow-md rounded-sm bg-green-500 p-2 m-2 h-12 w-12 text-center hover:bg-blue-900 hover:text-white duration-500 cursor-pointer selection:text-white"
                    title="Edit Role"
                    onClick={() => {
                      editRoleHandler(user?._id, user.role);
                    }}
                  >
                    <EditRounded />
                  </h1>

                  <h1 className=" font-bold  drop-shadow-md rounded-sm bg-red-300 flex items-center justify-center m-2 text-center hover:bg-blue-900 hover:text-white duration-500 cursor-pointer selection:text-white">
                    <span>
                      {" "}
                      <AccountCircleIcon /> User
                    </span>
                  </h1>
                </div>
              </section>
            ))
          ) : (
            <div className=" text-center text-2xl  col-span-3 font-semibold text-gray-400 w-full py-8 ">
              No User Yet!
            </div>
          )}
        </section>
      </section>
    </>
  );
};

export default UserSection;
