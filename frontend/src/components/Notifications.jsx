import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faHeart,
  faComment
} from "@fortawesome/free-solid-svg-icons";

const Notifications = () => {
  return (
    <>
    <div className="flex justify-center items-start min-h-screen bg-gray-100 p-6">
      {/* Likes (Nag aauto adjust yung bg depende sa number of content)*/}
      <div className="w-2/4 bg-white rounded-2xl shadow-md p-4 flex flex-col space-y-4">
        {/* 1st Like */}
        <div className="flex mt-4 ml-4 items-center space-x-5">
          <div className="avatar">
            <div className="w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt="Profile"
              />
            </div>
          </div>
          <p className="font-medium">j.aromen</p>
          <p className="font-light text-gray-500">16h</p>
        </div>
        <div className="flex ml-20 space-x-2 items-center">
          <FontAwesomeIcon icon={faHeart} className="h-4 w-4 text-red-600" />
          <p className="text-sm">Liked your post</p>
        </div>
        <p className="ml-20 mt-6">YUNG POST</p>
        
        <hr className="border-t border-gray-400 my-3" />
        
        {/* 2nd Like */}
        <div className="flex mt-4 ml-4 items-center space-x-5">
          <div className="avatar">
            <div className="w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt="Profile"
              />
            </div>
          </div>
          <p className="font-medium">j.aromen</p>
          <p className="font-light text-gray-500">16h</p>
        </div>
        <div className="flex ml-20 space-x-2 items-center">
          <FontAwesomeIcon icon={faHeart} className="h-4 w-4 text-red-600" />
          <p className="text-sm">Liked your post</p>
        </div>
        <p className="ml-20 mt-6">YUNG POST</p>
      </div>
    </div>

    <div className="flex justify-center items-start min-h-screen bg-gray-100 p-6">
      {/* Comment (Nag aauto adjust yung bg depende sa number of content)*/}
      <div className="w-2/4 bg-white rounded-2xl shadow-md p-4 flex flex-col space-y-4">
        {/* 1st Comment */}
        <div className="flex mt-4 ml-4 items-center space-x-5">
          <div className="avatar">
            <div className="w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt="Profile"
              />
            </div>
          </div>
          <p className="font-medium">j.aromen</p>
          <p className="font-light text-gray-500">16h</p>
        </div>
        <div className="flex ml-20 space-x-2 items-center">
          <FontAwesomeIcon icon={faComment} className="h-4 w-4 text-primary" />
          <p className="text-sm">Commented on your post</p>
        </div>
        <p className="ml-20 mt-6">YUNG COMMENT</p>
        
        <hr className="border-t border-gray-400 my-3" />
        
        {/* 2nd Comment */}
        <div className="flex mt-4 ml-4 items-center space-x-5">
          <div className="avatar">
            <div className="w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt="Profile"
              />
            </div>
          </div>
          <p className="font-medium">j.aromen</p>
          <p className="font-light text-gray-500">16h</p>
        </div>
        <div className="flex ml-20 space-x-2 items-center">
          <FontAwesomeIcon icon={faComment} className="h-4 w-4 text-primary" />
          <p className="text-sm">Commented on your post</p>
        </div>
        <p className="ml-20 mt-6">YUNG COMMENT</p>
      </div>
    </div>
    </>
  );
};

export default Notifications;
