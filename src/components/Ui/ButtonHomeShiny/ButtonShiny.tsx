import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import AnimatedShinyText from "../animated-shiny-text";

export function AnimatedShinyTextDemo() {
  return (
    <div className="flex justify-start md:items-center md:justify-center">
      <div
     className={cn(
      "backdrop-filter-[12px] inline-flex h-7 items-center justify-between rounded-full border border-white/5 bg-white/10 px-3 text-xs text-black transition-all ease-in hover:cursor-pointer hover:bg-white/20  hover:border-white/10 group",
    )}
      >
        
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out">
          <span>✨ Descubre la magia de ScanOrderly</span>
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
        </AnimatedShinyText>
      </div>
    </div>
  );
}