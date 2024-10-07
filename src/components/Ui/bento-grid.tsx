import { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}: {
  name: string;
  className: string;
  background?: ReactNode;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  description: string;
  href: string;
  cta: string;
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
      // light styles
      // "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles
      "transform-gpu bg-black [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className
    )}
  >
    <div>{background}</div>
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
      <Icon className="h-12 w-12 origin-left transform-gpu text-white transition-all duration-300 ease-in-out group-hover:scale-75" />
      <h3 className="text-xl font-semibold  text-neutral-300">
        {name}
      </h3>
      <p className="max-w-lg text-neutral-400">{description}</p>
    </div>

    <div
      className={cn(
        "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
      )}
    >
      <button className="pointer-events-auto">
        <div className="items-center bg-transparent px-3 py-1 text-gray-400 rounded-full border border-transparent hover:bg-[--hover-gray-light] hover:text-[#F9FAFD] transition-all duration-300 flex text-sm gap-2"> 
          <a href={href}>{cta}</a>
          <ChevronRight className="w-4 h-4" />
        </div>
      </button>
    </div>
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-neutral-800/10" />
  </div>
);

export { BentoCard, BentoGrid };
