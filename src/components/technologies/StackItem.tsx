import type { Dispatch, SetStateAction } from "react";
import { HiX } from "react-icons/hi";
import { toast } from "react-toastify";
import type { ITechnology } from "../../types/technology";

interface StackItemProps {
  technology: ITechnology;
  selectedTechnologies: ITechnology[];
  setSelectedTechnologies: Dispatch<SetStateAction<ITechnology[]>>;
}

const StackItem = ({
  technology,
  selectedTechnologies,
  setSelectedTechnologies,
}: StackItemProps) => {
  const handleRemove = () => {
    const remainingTechnologies = selectedTechnologies.filter(
      (item) => item.id !== technology.id
    );

    setSelectedTechnologies(remainingTechnologies);
    toast.info(`${technology.name} removed from your stack`);
  };

  return (
    <div className="flex items-center justify-between rounded-xl border border-slate-200 px-3 py-3">

      {/* Technology Info */}
      <div className="flex min-w-0 items-center gap-3">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-[32px] w-[32px] shrink-0 object-contain"
        />

        <div className="min-w-0">
          <h4 className="break-words text-[13px] font-semibold text-[#0F172A]">
            {technology.name}
          </h4>

          <p className="text-[11px] text-[#94A3B8]">
            {technology.category}
          </p>
        </div>
      </div>

      {/* Remove Button */}
      <button
        type="button"
        onClick={handleRemove}
        aria-label={`Remove ${technology.name} from your stack`}
        className="ml-2 flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-md text-[20px] text-slate-400 hover:bg-red-50 hover:text-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
      >
        <HiX aria-hidden="true" />
      </button>

    </div>
  );
};

export default StackItem;
