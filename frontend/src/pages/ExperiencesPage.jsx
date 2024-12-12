// Author @yukiroow Harry Dominguez
import axios from "axios";
import { useEffect, useState } from "react";
import ErrorHero from "../components/ErrorHero";
import ExperienceCard from "../components/experience/ExperienceCard";
import ProfilePaneModal from "../components/profile/ProfilePaneModal";

const ExperiencesPage = () => {
    const [selectedProfile, setSelectedProfile] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [experiences, setExperiences] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const handleProfileClick = (userid) => {
        setSelectedProfile(userid);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedProfile(null);
    };

    const fetchExperiences = async (page) => {
        try {
            const res = await axios.get(
                `http://localhost:2012/experiences?page=${page}&limit=10`
            );

            const experiencesWithImages = await Promise.all(
                res.data.map(async (experience) => {
                    const xpid = experience.xpid;

                    // Fetch images for each experience
                    const imagesResponse = await axios.get(
                        `http://localhost:2012/experiences/images/${xpid}`
                    );

                    return {
                        ...experience,
                        images: imagesResponse.data,
                    };
                })
            );

            setExperiences((prevExperiences) => {
                const newExperiences = experiencesWithImages.filter(
                    (exp) => !prevExperiences.some((e) => e.xpid === exp.xpid)
                );
                return [...prevExperiences, ...newExperiences];
            });

            setHasMore(res.data.length === 10);
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    const handleScroll = () => {
        const bottom =
            window.innerHeight + document.documentElement.scrollTop ===
            document.documentElement.offsetHeight;
        if (bottom && hasMore && !loading) {
            setPage((prevPage) => prevPage + 1);
        }
    };

    useEffect(() => {
        fetchExperiences(page);
    }, [page]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [loading, hasMore]);

    if (loading && page === 1) {
        return (
            <div className="w-full h-[calc(100vh-6rem)] flex align-middle justify-center">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
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
            <main>
                {showModal && (
                    <ProfilePaneModal
                        userid={selectedProfile}
                        onClose={closeModal}
                    />
                )}
                <section className="join join-vertical px-[30%] mb-5 rounded-box w-full">
                    {experiences.map((xp) => (
                        <ExperienceCard
                            key={xp.xpid}
                            experience={xp}
                            onProfileClick={handleProfileClick}
                        />
                    ))}
                </section>
            </main>
        </>
    );
};

export default ExperiencesPage;
