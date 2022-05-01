import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteContactMessage,
  getAllContactMessages,
} from "../../../Actions/contactMessageAction";
import DeleteIcon from "@mui/icons-material/Delete";

const ContactMessageSection = () => {
  const dispatch = useDispatch();

  const [hideDeleteButton, setHideDeleteButton] = useState("");

  const { messages, message } = useSelector((state) => state.contactMessages);

  const deleteMessageHandler = async (id) => {
    setHideDeleteButton("hidden");
    await dispatch(deleteContactMessage(id));
    await dispatch(getAllContactMessages());
    setHideDeleteButton("");
  };

  useEffect(() => {
    dispatch(getAllContactMessages());
  }, [dispatch]);
  useEffect(() => {
    if (message) {
      dispatch({ type: "addMessageWhenLogin", payload: message });
    }
  }, [dispatch, message]);

  return (
    <>
      <section className="min-h-fit pb-16  ">
        <div className=" p-14   hover:text-green-500  ">
          <div className="border-[2px] w-[10vmin] border-green-500 my-2"></div>
          <h1 className="text-[5vmin] font-semibold text-left drop-shadow-md ">
            Messages
          </h1>
        </div>

        <section className="min-h-fit  py-[1.8vmin] px-[2.3vmin] w-11/12 m-auto grid grid-cols-1   gap-6 place-items-center drop-shadow-md ">
          {messages && messages.length > 0 ? (
            messages.map((message, index) => (
              <section
                className={`border-2 w-full min-h-[14rem] h-full  transition-all shadow-xl hover:shadow-inner bg-white   duration-500  rounded-md px-3 py-2  `}
                key={index}
              >
                <div className="flex justify-between items-center  py-2 px-2">
                  <h1 className="text-lg font-bold  drop-shadow-md rounded-[50%] bg-green-500 p-2 h-12 w-12 text-center hover:bg-blue-900 hover:text-white duration-500 cursor-pointer selection:text-white">
                    {messages.length - index}
                  </h1>
                  <h1
                    className={`text-lg font-bold  drop-shadow-md rounded-[50%] bg-green-500 p-2 h-12 w-12 text-center hover:bg-blue-900 hover:text-white duration-500 cursor-pointer selection:text-white ${hideDeleteButton}`}
                    onClick={() => {
                      deleteMessageHandler(message._id);
                    }}
                  >
                    <DeleteIcon />
                  </h1>
                </div>

                <section className="space-y-2">
                  <h1 className="text-[3vmin] bg-gray-200 shadow-sm px-3 placeholder:font-normal  ld font-medium border-b-2 border-green-500 box-border border-opacity-0 hover:border-opacity-100 transition-all duration-[0.4s] py-2 w-full outline-none rounded-md  drop-shadow-md  border-2">
                    <span>
                      Name <span className="text-gray-400">:</span>
                    </span>{" "}
                    <span>{message?.name}</span>
                  </h1>
                  <h1 className="text-[3vmin] bg-gray-200 shadow-sm px-3 placeholder:font-normal  ld font-medium border-b-2 border-green-500 box-border border-opacity-0 hover:border-opacity-100 transition-all duration-[0.4s] py-2 w-full outline-none rounded-md  drop-shadow-md  border-2">
                    <span>
                      Email <span className="text-gray-400">:</span>
                    </span>{" "}
                    <span>{message?.email}</span>
                  </h1>
                  <h1 className="text-[3vmin] bg-gray-200 shadow-sm px-3 placeholder:font-normal  ld font-medium border-b-2 border-green-500 box-border border-opacity-0 hover:border-opacity-100 transition-all duration-[0.4s] py-2 w-full outline-none rounded-md  drop-shadow-md  border-2">
                    <span>
                      Subject <span className="text-gray-400">:</span>
                    </span>{" "}
                    <span>{message?.subject}</span>
                  </h1>
                  <h1 className="text-[3vmin] bg-gray-200 shadow-sm px-3 placeholder:font-normal  ld font-medium border-b-2 border-green-500 box-border border-opacity-0 hover:border-opacity-100 transition-all duration-[0.4s] py-2 w-full outline-none rounded-md  drop-shadow-md md:text-center border-2  overflow-hidden text-ellipsis">
                    <span> Message </span> <p>{message?.message}</p>
                  </h1>
                </section>
              </section>
            ))
          ) : (
            <div className=" text-center text-2xl h-96 font-semibold text-gray-400 w-full py-8 translate-y-12">
              No Message Yet!
            </div>
          )}
        </section>
      </section>
    </>
  );
};

export default ContactMessageSection;
