import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import { Link } from "react-router-dom";

const DashBoardAdminIcon = () => {
  return (
    <>
      <Link to="/admin/dashboard/info">
        <div className="fixed bg-blue-900  hover:scale-110  rounded-full p-[2vmin] top-[9rem]  right-8 cursor-pointer  shadow-2xl hover:shadow-inner z-[1000]  transition-all duration-[.7s] hover:text-blue-900 drop-shadow-2xl">
          <DashboardCustomizeIcon className="text-green-500" />
        </div>
      </Link>
    </>
  );
};

export default DashBoardAdminIcon;
