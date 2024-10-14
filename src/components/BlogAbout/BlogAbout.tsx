import ScanOrderlyL from "../../assets/softwareImg/ScanOrderlyL.png";
import Map from "../../assets/softwareImg/Map.webp";
import { AnimatedBeamDemo } from "../AnimatedBeamMultiple/AnimatedBeamMultiple";
// import Stars from "../../assets/Stars.webp";
// import Target from "../../assets/Target.webp";
import { BentoDemo } from "../BentoGrid/BentoGrid";
import BlurDecoration from "../BlurDecoration/BlurDecoration";
import LazyLoadYouTube from "../LazyLoadYoutube/LazyLoadYoutube";

function BlogAbout() {
  return (
    <>
      <div className="flex flex-col relative pt-6"> 
        <LazyLoadYouTube videoId="oWxFz53X_Jg" />
        <div className="flex items-center gap-2 ">
          <img src={ScanOrderlyL} alt="scanlogo" className="w-10 h-10 mt-3" />
          <h3 className="text-4xl font-bold mb-2 uppercase mt-6">
              Sobre Nosotros
          </h3>
        </div>
        <div className="relative ">
          <div className="relative">
            <p className="text-2xl font-semibold">
              En <span className="text-orange-300">ScanOrderly</span>, nos
              dedicamos a ofrecer soluciones innovadoras y eficaces para la
              gestión de tu negocio. Nuestro objetivo es facilitar el día a
              día de los negocios gastronómicos a través de una plataforma
              diseñada para optimizar procesos, ahorrar tiempo y mejorar la toma
              de decisiones. ¡Con nuestra herramienta, llevar el control de tu
              negocio nunca fue tan fácil!
            </p>
          </div>
        </div>
        <BlurDecoration className="bottom-[300px] left-[-300px]" />
        <div className="relative mt-4">
          <BentoDemo />
          <div className="relative mt-6 ">
            <h3 className="text-2xl font-bold mb-2 uppercase ">
              Nuestro Equipo
            </h3>
            <p className="text-lg font-semibold">
              Contamos con un equipo de profesionales altamente capacitados y
              comprometidos con la excelencia. Nuestros desarrolladores,
              diseñadores y especialistas en marketing trabajan juntos para
              ofrecer un servicio de calidad y adaptado a las necesidades de
              cada cliente. ¡Confía en nosotros y lleva tu negocio al
              siguiente nivel!
            </p>
          </div>
        </div>
          <img src={Map} alt="mapa"/>
        <div className="relative">
        <h3 className="text-4xl font-bold mb-2 uppercase mt-6 md:text-center">
              Tecnologias implementadas
          </h3>
          
          <AnimatedBeamDemo />
        </div>

      </div>
    </>
  );
}

export default BlogAbout;