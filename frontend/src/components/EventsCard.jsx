import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faClock,
    faCalendar,
    faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
const EventCard = () => {
    return (
        <div className="flex items-center card lg:card-side bg-base-100 shadow-xl m-40">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                    alt="Event"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title uppercase font-bold">
                    slu awarding night
                </h2>
                <p class="px-0 py-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                </p>
                <div className="flex flex-col items-start space-y-4">
                    <div className="flex item-center space-x-2">
                        <FontAwesomeIcon icon={faLocationDot} className="h-5 w-5 text-red-600" />
                        <p>Location Address</p>
                    </div>
                    <div className="flex item-center space-x-2">
                        <FontAwesomeIcon icon={faCalendar} className="h-5 w-5 text-primary" />
                        <p>Date</p>
                    </div>
                    <div className="flex item-center space-x-2">
                        <FontAwesomeIcon icon={faClock} className="h-5 w-5 text-primary" />
                        <p>Time</p>
                    </div>
                </div>
                <div className="card-actions justify-end">
                    <button
                        className="flex overflow-hidden  
                    w-[7rem] hover:w-[8.3rem] 
                    items-center gap-1
                    cursor-pointer 
                    bg-[#0059CD] 
                    text-white px-5 py-2 rounded-md 
                    transition-all ease-in-out hover:scale 
                    hover:scale-105 font-[revert] active:scale-100 shadow-lg"
                    >
                        Interested
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g
                                id="SVGRepo_tracerCarrier"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                                {" "}
                                <path
                                    d="M6 12H18M12 6V18"
                                    stroke="#ffffff"
                                    stroke-width="2.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></path>{" "}
                            </g>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
