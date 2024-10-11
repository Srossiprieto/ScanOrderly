import { ReactNode } from "react";
import { BorderBeam } from "../border-beam";

interface BorderBeamDemoProps {
  children: ReactNode;
}

export function BorderBeamDemo({ children }: BorderBeamDemoProps) {
  return (
    <>
      <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-xl border border-[#adadad30] bg-background md:h-[475px] min-h-full min-w-full">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b bg-clip-text text-center text-8xl font-semibold leading-none text-transparent from-gray-600 to-slate-900/10">
          {children}
        </span>
        <BorderBeam size={150} duration={12} delay={9} />
      </div>
      <div className="shadow-effect"></div>
    </>
  );
}
