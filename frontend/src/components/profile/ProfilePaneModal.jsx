// Author: @yukiroow Harry Dominguez
import { useState, useEffect } from "react";
import axios from "axios";
import ErrorHero from "../ErrorHero";
import ProfileExperienceCard from "./ProfileExperienceCard";

const ProfilePaneModal = ({ userid, onClose }) => {
    const [profile, setProfile] = useState({
        username: "",
        fullName: "",
        course: "",
        company: "",
        dpRaw: null,
        location: "",
        private: 0,
    });

    const [error, setError] = useState(false);
    const [experiences, setExperiences] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchProfile = async () => {
        try {
            await axios
                .get(`http://localhost:2012/users/${userid}`)
                .then((res) => {
                    setProfile((prev) => {
                        return {
                            ...prev,
                            username: res.data.username,
                            fullName: res.data.middlename
                                ? `${res.data.firstname} ${res.data.middlename} ${res.data.lastname}`
                                : `${res.data.firstname} ${res.data.lastname}`,
                            course: res.data.course,
                            company: res.data.company,
                            dpRaw: res.data.displaypic,
                            location: res.data.location,
                            private: res.data.private,
                        };
                    });
                });
        } catch (error) {
            console.log(error);
            setError(true);
        }
    };

    const fetchExperiences = async () => {
        try {
            const res = await axios.get(
                `http://localhost:2012/experiences/all/${userid}`
            );

            const experiencesWithImages = await Promise.all(
                res.data.map(async (experience) => {
                    const xpid = experience.xpid;

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
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProfile();
        fetchExperiences();
    }, []);

    const dpImage =
        profile.dpRaw && profile.dpRaw.data && profile.dpRaw.data.length > 0
            ? `data:${profile.dpRaw.mimetype};base64,${btoa(
                  new Uint8Array(profile.dpRaw.data).reduce(
                      (data, byte) => data + String.fromCharCode(byte),
                      ""
                  )
              )}`
            : null;

    const avatar = dpImage ? (
        <div className="avatar justify-center">
            <div className="ring-primary ring-offset-base-100 w-20 rounded-full ring ring-offset-2 ">
                <img src={dpImage} alt="Profile" />
            </div>
        </div>
    ) : (
        <div className="avatar placeholder">
            <div className="bg-primary text-neutral-content w-20 rounded-full ring ring-offset-2 ring-secondary ring-offset-base-100 ">
                <p className="text-xl cursor-default select-none">
                    {profile.username
                        ? profile.username.charAt(0).toUpperCase()
                        : ""}
                </p>
            </div>
        </div>
    );

    if (loading) {
        return (
            <>
                <dialog id={`modal-${userid}`} className="modal" open>
                    <div className="modal-box p-0 w-11/12 max-w-3xl bg-white">
                        <form method="dialog">
                            <button
                                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                                onClick={onClose}
                            >
                                ✕
                            </button>
                        </form>

                        <div className="w-full h-full py-16 flex align-middle justify-center">
                            <span className="loading loading-spinner loading-lg"></span>
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
        );
    }

    if (
        profile.private === 1 &&
        userid !==
            localStorage
                .getItem("userid")
                .substring(1, localStorage.getItem("userid").length - 1)
    )
        return (
            <>
                <dialog id={`modal-${userid}`} className="modal" open>
                    <div className="modal-box p-0 w-11/12 max-w-3xl">
                        <form method="dialog">
                            <button
                                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                                onClick={onClose}
                            >
                                ✕
                            </button>
                        </form>
                        <section className="join join-vertical w-full">
                            <div className="flex join-item flex-row w-full border p-10 bg-white">
                                <div className="flex flex-col w-[80%] pl-6 pt-6">
                                    <span className="text-2xl font-bold">
                                        {profile.fullName}
                                    </span>
                                    <span className="text-base mb-1">
                                        {profile.username}
                                    </span>
                                    <span className="text-sm text-gray-400 self-flex-end">
                                        {profile.course}
                                        {profile.company
                                            ? ` | ${profile.company}`
                                            : ``}
                                        {profile.location
                                            ? ` | ${profile.location}`
                                            : ``}
                                    </span>
                                </div>
                                <div className="flex items-center justify-center bg-white">
                                    {avatar}
                                </div>
                            </div>
                            <div className="join-item flex bg-white border p-4">
                                <span className="text-xl text-gray-400 text-center w-full">
                                    This account is private
                                </span>
                            </div>
                        </section>
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
        );

    return (
        <>
            <dialog id={`modal-${userid}`} className="modal" open>
                <div className="modal-box p-0 w-11/12 max-w-3xl">
                    <form method="dialog">
                        <button
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={onClose}
                        >
                            ✕
                        </button>
                    </form>
                    <section className="join join-vertical w-full">
                        <div className="flex join-item flex-row w-full border p-10 bg-white">
                            <div className="flex flex-col w-[80%] pl-6 pt-6">
                                <span className="text-2xl font-bold">
                                    {profile.fullName}
                                </span>
                                <span className="text-base mb-1">
                                    {profile.username}
                                </span>
                                <span className="text-sm text-gray-400 self-flex-end">
                                    {profile.course}
                                    {profile.company
                                        ? ` | ${profile.company}`
                                        : ``}
                                    {profile.location
                                        ? ` | ${profile.location}`
                                        : ``}
                                </span>
                            </div>
                            <div className="flex items-center justify-center bg-white">
                                {avatar}
                            </div>
                        </div>
                        <div className="join-item flex border p-1 align-middle bg-white">
                            <span className="w-full text-center text-gray-400">
                                Experiences
                            </span>
                        </div>
                        {error ? (
                            <div className="join-item border pb-6">
                                <ErrorHero />
                            </div>
                        ) : experiences.length > 0 ? (
                            experiences.map((xp) => (
                                <ProfileExperienceCard
                                    key={xp.xpid}
                                    experience={xp}
                                />
                            ))
                        ) : (
                            <div className="join-item flex bg-white border p-4">
                                <span className="text-xl text-gray-400 text-center w-full">
                                    No experiences shared yet
                                </span>
                            </div>
                        )}
                    </section>
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
    );
};

export default ProfilePaneModal;
