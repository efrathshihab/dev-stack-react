import type { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";
import type { ITechnology } from "../../types/technology";
import StackItem from "./StackItem";

interface YourStackProps {
  selectedTechnologies: ITechnology[];
  setSelectedTechnologies: Dispatch<SetStateAction<ITechnology[]>>;
}

const YourStack = ({
  selectedTechnologies,
  setSelectedTechnologies,
}: YourStackProps) => {

  const handleRemoveAll = () => {
    setSelectedTechnologies([]);
    toast.info("All technologies removed from your stack");
  };

  return (
    <aside
      aria-labelledby="your-stack-heading"
      className="self-start rounded-2xl border border-slate-200 bg-white p-5"
    >
      <h3 id="your-stack-heading" className="text-[16px] font-semibold text-[#0F172A]">
        Your Stack
      </h3>

      <p aria-live="polite" className="mt-1 text-[12px] text-[#94A3B8]">
        {selectedTechnologies.length === 0
          ? "No technologies selected yet."
          : `${selectedTechnologies.length} Technology Selected`}
      </p>

      {selectedTechnologies.length === 0 ? (
        <p className="mt-4 rounded-xl border border-dashed border-slate-200 px-3 py-6 text-center text-[12px] text-[#94A3B8]">
          Your stack is empty.
        </p>
      ) : (
        <>
          <div className="mt-4 grid grid-cols-1 gap-3">
            {selectedTechnologies.map((technology: ITechnology) => {
              return (
                <StackItem
                  key={technology.id}
                  technology={technology}
                  selectedTechnologies={selectedTechnologies}
                  setSelectedTechnologies={setSelectedTechnologies}
                />
              );
            })}
          </div>

          <button
            type="button"
            onClick={handleRemoveAll}
            className="mt-10 min-h-[36px] w-full cursor-pointer rounded-lg border border-red-200 px-3 py-2 text-[14px] font-semibold text-red-500 transition-colors hover:bg-red-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
};

export default YourStack;
