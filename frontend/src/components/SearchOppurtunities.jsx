import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBuilding,
    faMapLocation,
} from "@fortawesome/free-solid-svg-icons";

{/* @author Freskkie Encarnacion*/}

const SearchOppurtunies = () => {
    return (
    <>
        <div className="flex justify-center items-start min-h-screen bg-gray-100 p-6">
        {/* Nag aauto adjust yung bg depende sa number of content)*/}
            <div className="w-2/4 bg-white rounded-2xl shadow-lg p-4 flex flex-col space-y-8">
                {/* 1st Card*/}
                <div className="p-10 rounded-xl hover:shadow-lg cursor-pointer">
                <div className="flex items-center gap-5">
                    <h2 className="card-title text-secondary font-bold">Job Title</h2>
                    <div className="relative flex justify-center items-center w-20 h-5 bg-accent rounded-full">
                        <p className="absolute text-text text-xs font-semibold">Hybrid</p>
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

                {/* 2nd Card*/}
                <div className="p-10 rounded-xl hover:shadow-lg cursor-pointer">
                <div className="flex items-center gap-5">
                    <h2 className="card-title text-secondary font-bold">Job Title</h2>
                    <div className="relative flex justify-center items-center w-20 h-5 bg-accent rounded-full">
                        <p className="absolute text-text text-xs font-semibold">Hybrid</p>
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
            </div>
        </div>
    </>
    );
};

export default SearchOppurtunies;