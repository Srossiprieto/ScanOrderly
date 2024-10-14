import ButtonPrimary from "../../components/Ui/ButtonPrimary/ButtonPrimary";
import ButtonSecondary from "../../components/Ui/ButtonSecondary/ButtonSecondary";
import { AnimatedShinyTextDemo } from "@/components/Ui/ButtonHomeShiny/ButtonShiny";
import { ParticlesDemo } from "@/components/Ui/BgParticles/BgParticles";
import SoftwareCardHome from "@/components/SoftwareCardHome/SoftwareCardHome";
import { MarqueeDemoVertical } from "@/components/Marquee/MarqueeVertical";
import { MarqueeDemo } from "@/components/Marquee/Marquee";
import BlurCircle from "@/components/BlurCicle/BlurCircle";
import { BentoDemo } from "@/components/BentoGrid/BentoGrid";
import PricingPlans from "@/components/pricing/pricing";
import ContactForm from "@/components/ContactForm/ContactForm";
import BlurCircleDecoration from "@/components/BlurCicleDecoration/BlurCircleDecoration";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <ParticlesDemo>
        <div className="relative flex mt-24 p-3 flex-col min-h-full max-w-screen-lg mx-auto items-start justify-center text-left md:items-center md:text-center">
          <div className="flex-col max-w-[1200px] w-full items-start md:items-center">
            <AnimatedShinyTextDemo />
            <div className="flex flex-col justify-between gap-3 sm:gap-10">
              <h1 className="text-[58px] mt-4 font-semibold max-w-[800px] mx-0 md:mx-auto md:text-7xl tracking-tight leading-tight">
                Software Para Restaurantes
                <span className="font-bold text-7xl">.</span>
              </h1>
              <p className="max-w-[600px] mx-0 md:mx-auto text-[20px]">
                Simplifica y optimiza tus procesos mediante un qr y acelera tus
                ordenes con nuestra solución avanzada. Diseñado para ofrecer
                eficiencia y precisión.
                <span className="text-orange-300">
                 {" "}Software a medida para tu negocio.
                </span>
              </p>
              <div className="flex justify-start gap-2 md:justify-center">
                <Link to='/contact'>
                <ButtonPrimary text="Contáctanos" />
                </Link>
                <Link to='/about'>
                <ButtonSecondary text="Sobre Nosotros" />
                </Link>
              </div>
            </div>
          </div>

          <div className="py-32">
            <BlurCircle>
              <SoftwareCardHome />
            </BlurCircle>
          </div>
        </div>
      </ParticlesDemo>
      <div className="relative flex p-3 flex-col min-h-[65dvh] max-w-screen-lg mx-auto justify-center">
      <h3 className="text-2xl font-bold mb-4 uppercase">Características de ScanOrderly tu software de confianza.</h3>
        <BentoDemo></BentoDemo>
      </div>
      <div className="relative flex p-3 flex-col min-h-[65dvh] max-w-screen-2xl mx-auto items-center justify-center text-left">
        <PricingPlans />
      </div>
      <div className="flex justify-center items-center min-h-[65vh] mt-[100px]">
        <div className="w-full max-w-lg p-3">
          <BlurCircleDecoration/>
          <ContactForm />
        </div>
      </div>
      <div className="relative flex p-3 flex-col min-h-[65dvh] max-w-screen-lg mx-auto items-start justify-center text-left md:items-center md:text-center">
        <MarqueeDemo />
        <MarqueeDemoVertical />
      </div>
    </>
  );
}

export default Home;
