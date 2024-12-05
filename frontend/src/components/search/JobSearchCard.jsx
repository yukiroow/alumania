import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBuilding,
    faMapLocation,
    faMultiply
} from "@fortawesome/free-solid-svg-icons";

{/* @author Freskkie Encarnacion*/}

const JobSearchCard = () => {
    return (
    <>
      <div className="mt-4 mx-10 bg-white p-10 rounded-xl hover:shadow-md cursor-pointer">
        <div className="flex items-center gap-5">
          <h2 className="card-title text-secondary font-bold">Job Title</h2>
            <div className="relative flex justify-center items-center w-20 h-5 bg-accent rounded-full">
              <p className="absolute text-text text-xs font-semibold">Hybrid</p>
            </div>
          <div className="ml-auto relative group">
            <FontAwesomeIcon
              icon={faMultiply}
              className="h-5 w-5 text-primary"
              />
              <span className="absolute hidden group-hover:block -top-6 left-0 bg-gray-600 text-white text-xs rounded-md py-1 px-2">
              Remove
              </span>
          </div>
        </div>
        <div className="flex items-center space-x-2 font-semibold text-gray-700 mt-2">
          <FontAwesomeIcon icon={faBuilding} className="h-5 w-5 text-primary" />
            <p>Company Name</p>
        </div>
        <div className="flex items-center space-x-2 text-gray-700">
          <FontAwesomeIcon icon={faMapLocation} className="h-5 w-5" />
            <p>Company Address</p>
        </div>
          <p className="mt-4 ml-7 text-primary">Company description</p>
      </div>
    </>
    );
};


export default JobSearchCard;