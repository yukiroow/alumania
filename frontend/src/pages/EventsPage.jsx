import axios from "axios";
import { useEffect, useState } from "react";
import ErrorHero from "../components/ErrorHero";
import EventCard from "../components/EventsCard";

const EventsPage = () => {
    const [events, setEvents] = useState([]);
    const [interested, setInterested] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const userId = localStorage.getItem("userid").replace(/['"]+/g, "");

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const res = await axios.get("http://localhost:2012/events");

                const interestedRes = await axios.get(
                    `http://localhost:2012/events/interestedinevents/${userId}`
                );
                setEvents(res.data);
                setInterested(interestedRes.data);
            } catch (error) {
                console.log(error);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

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
            <section className="join join-vertical px-[25%] my-10 rounded-box">
                {events.map((event) => {
                    const isInterested = interested.some(
                        (interest) =>
                            interest.eventid === event.eventid &&
                            interest.userid === userId
                    );
                    return (
                        <EventCard
                            key={event.eventid}
                            event={event}
                            interested={isInterested}
                        />
                    );
                })}
            </section>
        </>
    );
};

export default EventsPage;
