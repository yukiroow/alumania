import React from "react";

{/* @author Freskkie Encarnacion*/}

const UserSearchCard = ({user}) => {
  return (
    <>
      <div className="justify-self-center mt-10 w-2/4 bg-white rounded-xl shadow-md p-4 space-y-7">
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
              <p className="font-medium">Username</p>
            </div>
            <div className="flex items-center space-x-2 mt-1">
              <p className="text-sm text-primary">Full Name</p>
            </div>
          </div>
        </div>
          <hr className="border-t border-gray-400" />
      </div>
    </>
  )
}

export default UserSearchCard;