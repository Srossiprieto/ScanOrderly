import ButtonPrimary from "../../components/Ui/ButtonPrimary/ButtonPrimary";
import ButtonSecondary from "../../components/Ui/ButtonSecondary/ButtonSecondary";
import { AnimatedShinyTextDemo } from "@/components/Ui/ButtonHomeShiny/ButtonShiny";
import { ParticlesDemo } from "@/components/Ui/BgParticles/BgParticles";
import SoftwareCardHome from "@/components/SoftwareCardHome/SoftwareCardHome";
import { MarqueeDemoVertical } from "@/components/Marquee/MarqueeVertical";
import { MarqueeDemo } from "@/components/Marquee/Marquee";
import Services from "@/components/pricing/pricing";

function Home() {
  return (
    <>
      <ParticlesDemo>
        <div className="relative flex mt-24 p-3 flex-col min-h-[65dvh] max-w-screen-lg mx-auto items-start justify-center text-left md:items-center md:text-center">
          <div className="flex-col max-w-[1200px] w-full items-start md:items-center">
            <AnimatedShinyTextDemo />
            <div className="flex flex-col justify-between gap-3 sm:gap-10">
              <h1 className="text-[58px] mt-4 font-semibold max-w-[800px] mx-0 md:mx-auto md:text-7xl tracking-tight leading-tight">
                  ScanOrderly
                <span className="font-bold text-7xl">.</span>
              </h1>
              <p className="max-w-[600px] mx-0 md:mx-auto text-[20px]">
               ¿Quieres impulsar tu empresa al siguiente nivel? ScanOrderly es la solución que necesitas.
              </p>
              <div className="flex justify-start gap-2 md:justify-center">
                <ButtonPrimary text="Get started free"/>
                <ButtonSecondary text="Book a demo" />
              </div>
            </div>
          </div>
          <div className="pt-10">
            <SoftwareCardHome />
          </div>
        </div>
        <div className="hidden max-w-screen-lg md:flex">
          <MarqueeDemo />
        </div>

        <MarqueeDemoVertical />
        <Services />
      </ParticlesDemo>
    </>
  );
}

export default Home;
