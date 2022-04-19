import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { useState } from "react";

const ScrollToTop = () => {
    const [showScroll, setShowScroll] = useState(false);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            setShowScroll(true);
        } else {
            setShowScroll(false);
        }
    })

    return (
        <>
            <div
                className={`fixed   bg-slate-200  rounded-full p-[2vmin] bottom-12 md:bottom-8 right-8 cursor-pointer  shadow-2xl hover:shadow-inner   transition-all duration-[1s] ${showScroll ? "opacity-100" : "opacity-0"
                    }`}
                onClick={() => {
                    window.scrollTo(0, 0);
                }}
            >
                <KeyboardDoubleArrowUpIcon className="scrollToTopIcon" />
            </div>
        </>
    );
};

export default ScrollToTop;
