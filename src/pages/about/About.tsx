import { BentoDemo } from "@/components/BentoGrid/BentoGrid";

function About() {
  return (
    <div className="min-h-screen mt-[100px] bg-black text-white flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl">
        <BentoDemo />
      </div>
    </div>
  );
}

export default About;
