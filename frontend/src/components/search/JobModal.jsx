import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBuilding,
    faLocationDot,
    faStar,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useState, useEffect } from "react";

const JobModal = ({ job, calculateTimeAgo, onClose }) => {
    const userId = localStorage.getItem("userid").replace(/['"]+/g, "");
    const jobpId = job.jobpid;
    const [interested, setInterested] = useState(false);

    const checkIfInterested = async () => {
        try {
            const response = await axios.get(
                `http://localhost:2012/jobposts/alreadyinterested/${jobpId}`,
                { params: { userId } }
            );
            return response.data.interested;
        } catch (error) {
            console.log(error);
            return false;
        }
    };

    useEffect(() => {
        const fetchInterestStatus = async () => {
            const interestedStatus = await checkIfInterested();
            setInterested(interestedStatus);
        };
        fetchInterestStatus();
    }, []);

    const handleInterested = async () => {
        await axios
            .post(`http://localhost:2012/jobposts/interested/${jobpId}`, {
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

    const handleDisregard = async () => {
        await axios
            .post(`http://localhost:2012/jobposts/disregard/${jobpId}`, {
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

    return (
        <>
            <>
                <dialog id={`modal-${job.jobpid}`} className="modal" open>
                    <div className="modal-box p-0 w-11/12 max-w-3xl">
                        <form method="dialog">
                            <button
                                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-20"
                                onClick={onClose}
                            >
                                ✕
                            </button>
                        </form>
                        <div className="card bg-white border h-[calc(100vh-7rem)] overflow-y-auto p-4">
                            <div className="card-body">
                                <h1 className="card-title leading-5 text text-primary font-bold text-3xl">
                                    {job.title}
                                </h1>
                                <div className="flex items-center text-sm text-gray-500">
                                    {calculateTimeAgo(job.publishtimestamp)}
                                </div>
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
                                        className="h-5 w-5 text-primary"
                                    />
                                    <p>{job.location}</p>
                                </div>
                                <div className="flex gap-2">
                                    <div className="relative flex justify-center items-center w-20 h-6 bg-secondary rounded-r-full rounded-l-full">
                                        <p className="absolute text-secondary-content text-xs font-semibold">
                                            {job.type}
                                        </p>
                                    </div>
                                    <button
                                        className={`btn ${
                                            !interested
                                                ? "btn-outline btn-secondary"
                                                : "btn-success"
                                        } btn-xs rounded-full transform transition-all hover:scale-105`}
                                        onClick={
                                            interested
                                                ? handleDisregard
                                                : handleInterested
                                        }
                                    >
                                        <FontAwesomeIcon icon={faStar} />
                                        {!interested
                                            ? "Mark as Interested"
                                            : "Interested"}
                                    </button>
                                </div>
                                <hr className="w-[calc(100%+32px)] h-[5px] border-t border-gray-400 my-3 -ml-4 -mr-4" />
                                <h2 className="text-primary font-bold mt-2 text-xl">
                                    Job Details
                                </h2>
                                <p className="text-primary h-auto flex-grow-0">
                                    {job.description}
                                </p>
                                <section>
                                    <h2 className="text-primary font-bold mt-5 text-xl">
                                        Contact Information
                                    </h2>
                                    {job.contactname && (
                                        <p className="text-primary">
                                            Name: {job.contactname}
                                        </p>
                                    )}
                                    {job.contactemail && (
                                        <p className="text-primary">
                                            Email: {job.contactemail}
                                        </p>
                                    )}
                                    {job.contactnumber && (
                                        <p className="text-primary">
                                            Phone: {job.contactnumber}
                                        </p>
                                    )}
                                </section>
                            </div>
                        </div>
                    </div>
                    <form
                        method="dialog"
                        className="modal-backdrop"
                        onClick={onClose}
                    >
                        <button>close</button>
                    </form>
                </dialog>
            </>
        </>
    );
};

export default JobModal;
