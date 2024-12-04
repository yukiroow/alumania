import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { UisArrowUpRight } from "@iconscout/react-unicons-solid";

{/* @author Jude Angelo Ilumin*/}

const NewPostCard = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-[700px] p-4 bg-white rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium text-center flex-grow">
            New post
          </h2>
          <button className="text-gray-500 cursor-pointer">Cancel</button>
        </div>

        <hr className="w-[calc(100%+32px)] h-[5px] border-t border-gray-400 my-3 -ml-4 -mr-4" />

        <div className="mt-4 flex items-center space-x-3">
          <div className="avatar">
            <div className="w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt="Profile"
              />
            </div>
          </div>
          <span className="font-medium">j.aromen</span>
        </div>

        <textarea
          className="w-full p-1 pt-1 pl-10 ml-4 border border-transparent rounded-lg focus:outline-none focus:ring-0 resize-none"
          rows="6"
          placeholder="What's new?"
        ></textarea>

        <div className="flex items-center justify-between mt-4">
          <div className="flex justify-end space-x-2">
            <button className="btn btn-circle btn-outline">
              <FontAwesomeIcon icon={faPlus} className="h-5 w-5" />
            </button>

            <button className="btn btn-circle btn-outline hover:bg-black hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M2,6.5 C2,5.11928813 3.11928813,4 4.5,4 L19.5,4 C20.8807119,4 22,5.11928813 22,6.5 L22,17.5 C22,18.8807119 20.8807119,20 19.5,20 L4.5,20 C3.11928813,20 2,18.8807119 2,17.5 L2,6.5 Z M3,6.5 L3,17.5 C3,18.3284271 3.67157288,19 4.5,19 L19.5,19 C20.3284271,19 21,18.3284271 21,17.5 L21,6.5 C21,5.67157288 20.3284271,5 19.5,5 L4.5,5 C3.67157288,5 3,5.67157288 3,6.5 Z M16,7 L18,7 C18.5522847,7 19,7.44771525 19,8 L19,10 C19,10.5522847 18.5522847,11 18,11 L16,11 C15.4477153,11 15,10.5522847 15,10 L15,8 C15,7.44771525 15.4477153,7 16,7 Z M16,8 L16,10 L18,10 L18,8 L16,8 Z M2.85355339,15.8535534 C2.65829124,16.0488155 2.34170876,16.0488155 2.14644661,15.8535534 C1.95118446,15.6582912 1.95118446,15.3417088 2.14644661,15.1464466 L7.14644661,10.1464466 C7.34170876,9.95118446 7.65829124,9.95118446 7.85355339,10.1464466 L13.5,15.7928932 L16.1464466,13.1464466 C16.3417088,12.9511845 16.6582912,12.9511845 16.8535534,13.1464466 L21.3535534,17.6464466 C21.5488155,17.8417088 21.5488155,18.1582912 21.3535534,18.3535534 C21.1582912,18.5488155 20.8417088,18.5488155 20.6464466,18.3535534 L16.5,14.2071068 L13.8535534,16.8535534 C13.6582912,17.0488155 13.3417088,17.0488155 13.1464466,16.8535534 L7.5,11.2071068 L2.85355339,15.8535534 Z"
                ></path>
              </svg>
            </button>
          </div>

          <button
            className="flex overflow-hidden  
              w-[4rem] hover:w-[5.7rem] 
              items-center gap-1
              cursor-pointer 
              bg-[#0059CD] 
              text-white px-4 py-2 rounded-md 
              transition-all ease-in-out hover:scale 
              hover:scale-105 font-[revert] active:scale-100 shadow-lg"
          >
            Post
            <UisArrowUpRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewPostCard;
