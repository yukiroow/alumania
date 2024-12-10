import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useEffect, useState } from "react";
import ErrorHero from "../components/ErrorHero";
import ProfileExperienceCard from "../components/profile/ProfileExperienceCard";
import SetVisibilityModal from "../components/profile/SetVisibilityModal";
import ProfilePictureUpload from "../components/profile/ProfilePictureUpload";

const ProfilePage = () => {
    const userid = localStorage
        .getItem("userid")
        .substring(1, localStorage.getItem("userid").length - 1);
    const username = localStorage
        .getItem("user")
        .substring(1, localStorage.getItem("user").length - 1);
    const [profile, setProfile] = useState({
        fullName: "",
        course: "",
        company: "",
        dpRaw: null,
        location: "",
        private: 0,
    });
    const dpImage =
        profile.dpRaw !== null
            ? profile.dpRaw.data.length > 0
                ? `data:${profile.dpRaw.data.mimetype};base64,${btoa(
                      new Uint8Array(profile.dpRaw.data).reduce(
                          (data, byte) => data + String.fromCharCode(byte),
                          ""
                      )
                  )}`
                : null
            : null;
    const avatar = dpImage ? (
        <div className="avatar justify-center">
            <div
                className="ring-primary ring-offset-base-100 w-20 rounded-full ring ring-offset-2 transition-all hover:opacity-50 cursor-pointer"
                onClick={() =>
                    document.getElementById("uploadpfp_modal").showModal()
                }
            >
                <img src={dpImage} />
            </div>
        </div>
    ) : (
        <div className="avatar placeholder">
            <div
                className="bg-primary text-neutral-content w-20 rounded-full ring ring-offset-2 ring-secondary ring-offset-base-100 transition-all hover:opacity-50 cursor-pointer"
                onClick={() =>
                    document.getElementById("uploadpfp_modal").showModal()
                }
            >
                <p className="text-xl cursor-default select-none">
                    {username.substring(1, 2).toUpperCase()}
                </p>
            </div>
        </div>
    );
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

    const onImageUpload = async (file) => {
        const formData = new FormData();
        formData.append("image", file);

        try {
            await axios
                .post(
                    `http://localhost:2012/users/uploadpfp/${userid}`,
                    formData,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }
                )
                .then((res) => {
                    const newPfp = res.data.pfp;
                    // Update localStorage and state with the new profile picture
                    window.localStorage.setItem(
                        "userdp",
                        JSON.stringify(newPfp)
                    );
                    setProfile((prev) => ({
                        ...prev,
                        dpRaw: newPfp, // Update dpRaw in state
                    }));
                    alert("Profile picture updated successfully!");
                });
        } catch (err) {
            console.log(err);
        }
    };

    const fetchExperiences = async () => {
        try {
            const res = await axios.get(
                `http://localhost:2012/experiences/all/${userid}`
            );

            // Use Promise.all to fetch images for each experience
            const experiencesWithImages = await Promise.all(
                res.data.map(async (experience) => {
                    const xpid = experience.xpid;

                    // Fetch images for each experience
                    const imagesResponse = await axios.get(
                        `http://localhost:2012/experiences/images/${xpid}`
                    );

                    // Add the images to the experience object
                    return {
                        ...experience,
                        images: imagesResponse.data,
                    };
                })
            );

            // Filter out duplicate experiences based on xpid
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

    if (loading) {
        return (
            <>
                <div className="w-full h-screen flex align-middle justify-center">
                    <span className="loading loading-spinner loading-lg"></span>
                </div>
            </>
        );
    }

    return (
        <>
            <ProfilePictureUpload onImageUpload={onImageUpload} />
            <SetVisibilityModal userid={userid} isVisible={profile.private} />
            <section className="join join-vertical px-[30%] my-5 rounded-box w-full ">
                <div className="flex join-item flex-row w-full border p-3 bg-white">
                    <div className="flex flex-col w-[80%] pl-6 pt-6">
                        <span className="text-2xl font-bold">
                            {profile.fullName}
                            <FontAwesomeIcon
                                icon={profile.private ? faEyeSlash : faEye}
                                className="text-gray-500 cursor-pointer ml-2 transition-all hover:opacity-50"
                                size="xs"
                                title={
                                    profile.private
                                        ? "Profile is private"
                                        : "Profile is public"
                                }
                                onClick={() =>
                                    document
                                        .getElementById(`visibility_modal`)
                                        .showModal()
                                }
                            />
                        </span>
                        <span className="text-base mb-1">{username}</span>
                        <span className="text-sm text-gray-400 self-flex-end">
                            {profile.course}
                            {profile.company ? ` | ${profile.company}` : ``}
                            {profile.location ? ` | ${profile.location}` : ``}
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
                        <ProfileExperienceCard key={xp.xpid} experience={xp} />
                    ))
                ) : (
                    <div className="join-item flex bg-white border p-4">
                        <span className="text-xl text-gray-400 text-center w-full">
                            No experiences shared yet
                        </span>
                    </div>
                )}
            </section>
        </>
    );
};

export default ProfilePage;
