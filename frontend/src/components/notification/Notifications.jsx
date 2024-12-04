import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faHeart,
  faComment
} from "@fortawesome/free-solid-svg-icons";

{/* @author Freskkie Encarnacion*/}

const Notifications = () => {
  return (
    <>
    <div className="flex justify-center items-start min-h-screen bg-gray-100 p-6">
      {/* Likes (Nag aauto adjust yung bg depende sa number of content) */}
      <div className="w-2/4 bg-white rounded-2xl shadow-md p-4 flex flex-col space-y-7">
        {/* 1st Like */}
        <div className="flex mt-4 ml-4 items-start space-x-5">
          <div className="avatar">
            <div className="w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt="Profile"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <p className="font-medium">name</p>
              <p className="font-light text-gray-500">16h</p>
            </div>
            <div className="flex items-center space-x-2 mt-1">
              <FontAwesomeIcon icon={faHeart} className="h-4 w-4 text-red-600" />
              <p className="text-sm text-primary">Liked your post</p>
            </div>
          </div>
        </div>
        <p className="ml-20 mt-6 text-primary">THE POST</p>
        <hr className="border-t border-gray-400" />

        {/* 2nd Like */}
        <div className="flex mt-4 ml-4 items-start space-x-5">
          <div className="avatar">
            <div className="w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt="Profile"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <p className="font-medium">name</p>
              <p className="font-light text-gray-500">16h</p>
            </div>
            <div className="flex items-center space-x-2 mt-1">
              <FontAwesomeIcon icon={faHeart} className="h-4 w-4 text-red-600" />
              <p className="text-sm text-primary">Liked your post</p>
            </div>
          </div>
        </div>
        <p className="ml-20 mt-6 text-primary">THE POST</p>
        <hr className="border-t border-gray-400 my-3" />
      </div>
    </div>

    <div className="flex justify-center items-start min-h-screen bg-gray-100 p-6">
      {/* Comments (Nag aauto adjust yung bg depende sa number of content) */}
      <div className="w-2/4 bg-white rounded-2xl shadow-md p-4 flex flex-col space-y-7">
        {/* 1st Comment */}
        <div className="flex mt-4 ml-4 items-start space-x-5">
          <div className="avatar">
            <div className="w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt="Profile"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <p className="font-medium">name</p>
              <p className="font-light text-gray-500">16h</p>
            </div>
            <div className="flex items-center space-x-2 mt-1">
              <FontAwesomeIcon icon={faComment} className="h-4 w-4 text-primary" />
              <p className="text-sm text-primary">Commented on your post</p>
            </div>
          </div>
        </div>
        <p className="ml-20 mt-6 text-primary">THE POST</p>
        <hr className="border-t border-gray-400" />

        {/* 2nd Comment */}
        <div className="flex mt-4 ml-4 items-start space-x-5">
          <div className="avatar">
            <div className="w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt="Profile"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <p className="font-medium">name</p>
              <p className="font-light text-gray-500">16h</p>
            </div>
            <div className="flex items-center space-x-2 mt-1">
              <FontAwesomeIcon icon={faComment} className="h-4 w-4 text-primary" />
              <p className="text-sm text-primary">Commented on your post</p>
            </div>
          </div>
        </div>
        <p className="ml-20 mt-6 text-primary">THE POST</p>
        <hr className="border-t border-gray-400 my-3" />
      </div>
    </div>
    </>
  );
};

export default Notifications;
