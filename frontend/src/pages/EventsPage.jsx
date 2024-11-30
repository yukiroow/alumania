import axios from "axios";
import { useEffect, useState } from "react";
import ErrorHero from "../components/ErrorHero";
import EventCard from "../components/EventsCard";

const EventsPage = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const res = await axios.get("http://localhost:2012/events");
                setEvents(res.data);
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
                <div className="flex justify-center items-center h-2/3">
                    <span className="loading loading-dots loading-lg"></span>
                </div>
            </>
        );
    }

    if (error) {
        return (
            <>
                <ErrorHero/>
            </>
        );
    }

    return (
        <>
            <main className="">
                {events.map(event => (
                    <EventCard key={event.eventid} event={event}/>
                ))}
            </main>
        </>
    );
};

export default EventsPage;
