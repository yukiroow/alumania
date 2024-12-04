import axios from "axios";
import { useEffect, useState } from "react";
import ErrorHero from "../components/ErrorHero";
import OpportunityCard from "../components/OpportunityCard";
import OpportunityPane from "../components/OpportunityPane";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonThroughWindow } from "@fortawesome/free-solid-svg-icons";

const JobsPage = () => {
    const [jobs, setJobs] = useState([]);
    const [selectedJob, setSelectedJob] = useState(null);
    const [interested, setInterested] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const userId = localStorage.getItem("userid").replace(/['"]+/g, "");

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const res = await axios.get("http://localhost:2012/jobposts");
                const resInterested = await axios.get(
                    `http://localhost:2012/jobposts/interestedjobs/${userId}`
                );
                console.log(resInterested);
                setJobs(res.data);
                setInterested(resInterested.data);
            } catch (error) {
                console.log(error);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);

    const handleCardClick = (job) => {
        const isInterested = interested.some(
            (interest) => interest.jobpid === job.jobpid
        );
        setSelectedJob({ ...job, isInterested });
    };

    if (loading) {
        return (
            <>
                <div className="flex justify-center items-center h-96">
                    <span className="loading loading-dots loading-lg"></span>
                </div>
            </>
        );
    }

    if (error) {
        return (
            <>
                <ErrorHero />
            </>
        );
    }

    return (
        <>
            <main className="flex h-[calc(100vh-7rem)]">
                <section className="join join-vertical w-[40%] rounded-box overflow-y-auto ml-16 border">
                    {jobs.map((job) => (
                        <OpportunityCard
                            key={job.jobpid}
                            job={job}
                            handleCardClick={handleCardClick}
                            isSelected={selectedJob?.jobpid === job.jobpid}
                        />
                    ))}
                </section>
                {!selectedJob ? (
                    <div className="relative h-full overflow-hidden">
                        <div className="card bg-white border w-[50%] h-[calc(100vh-7rem)] fixed top-24 right-10 overflow-y-auto p-4">
                            <div className="card-body">
                                <FontAwesomeIcon
                                    icon={faPersonThroughWindow}
                                    size="5x"
                                    className="opacity-40 mt-[25%]"
                                    color="#032543"
                                />
                                <h1 className="text-primary text-center opacity-40 font-thin text-2xl cursor-default select-none">
                                    Select an Opportunity
                                </h1>
                            </div>
                        </div>
                    </div>
                ) : (
                    <OpportunityPane
                        job={selectedJob}
                        isInterested={selectedJob.isInterested}
                    />
                )}
            </main>
        </>
    );
};

export default JobsPage;
