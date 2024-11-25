import React from "react";

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
                <h2 className="card-title uppercase font-bold">slu awarding night</h2>
                <p class="px-0 py-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. </p>
                <div className="flex flex-col items-start space-y-4">
                    <div className="flex item-center space-x-2">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#CD0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" stroke="#CD0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        <p>Location Address</p>
                    </div>
                    <div className="flex item-center space-x-2">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 9H21M7 3V5M17 3V5M6 12H8M11 12H13M16 12H18M6 15H8M11 15H13M16 15H18M6 18H8M11 18H13M16 18H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="#022543" stroke-width="2" stroke-linecap="round"></path> </g></svg>
                        <p>Date</p>
                    </div>
                    <div className="flex item-center space-x-2">
                        <svg viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 7V12L14.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#022543" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        <p>Time</p>
                    </div>
                </div>
                <div className="card-actions justify-end">
                    <button
                    class="flex overflow-hidden  
                    w-[7rem] hover:w-[8.3rem] 
                    items-center gap-1
                    cursor-pointer 
                    bg-[#0059CD] 
                    text-white px-5 py-2 rounded-md 
                    transition-all ease-in-out hover:scale 
                    hover:scale-105 font-[revert] active:scale-100 shadow-lg"
                    >
                    Interested
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M12 6V18" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
