import { AnimatedBeamDemo } from "@/components/animated-beam/animated-beam";
import { ParticlesDemo } from "@/components/Ui/BgParticles/BgParticles";

function About() {
  return (
    <>
      <ParticlesDemo>
        <div className="relative flex mt-20 p-3 flex-col min-h-[65dvh] max-w-screen-lg mx-auto items-start justify-center text-left md:items-center md:text-center">
          <div className="flex-col max-w-[1200px] w-full items-start md:items-center">
            <div className="flex flex-col justify-between gap-5 sm:gap-12">
              <h1 className="text-[58px] mt-4 font-bold max-w-[800px] mx-0 md:mx-auto md:text-7xl tracking-tight leading-tight">
                ¿Quiénes somos?
              </h1>
              <p className="max-w-[700px] mx-0 md:mx-auto text-[22px] leading-relaxed">
                Somos una empresa de tecnología comprometida con optimizar la
                eficiencia de los procesos empresariales mediante soluciones
                innovadoras. Nuestro enfoque se centra en la digitalización de
                los datos de las organizaciones y la automatización inteligente
                de sus flujos de trabajo. Creemos en la mejora continua como
                pilar fundamental para impulsar el éxito de nuestros clientes,
                ayudándolos a adaptarse a los retos del mundo digital de manera
                ágil y efectiva.
              </p>
            </div>
          </div>

          <div className="pt-12">
            <h2 className="text-[36px] font-semibold max-w-[800px] mx-0 md:mx-auto md:text-4xl tracking-tight leading-tight">
              Nuestro equipo
            </h2>
            <p className="max-w-[700px] mx-0 md:mx-auto text-[22px] leading-relaxed">
              Nuestro equipo está compuesto por dos desarrolladores apasionados
              por las tecnologías web. Con experiencia en metodologías ágiles,
              trabajamos de la mano con nuestros clientes para desarrollar
              soluciones a medida que mejoren sus procesos internos. En
              ScanOrderly, nuestra misión es asegurar que la experiencia del
              usuario no solo cumpla, sino que supere las expectativas. Nos
              mantenemos en constante evolución para ofrecer herramientas que
              hagan la vida más fácil y eficiente a nuestros clientes.
            </p>
            <div className="mt-5">
              <div>Visita nuestros portafolios:</div>
              <a
                href="https://santinorossi.vercel.app/"
                target="_blank"
                className="text-blue-500 underline transition-all duration-300 ease-in-out hover:text-blue-700"
              >
                Santino Rossi
              </a>
              &nbsp;&&nbsp;
              <a
                href="https://portfolio-juanescode.netlify.app/"
                target="_blank"
                className="text-blue-500 underline transition-all duration-300 ease-in-out hover:text-blue-700"
              >
                JuanesCode
              </a>
            </div>
          </div>

          <div className="pt-12">
            <h2 className="text-[36px] font-semibold max-w-[800px] mx-0 md:mx-auto md:text-4xl tracking-tight leading-tight">
              Tecnologías que componen la creacion de ScanOrderly
            </h2>
            <p className="max-w-[700px] mx-0 md:mx-auto text-[22px] leading-relaxed">
              En ScanOrderly, nos apoyamos en un conjunto de tecnologías
              modernas y potentes para ofrecer soluciones eficientes y
              escalables. Estas herramientas nos permiten crear productos que no
              solo funcionan, sino que también ofrecen una experiencia de
              usuario excelente. Aquí están algunas de las tecnologías clave que
              utilizamos:
            </p>
            <AnimatedBeamDemo />
          </div>
        </div>
      </ParticlesDemo>
    </>
  );
}

export default About;
