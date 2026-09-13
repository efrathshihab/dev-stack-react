import type { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";
import type { ITechnology } from "../../types/technology";

interface TechnologyCardProps {
  technology: ITechnology;
  selectedTechnologies: ITechnology[];
  setSelectedTechnologies: Dispatch<SetStateAction<ITechnology[]>>;
}

const TechnologyCard = ({
  technology,
  selectedTechnologies,
  setSelectedTechnologies,
}: TechnologyCardProps) => {
  const isAdded = selectedTechnologies.some(
    (item) => item.id === technology.id
  );

  const handleAddTechnology = () => {
    if (isAdded) {
      toast.warn(`${technology.name} is already in your stack!`);
      return;
    }

    setSelectedTechnologies([
      ...selectedTechnologies,
      technology,
    ]);
    toast.success(`${technology.name} added to your stack`);
  };

  return (
    <div
      className={`rounded-2xl border bg-white p-5 transition duration-200 ease-out hover:shadow-lg hover:shadow-indigo-500/10 focus-within:shadow-md active:shadow-sm motion-safe:hover:-translate-y-1 motion-safe:active:translate-y-0 motion-safe:active:scale-[0.98] motion-reduce:transition-none ${
        isAdded
          ? "border-pink-300"
          : "border-gray-200 hover:border-indigo-300 focus-within:border-indigo-300 active:border-indigo-300"
      }`}
    >

      {/* Icon + Badge */}
      <div className="flex items-center justify-between">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-8 w-8"
        />

        <span className="rounded-full bg-indigo-50 px-3 py-1 text-[11px] text-indigo-600">
          {technology.badge}
        </span>
      </div>

      {/* Name */}
      <h3 className="mt-5 text-[20px] font-bold text-[#0F172A]">
        {technology.name}
      </h3>

      {/* Description */}
      <p className="mt-3 text-[14px] leading-6 text-[#64748B]">
        {technology.description}
      </p>

      {/* Technology Info */}
      <div className="mt-5 flex items-center justify-between text-[12px]">
        <span className="rounded-md bg-gray-100 px-2 py-1 text-[#475569]">
          {technology.category}
        </span>

        <span className="text-[#64748B]">
          {technology.difficulty}
        </span>

        <span>
          <span className="text-yellow-400">★</span>{" "}
          {technology.rating}
        </span>
      </div>

      {/* Add Button */}
      <button
        type="button"
        onClick={handleAddTechnology}
        disabled={isAdded}
        className={`mt-5 h-[40px] w-full rounded-lg text-[14px] font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500 ${
          isAdded
            ? "cursor-not-allowed bg-pink-50 text-pink-600"
            : "cursor-pointer bg-[#080F1F] text-white"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>

    </div>
  );
};

export default TechnologyCard;
