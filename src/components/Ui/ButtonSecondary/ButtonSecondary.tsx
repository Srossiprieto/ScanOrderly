import { ChevronRight } from "lucide-react";

interface ButtonSecondaryProps {
  text: string;
}

function ButtonSecondary({ text }: ButtonSecondaryProps) {
  return (
    <button className="bg-transparent px-5 py-2 text-gray-400 rounded-full border border-transparent hover:bg-[--hover-gray-light] hover:text-[#F9FAFD] transition-all duration-300">
      <div className="flex gap-1 items-center text-center text-[16px]">
        <p className="font-medium">{text}</p>
        <span>
          <ChevronRight className="h-5 w-5 items-center " />
        </span>
      </div>
    </button>
  );
}

export default ButtonSecondary;