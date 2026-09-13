import { useEffect, useState } from "react";
import type { ITechnology } from "../../types/technology";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";

const Technologies = () => {
  const [technologies, setTechnologies] = useState<ITechnology[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedTechnologies, setSelectedTechnologies] = useState<
    ITechnology[]
  >([]);
  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data.json`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to load technologies");
        }
        return res.json();
      })
      .then((data: ITechnology[]) => setTechnologies(data))
      .catch(() => setError("Unable to load technologies. Please refresh to try again."))
      .finally(() => setLoading(false));
  }, []);
  return (
    <section id="technologies" className="bg-white py-16">
      <div className="container mx-auto max-w-[1216px] px-5 md:px-0">
        {/*Section Heading */}
        <div className="mb-8">
          <h2 className="text-[32px] font-bold text-[#0F172A]">
            Explore the{" "}
            <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="mt-1 text-[14px] text-[#64748B]">
            Pick the technologies to build your ideal stack.
          </p>
        </div>
        {/* Cards + Stack */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">

          {/* Technology Cards */}
          <div
            aria-busy={loading}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3"
          >
            {loading && (
              <p role="status" className="col-span-full text-[14px] text-[#64748B]">
                Loading technologies...
              </p>
            )}
            {error && <p role="alert" className="col-span-full">{error}</p>}
            {!loading && !error && technologies.length === 0 && (
              <p className="col-span-full text-[14px] text-[#64748B]">
                No technologies available.
              </p>
            )}
            {technologies.map((technology: ITechnology) => {
              return (
                <TechnologyCard
            key={technology.id}
            technology={technology}
            selectedTechnologies={selectedTechnologies}
            setSelectedTechnologies={setSelectedTechnologies}
                />
              );
            })}
          </div>
          {/* Your Stack */}
          <YourStack
            selectedTechnologies={selectedTechnologies}
            setSelectedTechnologies={setSelectedTechnologies}
          />
        </div>
      </div>
    </section>
  );
};

export default Technologies;
