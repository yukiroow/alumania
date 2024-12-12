// Author: @PEEACHYBEE Freskkie Encarnacion
//         @yukiroow Harry Dominguez
import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const ExperienceCard = ({ experience, onProfileClick }) => {
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    const userid = localStorage
        .getItem("userid")
        .substring(1, localStorage.getItem("userid").length - 1);
    const carouselRef = useRef(null);

    const handleProfileClick = () => {
        onProfileClick(experience.userid);
    };

    const handleMouseDown = (e) => {
        const carousel = carouselRef.current;
        carousel.isDown = true;
        carousel.startX = e.pageX - carousel.offsetLeft;
    };

    const handleMouseLeave = () => {
        const carousel = carouselRef.current;
        carousel.isDown = false;
    };

    const handleMouseUp = () => {
        const carousel = carouselRef.current;
        carousel.isDown = false;
    };

    const handleMouseMove = (e) => {
        const carousel = carouselRef.current;
        if (!carousel.isDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - carousel.startX) * 2;
        carousel.scrollLeft = carousel.scrollLeft - walk;
    };

    const handleLikeClick = () => {
        if (liked) {
            fetchRemoveLike();
        } else {
            fetchAddLike();
        }
    };

    const fetchLikePost = async () => {
        await axios
            .get(`http://localhost:2012/experiences/likes/${experience.xpid}`)
            .then((res) => {
                setLikeCount(res.data[0].likes);
            });
        await axios
            .get(
                `http://localhost:2012/experiences/isliked/${experience.xpid}?userid=${userid}`
            )
            .then((res) => {
                res.data.isliked ? setLiked(true) : setLiked(false);
            });
    };

    const fetchAddLike = async () => {
        await axios
            .post(
                `http://localhost:2012/experiences/likepost/${experience.xpid}`,
                { userid: userid }
            )
            .then(() => {
                setLikeCount(likeCount + 1);
                setLiked(true);
            });
    };

    const fetchRemoveLike = async () => {
        await axios
            .post(
                `http://localhost:2012/experiences/unlikepost/${experience.xpid}`,
                { userid: userid }
            )
            .then(() => {
                setLikeCount(likeCount - 1);
                setLiked(false);
            });
    };

    useEffect(() => {
        fetchLikePost();
    }, []);

    const calculateTimeAgo = (timestamp) => {
        const now = new Date();
        const publishedDate = new Date(timestamp);
        const diffInSeconds = Math.floor((now - publishedDate) / 1000);

        const secondsInMinute = 60;
        const secondsInHour = 3600;
        const secondsInDay = 86400;
        const secondsInWeek = 604800;

        if (diffInSeconds < secondsInHour) {
            const minutes = Math.floor(diffInSeconds / secondsInMinute);
            return `${minutes <= 1 ? "1m" : `${minutes}m`} ago`;
        } else if (diffInSeconds < secondsInDay) {
            const hours = Math.floor(diffInSeconds / secondsInHour);
            return `${hours <= 1 ? "1h" : `${hours}h`}`;
        } else if (diffInSeconds < secondsInWeek) {
            const days = Math.floor(diffInSeconds / secondsInDay);
            return `${days <= 1 ? "1d" : `${days}d`}`;
        } else {
            const weeks = Math.floor(diffInSeconds / secondsInWeek);
            return `${weeks <= 1 ? "1w" : `${weeks}w`}`;
        }
    };

    const dpImage = experience.displaypic
        ? experience.displaypic.data.length > 0
            ? `data:${experience.displaypic.data.mimetype};base64,${btoa(
                  new Uint8Array(experience.displaypic.data).reduce(
                      (data, byte) => data + String.fromCharCode(byte),
                      ""
                  )
              )}`
            : null
        : null;

    const avatar = dpImage ? (
        <div className="avatar">
            <div className="h-10 w-10 rounded-full ring ring-offset-2 ring-secondary ring-offset-base-100">
                <img src={dpImage} />
            </div>
        </div>
    ) : (
        <div className="avatar placeholder">
            <div className="bg-primary text-neutral-content w-10 h-10 rounded-full ring ring-offset-2 ring-secondary ring-offset-base-100">
                <p className="text-lg cursor-default select-none">
                    {experience.username.substring(0, 2).toUpperCase()}
                </p>
            </div>
        </div>
    );

    return (
        <>
            <div className="justify-self-center join-item w-full bg-white border p-4 space-y-2">
                <div className="flex mt-4 ml-4 mr-4 items-start space-x-5">
                    {avatar}
                    <div className="flex flex-col w-full">
                        <div className="flex items-center space-x-2 mt-1">
                            <p
                                className="font-medium hover:cursor-pointer"
                                onClick={handleProfileClick}
                            >
                                {experience.username}
                            </p>
                            <p className="font-light text-gray-500 text-xs">
                                {calculateTimeAgo(experience.publishtimestamp)}
                            </p>
                        </div>
                        <p className="mt-3 text-sm">{experience.body}</p>
                    </div>
                </div>
                {experience.images.length > 0 ? (
                    <div
                        className="carousel flex space-x-2 rounded-box h-64 max-w-full ml-20 scroll-smooth hover:cursor-grab active:cursor-grabbing"
                        ref={carouselRef}
                        onMouseDown={handleMouseDown}
                        onMouseLeave={handleMouseLeave}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}
                    >
                        {experience.images.map((image, index) => (
                            <div
                                className="carousel-item flex-shrink-0 min-w-[10%] h-full"
                                key={`${experience.xpid}-${index}`}
                            >
                                <img
                                    src={`data:${
                                        image.xpimage.data.mimetype
                                    };base64,${btoa(
                                        new Uint8Array(
                                            image.xpimage.data
                                        ).reduce(
                                            (data, byte) =>
                                                data +
                                                String.fromCharCode(byte),
                                            ""
                                        )
                                    )}`}
                                    alt={`Image ${index + 1}`}
                                    className="w-full h-full rounded-box object-cover select-none"
                                    draggable="false"
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    ""
                )}
                <div className="flex justify-start items-center space-x-4 mt-4 mx-20">
                    <div className="flex items-center space-x-2 mt-1">
                        <FontAwesomeIcon
                            icon={liked ? faHeartSolid : faHeartRegular}
                            className={`text-xl cursor-pointer transition-all ${
                                liked
                                    ? "text-red-500 hover:scale-95 hover:opacity-90"
                                    : "text-primary hover:scale-105 hover:opacity-90"
                            }`}
                            onClick={handleLikeClick}
                        />
                        <p className="text-sm text-gray-400">{likeCount}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ExperienceCard;
