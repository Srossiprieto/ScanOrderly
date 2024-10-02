import { ChevronRight } from "lucide-react";

interface ButtonPrimaryProps {
  text: string;
}

function ButtonPrimary({ text }: ButtonPrimaryProps) {
  return (
    <button className="bg-[#F9FAFD] px-5 py-2 text-[#151519] rounded-full border border-transparent hover:border-[#F9FAFD] hover:text-[#F9FAFD] hover:bg-transparent transition-all duration-300">
      <div className="flex gap-1 items-center text-center text-[16px]">
        <p className="font-medium">{text}</p>
        <span>
          <ChevronRight className="h-5 w-5 items-center " />
        </span>
      </div>
    </button>
  );
}

export default ButtonPrimary;