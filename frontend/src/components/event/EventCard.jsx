import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMapLocation,
    faCalendar,
    faClock,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useState } from "react";

{
    /* @author Freskkie Encarnacion*/
}

const EventCard = (props) => {
    const event = props.event;
    const [isExpanded, setIsExpanded] = useState("line-clamp-3");
    const [interested, setInterested] = useState(props.interested);

    const userId = localStorage.getItem("userid");
    const eventId = event.eventid;

    const toggleDescription = () => {
        if (isExpanded === "line-clamp-3") setIsExpanded("line-clamp-none");
        else setIsExpanded("line-clamp-3");
    };

    const toggleBanner = (id) => {
        document.getElementById(id).showModal();
    };

    const handleInterested = () => {
        axios
            .post(`http://localhost:2012/events/interested/${eventId}`, {
                userId: `${userId}`,
            })
            .then((res) => {
                if (res.status == 201) {
                    setInterested(true);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleDisregard = () => {
        axios
            .post(`http://localhost:2012/events/disregard/${eventId}`, {
                userId: `${userId}`,
            })
            .then((res) => {
                if (res.status == 201) {
                    setInterested(false);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const image =
        event.eventphoto.data.length > 0
            ? `data:${event.eventphoto.mimetype};base64,${btoa(
                  new Uint8Array(event.eventphoto.data).reduce(
                      (data, byte) => data + String.fromCharCode(byte),
                      ""
                  )
              )}`
            : "https://placehold.co/600x400?text=No+Banner";

    return (
        <>
            <div className="flex items-center h-fit card lg:card-side bg-base-100 border join-item">
                <figure className="min-w-[33%] max-w-[33%]">
                    {/* TODO: Image Processing */}
                    <img
                        src={image}
                        alt="Event"
                        className="size-full object-cover cursor-pointer"
                        onClick={() => toggleBanner(eventId)}
                    />
                </figure>

                <BannerModal
                    id={eventId}
                    title={event.title}
                    image={image}
                />
                <InterestedModal
                    id={eventId}
                    title={event.title}
                    handleInterested={handleInterested}
                    handleDisregard={handleDisregard}
                    interested={interested}
                />
                <div className="card-body">
                    <h2 className="card-title uppercase text-3xl font-bold">
                        {event.title}
                    </h2>
                    <p
                        className={`px-0 py-2 ${isExpanded} cursor-pointer`}
                        onClick={toggleDescription}
                    >
                        {event.description}
                    </p>
                    <div className="flex flex-col items-start space-y-4">
                        <div className="flex item-center space-x-2">
                            <FontAwesomeIcon icon={faMapLocation} />
                            <p>{event.eventloc}</p>
                        </div>
                        <div className="flex item-center space-x-2">
                            <FontAwesomeIcon icon={faCalendar} />
                            <p>{new Date(event.eventdate).toDateString()}</p>
                        </div>
                        <div className="flex item-center space-x-2">
                            <FontAwesomeIcon icon={faClock} />
                            <p>
                                {new Date(
                                    "1970-01-01T" + event.eventtime + "Z"
                                ).toLocaleTimeString("en-US", {
                                    timeZone: "UTC",
                                    hour12: true,
                                    hour: "numeric",
                                    minute: "numeric",
                                })}
                            </p>
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        <button
                            className={`flex overflow-hidden  
                    w-[7rem] hover:w-[8.3rem] 
                    items-center gap-1
                    cursor-pointer 
                    ${!interested ? "bg-[#0059CD]" : "bg-red-700"}
                    text-white px-5 py-2 rounded-md 
                    transition-all ease-in-out hover:scale 
                    hover:scale-105 font-[revert] active:scale-100 shadow-lg`}
                            onClick={() => toggleBanner(`${event.eventid}-int`)}
                        >
                            {!interested ? "Interested" : "Disregard"}
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g
                                    id="SVGRepo_tracerCarrier"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                    {!interested ? (
                                        <path
                                            d="M6 12H18"
                                            stroke="#ffffff"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                    ) : (
                                        <path
                                            d="M12 6V18M6 12H18"
                                            stroke="#ffffff"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                    )}
                                </g>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

const BannerModal = ({ id, title, image }) => {
    return (
        <>
            <dialog id={id} className="modal">
                <div className="modal-box max-w-[60vh]">
                    <h3 className="font-bold text-lg uppercase">{title}</h3>
                    <img
                        src={image}
                        alt="Event"
                        className="size-full object-cover cursor-pointer rounded-box"
                    />
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    );
};

const InterestedModal = ({
    id,
    title,
    handleInterested,
    handleDisregard,
    interested,
}) => {
    return (
        <>
            {!interested ? (
                <dialog id={`${id}-int`} className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg text-primary">
                            {title}
                        </h3>
                        <p className="py-4">
                            Are you sure you want to mark this event as
                            something you&apos;re interested in? We will be
                            informing the poster.
                        </p>
                        <div className="modal-action">
                            <form method="dialog">
                                <button
                                    className="btn btn-primary text-white"
                                    onClick={handleInterested}
                                >
                                    Confirm
                                </button>
                                <button className="btn ml-2">Cancel</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            ) : (
                <dialog id={`${id}-int`} className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg text-primary">
                            {title}
                        </h3>
                        <p className="py-4">
                            Are you sure you want to unmark this event? We will
                            be notifying the poster.
                        </p>
                        <div className="modal-action">
                            <form method="dialog">
                                <button
                                    className="btn btn-warning text-white"
                                    onClick={handleDisregard}
                                >
                                    Disregard
                                </button>
                                <button className="btn ml-2">Cancel</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            )}
        </>
    );
};

export default EventCard;
