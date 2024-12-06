import axios from "axios";
import { useEffect, useState } from "react";
import ErrorHero from "../components/ErrorHero";
import ExperienceSearchCard from "../components/search/ExperienceSearchCard";

const ExperiencesPage = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const res = await axios.get("http://localhost:2012/experiences");
        setExperiences(res.data);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchExperiences();
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
      <main className="">
        <section className="join join-vertical px-[25%] my-10 rounded-box">
          {experiences.map((xp) => (
            <ExperienceSearchCard experience={xp} />
          ))}
        </section>
      </main>
    </>
  );
};

export default ExperiencesPage;
