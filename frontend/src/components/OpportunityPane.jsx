import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBuilding,
    faLocationDot,
    faPersonThroughWindow,
} from "@fortawesome/free-solid-svg-icons";

{
    /* @author Freskkie Encarnacion*/
}

const OpportunityPane = ({ job }) => {
    if (!job) {
        return (
            <>
                <div className="relative h-full overflow-hidden">
                    <div className="card bg-white border w-[50%] h-[calc(100vh-7rem)] fixed top-24 right-10 overflow-y-auto p-4">
                        <div className="card-body">
                            <FontAwesomeIcon
                                icon={faPersonThroughWindow}
                                size="5x"
                                className="opacity-40 mt-40"
                                color="#032543"
                            />
                            <h1 className="text-primary text-center opacity-40 font-thin text-6xl cursor-default select-none">
                                Select an Opportunity
                            </h1>
                        </div>
                    </div>
                </div>
            </>
        );
    }
    return (
        <>
            <div className="relative h-full overflow-hidden">
                <div className="card bg-white border w-[50%] h-[calc(100vh-7rem)] fixed top-24 right-10 overflow-y-auto p-4">
                    <div className="card-body">
                        <h1 className="card-title text-primary font-bold text-3xl">
                            {job.title}
                        </h1>
                        <div className="flex items-center space-x-2 font-semibold text-gray-700 mt-2">
                            <FontAwesomeIcon
                                icon={faBuilding}
                                className="h-5 w-5 text-primary"
                            />
                            <p>{job.companyname}</p>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-700">
                            <FontAwesomeIcon
                                icon={faLocationDot}
                                className="h-5 w-5 text-red-600"
                            />
                            <p>{job.location}</p>
                        </div>
                        <div className="flex gap-2">
                            <div className="relative flex justify-center items-center w-20 h-6 bg-accent rounded-r-full rounded-l-full">
                                <p className="absolute text-text text-xs font-semibold">
                                    {job.type}
                                </p>
                            </div>
                            <button
                                className="flex overflow-hidden  
                        w-[5rem] hover:w-[6.3rem] 
                        items-center gap-1
                        cursor-pointer
                        bg-[#0059CD]
                        text-white px-3.5 py-1 rounded-full text-xs
                        transition-all ease-in-out hover:scale
                        hover:scale-105 font-[revert] active:scale-100 shadow-lg"
                            >
                                Interested
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-4 h-4"
                                >
                                    <g
                                        id="SVGRepo_bgCarrier"
                                        strokeWidth="0"
                                    ></g>
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
                        <hr className="w-[calc(100%+32px)] h-[5px] border-t border-gray-400 my-3 -ml-4 -mr-4" />
                        <h2 className="text-primary font-bold mt-2 text-xl">
                            Job Details
                        </h2>
                        <p className="text-primary h-auto flex-grow-0">{job.description}</p>
                        <section>
                            <h2 className="text-primary font-bold mt-5 text-xl">
                                Contact Information
                            </h2>
                            {job.contactname && <p className="text-primary">Name: {job.contactname}</p>}
                            {job.contactemail && <p className="text-primary">Email: {job.contactemail}</p>}
                            {job.contactnumber && <p className="text-primary">Phone: {job.contactnumber}</p>}
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
};
export default OpportunityPane;
