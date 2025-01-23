// Author @yukiroow Harry Dominguez
import axios from "axios";
import SearchBar from "../components/search/SearchBar";
import ErrorHero from "../components/ErrorHero";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassMinus } from "@fortawesome/free-solid-svg-icons";
import UserSearchCard from "../components/search/UserSearchCard";
import JobSearchCard from "../components/search/JobSearchCard";
import EventSearchCard from "../components/search/EventSearchCard";
import ExperienceSearchCard from "../components/search/ExperienceSearchCard";

/**
 * The search page of the application.
 * This page does not use the Outlet approach, conditional rendering is applied.
 */
const SearchPage = () => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [filter, setFilter] = useState("users");
    const [sortOrder, setSortOrder] = useState("DESC");
    const [error, setError] = useState(false);
    const [firstRender, setFirstRender] = useState(true);
    const userid = localStorage
        .getItem("userid")
        .substring(1, localStorage.getItem("userid").length - 1);

    const fetchExperiences = async () => {
        try {
            const res = await axios.get(
                `http://localhost:2012/search/experiences/${searchQuery}`
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

            setResults(experiencesWithImages);
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (firstRender) {
            setFirstRender(false);
            return;
        }

        const fetchSearch = async () => {
            setLoading(true);
            if(searchQuery === "") return;
            try {
                if (filter === "experiences") {
                    fetchExperiences();
                    setError(false);
                    return;
                }
                const res = await axios.get(
                    `http://localhost:2012/search/${filter}/${searchQuery}?userid=${userid}`
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
    }, [searchQuery, filter, sortOrder]);

    const sortResults = (data) => {
        if (filter === "users") {
            return data.sort((a, b) => {
                const usernameA = a.username.toLowerCase();
                const usernameB = b.username.toLowerCase();
                if (sortOrder === "ASC") {
                    return usernameA.localeCompare(usernameB);
                } else {
                    return usernameB.localeCompare(usernameA);
                }
            });
        } else if (
            filter === "experiences" ||
            filter === "events" ||
            filter === "opportunities"
        ) {
            return data.sort((a, b) => {
                const timestampA = new Date(a.publishtimestamp).getTime();
                const timestampB = new Date(b.publishtimestamp).getTime();
                return sortOrder === "ASC"
                    ? timestampA - timestampB
                    : timestampB - timestampA;
            });
        }
        return data;
    };

    return (
        <>
            <SearchBar
                setSearchQuery={setSearchQuery}
                setFilter={setFilter}
                sortOrder={sortOrder}
                setSortOrder={setSortOrder}
                setResults={setResults}
            />

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
                <section className="join join-vertical px-[20%] my-10 rounded-box w-full">
                    {filter === "users"
                        ? sortResults(results).map((user, index) => (
                              <UserSearchCard key={index} user={user} />
                          ))
                        : filter === "experiences"
                        ? sortResults(results).map((experience, index) => (
                              <ExperienceSearchCard
                                  key={index}
                                  experience={experience}
                              />
                          ))
                        : filter === "events"
                        ? sortResults(results).map((event, index) => (
                              <EventSearchCard key={index} event={event} />
                          ))
                        : sortResults(results).map((opportunity, index) => (
                              <JobSearchCard key={index} job={opportunity} />
                          ))}
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
