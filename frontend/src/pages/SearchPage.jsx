import axios from "axios";
import SearchBar from "../components/SearchBar";
import ErrorHero from "../components/ErrorHero";
import { useState, useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassMinus } from "@fortawesome/free-solid-svg-icons";

const SearchPage = () => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [filter, setFilter] = useState("users");
    const [error, setError] = useState(false);
    const [firstRender, setFirstRender] = useState(true);

    useEffect(() => {
        if (firstRender) {
            setFirstRender(false);
            return;
        }

        const fetchSearch = async () => {
            setLoading(true);
            try {
                const res = await axios.get(
                    `http://localhost:2012/search/${filter}/${searchQuery}`
                );
                setResults(res.data);
                setError(false);
            } catch (err) {
                console.log(err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchSearch();
    }, [searchQuery, filter]);

    return (
        <>
            <SearchBar setSearchQuery={setSearchQuery} setFilter={setFilter} />

            {!searchQuery ? (
                <div className="ml-[25%] mt-[10%] p-2">
                    <h1 className="text-6xl font-thin text-gray-300 select-none cursor-default">
                        Search for something.
                    </h1>
                    <h2 className="text-2xl font-thin text-gray-300 select-none cursor-default">
                        Anything.
                    </h2>
                </div>
            ) : loading ? (
                <div className="flex justify-center items-center h-96">
                    <span className="loading loading-dots loading-lg"></span>
                </div>
            ) : error ? (
                <ErrorHero />
            ) : results.length === 0 ? (
                <NoResultsHero />
            ) : (
                <section className="join join-vertical px-[25%] my-10 rounded-box">
                    {/* TODO: Card Rendering */}
                </section>
            )}
        </>
    );
};

const NoResultsHero = () => {
    return (
        <>
            <div>
                <section className="block m-auto w-2/5 mt-40">
                    <FontAwesomeIcon
                        icon={faMagnifyingGlassMinus}
                        size="10x"
                        className="text-secondary"
                    />
                </section>
                <section>
                    <div className="block m-auto w-2/5">
                        <h1 className="text-7xl mt-5 mb-5 text-secondary font-semibold">
                            There&apos;s nothing here
                        </h1>
                        <p className="text-primary font-thin mb-2">
                            Looks like that&apos;s not in the magic tank.
                        </p>
                        <p className="text-primary font-thin mb-2">
                            You can try again later.
                        </p>
                        <p className="text-primary font-thin mb-6">
                            Maybe someone&apos;s working on it right now. You
                            never know.
                        </p>
                    </div>
                </section>
            </div>
        </>
    );
};

export default SearchPage;
