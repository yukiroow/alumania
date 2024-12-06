import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";

{
  /* @author Freskkie Encarnacion*/
}

const ExperienceSearchCard = ({ experience }) => {
  // TODO: PROPS PROPS DRAG TO SCROLL
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  return (
    <>
      <div className="justify-self-center join-item w-full bg-white border p-4 space-y-2">
        <div className="flex mt-4 ml-4 mr-4 items-start space-x-5">
          <div className="avatar">
            <div className="w-10 h-10 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt="Profile"
              />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="flex items-center space-x-2 mt-1">
              <p className="font-medium">{experience.username}</p>
              <p className="font-light text-gray-500">16h</p>
            </div>
            <p className="mt-3">{experience.body}</p>
          </div>
        </div>
        {/* CAROUSEL */}
        <div className="carousel flex space-x-2 rounded-box h-64 max-w-full mx-20 scroll-smooth">
          <div className="carousel-item flex-shrink-0 min-w-[10%] h-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
              alt="Image 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="carousel-item flex-shrink-0 min-w-[10%] h-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
              alt="Image 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="carousel-item flex-shrink-0 min-w-[10%] h-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
              alt="Image 3"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="carousel-item flex-shrink-0 min-w-[10%] h-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
              alt="Image 4"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="carousel-item flex-shrink-0 min-w-[10%] h-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
              alt="Image 5"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="carousel-item flex-shrink-0 min-w-[10%] h-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
              alt="Image 5"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="carousel-item flex-shrink-0 min-w-[10%] h-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
              alt="Image 5"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        {/* ICONS */}
        <div className="flex justify-start items-center space-x-4 mt-4 mx-20">
          <div className="flex items-center space-x-2 mt-1">
            <FontAwesomeIcon
              icon={liked ? faHeartSolid : faHeartRegular}
              className={`text-xl cursor-pointer transition-all ${
                liked ? "text-red-500 hover:scale-95 hover:opacity-90" : "text-primary hover:scale-105 hover:opacity-90"
              }`}
              onClick={handleLikeClick}
            />
            <p className="text-sm text-gray-400">32</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperienceSearchCard;
