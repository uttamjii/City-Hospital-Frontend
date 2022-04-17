import React from "react";
import WhichPage from "../../Components/whichPageComponent/WhichPage";
import Services from "../../Components/ServiceSection/ServiceSection";
import cardImage1 from "../../images/cardImage1.jpg";
import cardImage2 from "../../images/cardImage2.jpg";
import cardImage3 from "../../images/cardImage3.jpg";

const Service = () => {
  const cardInfo = [
    {
      id: 1,
      title: "We help you ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      image: cardImage1,
    },
    {
      id: 1,
      title: "Medicine for you",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      image: cardImage2,
    },
    {
      id: 1,
      title: "Amazing technology",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      image: cardImage3,
    },
  ];

  return (
    <>
      <section>
        <WhichPage whichPage="Services" />

        <Services />

        {/* Some desc about our medicine technology  */}

        <section className="py-12 px-4 min-h-fit flex justify-center items-center bg-blue-900 mt-12">
          <section className="w-11/12 min-h-fit lg:h-screen grid grid-cols-1 lg:grid-cols-3 place-items-center gap-6">
            {cardInfo.map((card) => (
              <div
                key={card.id}
                className=" p-4 w-full  bg-white transition-all duration-[.4s] hover:-translate-y-2 hover:shadow-lg rounded-sm shadow-lg"
              >
                <img
                  className="w-full max-h-[50%] object-cover"
                  src={card.image}
                  alt=""
                />

                <div className="py-8  px-4border-2 border-blue-600">
                  <div className="border-[2px] w-[10vmin] border-green-500 my-4 "></div>
                  <h1 className="text-[5vmin] font-semibold text-left drop-shadow-md text-black hover:text-green-500 transition-all">
                    {card.title}
                  </h1>
                  <p className="py-4 text-gray-400 font-medium text-[2.5vmin]">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </section>
        </section>
      </section>
    </>
  );
};

export default Service;
