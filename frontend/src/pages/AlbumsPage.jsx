import { useEffect, useState } from "react";
import ErrorHero from "../components/ErrorHero";
import axios from "axios";

const AlbumsPage = () => {
    const [albums, setAlbums] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAlbums = async () => {
            try {
                const res = await axios.get("http://localhost:2012/album");
                setAlbums(res.data);
            } catch (error) {
                console.log(error);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchAlbums();
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
            <main className=""></main>
        </>
    );
};

export default AlbumsPage;
