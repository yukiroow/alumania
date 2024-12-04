import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faLocationDot } from "@fortawesome/free-solid-svg-icons";

{
    /* @author Freskkie Encarnacion*/
}

const OpportunityCard = ({ job, handleCardClick, isSelected }) => {
    return (
        <div
            id={job.jobpid}
            className={`card-body cursor-pointer join-item border-b max-h-52 hover:bg-slate-100 ${
                isSelected ? "bg-slate-100" : "bg-white"
            }`}
            onClick={handleCardClick}
        >
            <div className="flex items-center justify-between">
                <h2 className="card-title text-secondary font-bold">
                    {job.title}
                </h2>
                <div className="relative flex justify-center items-center w-20 h-5 bg-accent rounded-r-full rounded-l-full">
                    <p className="absolute text-text text-xs font-semibold">
                        {job.type}
                    </p>
                </div>
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
                    className="h-5 w-5 text-red-600"
                />
                <p>{job.location}</p>
            </div>
            <p className="mt-2 text-primary line-clamp-1">{job.description}</p>
        </div>
    );
};

export default OpportunityCard;
