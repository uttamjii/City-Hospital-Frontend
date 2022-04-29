import DangerousIcon from "@mui/icons-material/Dangerous";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import ClearIcon from "@mui/icons-material/Clear";
import { useRef } from "react";
import { useSelector } from "react-redux";

const ErrorCard = () => {
  const errorCard = useRef(null);
  const successCard = useRef(null);

  const { error, user } = useSelector((state) => state.user);


  return (
    <>
      {error && (
        <section className="fixed bottom-4  w-screen flex  justify-center z-50 max-[100vw]">
          <div
            className=" text-center p-2 sm:py-4 sm:px-4 drop-shadow-lg duration-500 rounded-lg bg-gray-200 hover:-translate-y-2 hover:shadow-inner cursor-pointer truncate "
            onClick={() => {
              errorCard.current.classList.toggle("hidden");
            }}
            ref={errorCard}
          >
            <h1 className="text-[3min] leadin-[3min] font-semibold sm:space-x-3 drop-shadow-lg">
              <span>
                <DangerousIcon className="text-red-500" />
              </span>
              <span className="truncate">{error}</span>
              <span>
                <ClearIcon className="text-gray-700 hover:text-black" />
              </span>
            </h1>
          </div>
        </section>
      )}
      {user?.message && (
        <section className="fixed bottom-4  w-screen flex  justify-center z-50 max-[100vw]">
          <div
            className=" text-center p-2 sm:py-4 sm:px-4 drop-shadow-lg duration-500 rounded-lg bg-gray-200 hover:-translate-y-2 hover:shadow-inner cursor-pointer truncate"
            onClick={() => {
                successCard.current.classList.toggle("hidden");
            }}
            ref={successCard}
          >
            <h1 className="text-[3min] leadin-[3min] font-semibold sm:space-x-3 drop-shadow-lg">
              <span>
                <BeenhereIcon className="text-green-500" />
              </span>
              <span className="truncate">{user?.message}</span>
              <span>
                <ClearIcon className="text-gray-700 hover:text-black" />
              </span>
            </h1>
          </div>
        </section>
      )}

    </>
  );
};

export default ErrorCard;
