import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faHeart,
  faComment,
  faMultiply
} from "@fortawesome/free-solid-svg-icons";

{/* @author Freskkie Encarnacion*/}

const ExperienceSearchCard = ({experience}) => {
  useEffect(() => {
    const carousel = document.querySelector(".carousel-container");
    const handleWheel = (event) => {
      if (event.deltaY !== 0) {
        if (event.deltaY > 0) {
          carousel.scrollLeft += 200; 
        } else {
          carousel.scrollLeft -= 200; 
        }
      }
    };
    carousel.addEventListener("wheel", handleWheel);
    return () => {
      carousel.removeEventListener("wheel", handleWheel);
    };
  }, []);
  
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked); 
  };

  return (
    <>
    <div className="justify-self-center mt-10 w-2/4 bg-white rounded-xl shadow-md p-4 space-y-2 overflow-hidden">
      <div className="flex mt-4 ml-4 mr-4 items-start space-x-5">
        <div className="avatar">
          <div className="w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              alt="Profile"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center space-x-2 mt-3">
            <p className="font-medium">Username</p>
            <p className="font-light text-gray-500">16h</p>
          </div>
          <p className="mt-10">THE CAPTION</p>
        </div>
      </div>
      {/* CAROUSEL */}
      <div className="carousel-container overflow-x-auto flex space-x-2 rounded-box h-64 max-w-full mx-20 scroll-smooth">
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
            icon={faHeart} 
            className={`cursor-pointer h-4 w-4 ${liked ? 'text-red-600' : 'text-primary'}`} 
            onClick={handleLikeClick} 
          />
          <p className="text-sm text-primary">Likes</p>
        </div>
        <div className="flex items-center space-x-2 mt-1">
          <FontAwesomeIcon icon={faComment} className="cursor-pointer h-4 w-4 text-primary" />
          <p className="text-sm text-primary">Comments</p>
        </div>
      </div>
        <hr className="border-t border-gray-400" />
    </div>


    <div className="justify-self-center mt-10 w-2/4 bg-white rounded-xl shadow-md p-4 space-y-2 overflow-hidden">
      <div className="flex mt-4 ml-4 mr-4 items-start space-x-5">
        <div className="avatar">
          <div className="w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              alt="Profile"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center space-x-2 mt-3">
            <p className="font-medium">Username</p>
            <p className="font-light text-gray-500">16h</p>
          </div>
          <p className="mt-10">THE CAPTION</p>
        </div>
      </div>
      {/* ICONS */}
      <div className="flex justify-start items-center space-x-4 mt-4 mx-20">
        <div className="flex items-center space-x-2 mt-1">
        <FontAwesomeIcon 
            icon={faHeart} 
            className={`cursor-pointer h-4 w-4 ${liked ? 'text-red-600' : 'text-primary'}`} 
            onClick={handleLikeClick} 
          />
          <p className="text-sm text-primary">Likes</p>
        </div>
        <div className="flex items-center space-x-2 mt-1">
          <FontAwesomeIcon icon={faComment} className="cursor-pointer h-4 w-4 text-primary" />
          <p className="text-sm text-primary">Comments</p>
        </div>
      </div>
      <hr className="border-t border-gray-400" />
    </div>
    </>
  );
};

export default ExperienceSearchCard;