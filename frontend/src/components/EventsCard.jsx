import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMapLocation,
    faCalendar,
    faClock,
    faPlus,
} from "@fortawesome/free-solid-svg-icons";

const EventCard = (props) => {
    const event = props.event;
    if(event.eventphoto.data.length < 0)
    console.log(event.eventphoto.data);
    const image = event.eventphoto.data.length < 0 ? `data:image/jpeg;base64,${btoa(
        new Uint8Array(event.eventphoto.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ""
        )
    )}` : 'https://placehold.co/600x400?text=No+Banner'
    return (
        <div className="flex items-center h-fit card lg:card-side bg-base-100 shadow-md my-8 mx-[20%]">
            <figure className="min-w-[33%] max-w-[33%]">
                {/* TODO: Image Processing */}
                <img src={image} alt="Event" className="size-full object-cover"/>
            </figure>
            <div className="card-body">
                <h2 className="card-title uppercase text-3xl font-bold">
                    {event.title}
                </h2>
                <p className="px-0 py-0">{event.description}</p>
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
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                                {" "}
                                <path
                                    d="M6 12H18M12 6V18"
                                    stroke="#ffffff"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
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
