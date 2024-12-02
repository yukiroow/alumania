import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBuilding,
    faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

{/* @author Freskkie Encarnacion*/}

const OpportunitiesCard = () => {
    const [activeCard, setActiveCard] = useState(null);

    const handleCardClick = (index) => {
        setActiveCard(index);
    };

    return (
        <div className="flex flex-col ml-80">
            <div className={`card bg-base-100 w-1/3 shadow-xl mt-10 ${
                    activeCard === 0 ? "border-2 border-blue-500" : "border border-gray-200"
                }`} >
                <div className="card-body cursor-pointer" onClick={() => handleCardClick(0)} >
                    <div className="flex items-center justify-between">
                        <h2 className="card-title text-secondary font-bold">Job Title</h2>
                        <div className="relative flex justify-center items-center w-20 h-5 bg-accent rounded-r-full rounded-l-full">
                            <p className="absolute text-text text-xs font-semibold">Hybrid</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2 font-semibold text-gray-700 mt-2">
                        <FontAwesomeIcon icon={faBuilding} className="h-5 w-5 text-primary" />
                        <p>Company Name</p>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-700">
                        <FontAwesomeIcon icon={faLocationDot} className="h-5 w-5 text-red-600" />
                        <p>Company Address</p>
                    </div>
                    <p className="mt-4 text-primary">Company description</p>
                </div>
            </div>
            <div className={`card bg-base-100 w-1/3 shadow-xl mt-10 ${
                    activeCard === 1 ? "border-2 border-blue-500" : "border border-gray-200"
                }`} >
                <div className="card-body cursor-pointer" onClick={() => handleCardClick(1)} >
                    <div className="flex items-center justify-between">
                        <h2 className="card-title text-secondary font-bold">Job Title</h2>
                        <div className="relative flex justify-center items-center w-20 h-5 bg-accent rounded-r-full rounded-l-full">
                            <p className="absolute text-text text-xs font-semibold">Hybrid</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2 font-semibold text-gray-700 mt-2">
                    <FontAwesomeIcon icon={faBuilding} className="h-5 w-5 text-primary" />
                        <p>Company Name</p>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-700">
                    <FontAwesomeIcon icon={faLocationDot} className="h-5 w-5 text-red-600" />
                        <p>Company Address</p>
                    </div>
                    <p className="mt-4 text-primary">Company description</p>
                </div>
            </div>
        </div>
    );
};

export default OpportunitiesCard;
