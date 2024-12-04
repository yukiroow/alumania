import axios from "axios";
import { useEffect, useState } from "react";
import ErrorHero from "../components/ErrorHero";
import OpportunityCard from "../components/OpportunityCard";
import OpportunityPane from "../components/OpportunityPane";

const JobsPage = () => {
    const [jobs, setJobs] = useState([]);
    const [selectedJob, setSelectedJob] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const res = await axios.get("http://localhost:2012/jobposts");
                setJobs(res.data);
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
        setSelectedJob(job);
    }

    if (loading) {
        return (
            <>
                <div className="flex justify-center items-center h-2/3">
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
                            handleCardClick={() => handleCardClick(job)}
                            isSelected={selectedJob?.jobpid === job.jobpid}
                        />
                    ))}
                </section>
                <OpportunityPane job={selectedJob} />
            </main>
        </>
    );
};

export default JobsPage;
