import WhichPage from "../../Components/whichPageComponent/WhichPage";
import React, { useState ,useRef,useEffect } from "react";
import { useNavigate } from "react-router-dom";

import avatarPreviewImage from "../../images/avatarPreview.png";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../Actions/userActions";

const EditProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const { user ,loading } = useSelector((state) => state.user);
  
  const buttonRef = useRef();
  const [buttonText, setButtonText] = useState("Update Profile");
  

  const [avatarPreview, setAvatarPreview] = useState(
    user.avatar?.url || avatarPreviewImage
  );
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);


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

  const formSubmitHandler = (e) => {
    e.preventDefault();

    buttonRef.current.disabled = true;
    setButtonText("Please Wait...");

    dispatch(updateProfile(name, email, avatar));
  };

  useEffect(() => {
  
    if (loading === false) {
      buttonRef.current.disabled = false;
      setButtonText("Update Profile");
    }
  }, [ loading]);


  return (
    <>
      <WhichPage whichPage="Edit Profile" />

      {/* Edit Profile Section */}

      <section className="min-h-fit pb-16 px-4 ">
        <div className=" py-14 ml-8 sm:ml-[5.4rem]  hover:text-green-500 ">
          <div className="border-[2px] w-[10vmin] border-green-500 my-2"></div>
          <h1 className="text-[5vmin] font-semibold text-left drop-shadow-md ">
            Edit Profile{" "}
            <span className="text-[3vmin] text-gray-400 font-bold hover:text-blue-900">
              OR
            </span>{" "}
            Update Profile
          </h1>
        </div>

        {/* Login Section */}

        <section className="shadow-md py-8 sm:w-10/12 md:w-8/12 lg:w-7/12 m-auto  p-4 space-y-4">
          <form onSubmit={formSubmitHandler} className=" space-y-4">
            <input
              type="text"
              className="bg-gray-200 shadow-sm px-3 placeholder:font-normal  ld font-medium border-b-2 border-green-500 box-border border-opacity-0 hover:border-opacity-100 transition-all duration-[0.4s] py-2 w-full outline-none rounded-md"
              placeholder="Name"
              name="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              className="bg-gray-200 shadow-sm px-3 placeholder:font-normal  ld font-medium border-b-2 border-green-500 box-border border-opacity-0 hover:border-opacity-100 transition-all duration-[0.4s] py-2 w-full outline-none rounded-md"
              placeholder="Email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="flex flex-col items-center space-y-3">
              <div className="">
                <img
                  src={avatarPreview}
                  alt="avatar "
                  className="w-16 h-16 rounded-full border-2 border-green-500 transition-all duration-[.5s] hover:scale-125 cursor-pointer"
                />
              </div>
              <input
                type="file"
                className="file:bg-gray-200 file:shadow-sm file:px-3 placeholder:font-normal  ld font-medium border-b-2 border-green-500 box-border border-opacity-0 hover:border-opacity-100 transition-all duration-[0.4s] file:py-2 outline-none w-full rounded-md file:w-full file:border-none file:outline-none"
                accept="image/*"
                onChange={handleChange}
                name="avatar"
              />
            </div>

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

export default EditProfile;
