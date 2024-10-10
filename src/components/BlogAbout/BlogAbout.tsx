import ScanOrderlyL from "../../assets/ScanOrderlyL.png";
import { AnimatedBeamDemo } from "../AnimatedBeamMultiple/AnimatedBeamMultiple";
// import Stars from "../../assets/Stars.webp";
// import Target from "../../assets/Target.webp";
import { BentoDemo } from "../BentoGrid/BentoGrid";
import BlurDecoration from "../BlurDecoration/BlurDecoration";

function BlogAbout() {
  return (
    <>
      <div className="flex flex-col relative ">
        <div className="flex items-center gap-2">
          <img src={ScanOrderlyL} alt="scanlogo" className="w-10 h-10 mt-3" />
          <h3 className="text-2xl font-bold mb-2 uppercase mt-6">
              Sobre Nosotros
          </h3>
        </div>
        <div className="relative">
          <div className="relative">
            <p className="text-lg font-semibold">
              En <span className="text-blue-300">ScanOrderly</span>, nos
              dedicamos a ofrecer soluciones innovadoras y eficaces para la
              gestión de restaurantes. Nuestro objetivo es facilitar el día a
              día de los negocios gastronómicos a través de una plataforma
              diseñada para optimizar procesos, ahorrar tiempo y mejorar la toma
              de decisiones. ¡Con nuestra herramienta, llevar el control de tu
              restaurante nunca fue tan fácil!
            </p>
          </div>
        </div>
        <BlurDecoration className="bottom-[300px] left-[-300px]" />
        <div className="relative mt-4">
          <BentoDemo />
          <div className="relative">
            <h3 className="text-2xl font-bold mb-2 uppercase ">
              Nuestro Equipo
            </h3>
            <p className="text-lg font-semibold">
              En <span className="text-blue-400">ScanOrderly</span>, contamos
              con un equipo de profesionales altamente capacitados y
              comprometidos con la excelencia. Nuestros desarrolladores,
              diseñadores y especialistas en marketing trabajan juntos para
              ofrecer un servicio de calidad y adaptado a las necesidades de
              cada cliente. ¡Confía en nosotros y lleva tu restaurante al
              siguiente nivel!
            </p>
          </div>
        </div>
        <div className="relative z-0 ">
          <AnimatedBeamDemo/>
        </div>
      </div>
    </>
  );
}

export default BlogAbout;