import React from 'react'
import WhichPage from '../../Components/whichPageComponent/WhichPage'
import { Link } from 'react-router-dom'
import image from "../../images/doctor1.jpg"
import SettingsIcon from '@mui/icons-material/Settings';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';

const Profile = () => {
    return (
        <>
            <WhichPage whichPage="Profile" />

            <section className="min-h-fit pb-14 w-full px-4 ">
                <div className=" py-14 ml-8 sm:ml-[5.4rem]  hover:text-green-500 ">
                    <div className="border-[2px] w-[10vmin] border-green-500 my-2"></div>
                    <h1 className="text-[5vmin] font-semibold text-left drop-shadow-md ">
                        Profile
                    </h1>
                </div>
                <div className='space-x-4 text-right pb-4  w-full'>
                    <span><div className=" inline relative hoverEffect text-white  bg-blue-900  font-bold py-[1.8vmin] px-[2vmin]  text-[2.5vmin] justify-center items-center">
                        <Link to={"/profile/editprofile"} className=" relative z-[3] text-center">
                            <SettingsIcon className="profileIcons" /> Edit Profile
                        </Link>
                    </div></span>
                    <span><div className=" inline relative hoverEffect text-white  bg-blue-900  font-bold py-[1.8vmin] px-[2vmin]  text-[2.5vmin]  justify-center items-center">
                        <Link to={"/profile/changepassword"} className=" relative z-[3]">
                            <ChangeCircleIcon className="profileIcons" />    Change Password
                        </Link>
                    </div></span>
                </div>

                <section className=' flex flex-col sm:flex-row justify-center items-center space-x-6 space-y-6 sm:px-4  py-4' >
                    <div className="">
                        <img src={image} alt="avatar " className="w-44 h-44 rounded-full border-2 border-green-500 transition-all duration-[.5s] hover:scale-110 cursor-pointer object-cover" />
                    </div>
                    <div>
                        <h1 className="drop-shadow-sm"><span className="text-lg font-bold hover:text-green-500">Name : </span> <span className="text-lg text-gray-400 font-semibold hover:text-gray-500">John Doe</span></h1>
                        <h1 className="drop-shadow-sm"><span className="text-lg font-bold hover:text-green-500">Email : </span> <span className="text-lg text-gray-400 font-semibold hover:text-gray-500">abc@example.com</span></h1>
                    </div>

                </section>


                <section className=" min-h-[30rem]">
                    <div className=" py-14 ml-8 sm:ml-[5.4rem]  hover:text-green-500 ">
                        <div className="border-[2px] w-[10vmin] border-green-500 my-2"></div>
                        <h1 className="text-[5vmin] font-semibold text-left drop-shadow-md ">
                            Appointments History
                        </h1>
                    </div>


                    <div className=' text-center text-2xl font-semibold text-gray-400 w-full py-8 translate-y-12' >
                        No History Yet!
                    </div>

                </section>

            </section>
        </>
    )
}

export default Profile