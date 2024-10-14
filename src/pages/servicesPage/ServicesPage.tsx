import Restaurant3d from "@/assets/softwareImg/Restaurant3d.webp";
import Robot1 from "@/assets/softwareImg/Robot1.webp";
import Robot2 from "@/assets/softwareImg/Robot2.webp";

function ServicesPage() {
  return (
    <>
      <div className="flex justify-center min-h-dvh mt-27 ">
        <div className="flex flex-col relative pt-6 mt-10 max-w-screen-lg">
          <div className="flex items-center gap-2 p-3">
            <h3 className="text-[32px] sm:text-[48px] md:text-[58px] mt-10 font-semibold max-w-[800px] mx-0 md:mx-auto">
              <span className="bg-orange-300 text-[#723a00] rounded-lg p-1 sm:p-2 mr-2 sm:mr-4">
                Automatiza
              </span>
              procesos y marca la diferencia
              <span className="font-bold text-[32px] sm:text-[48px] md:text-[58px] text-orange-300">
                .
              </span>
            </h3>
          </div>
          <div className="flex justify-center gap-2">
            <img
              src={Restaurant3d}
              alt="Restaurant image 3d"
              className="w-full max-w-[600px] mt-10"
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-10">
            <div className="flex flex-col justify-center max-w-[500px] p-3">
              <h3 className="mt-10 font-semibold max-w-[800px] text-3xl mx-0 md:mx-auto md:text-5xl">
                Ahorra <span className="text-orange-300">tiempo</span> y{" "}
                <span className="text-orange-300">dinero</span>.
              </h3>
              <p className="max-w-[600px] mx-auto text-[16px] sm:text-[20px]">
                Contáctanos y descubre cómo nuestras soluciones pueden optimizar
                tus procesos, reducir costos y aumentar la eficiencia operativa.
                Impulsa tu negocio al siguiente nivel con nuestras
                herramientas avanzadas.
              </p>
            </div>

            <img
              src={Robot1}
              alt="Robot1 image 3d"
              className="w-full max-w-[400px] mt-10 md:mt-0"
            />
          </div>

          <div className="flex flex-col-reverse md:flex-row justify-between gap-10 p-3">
            <img
              src={Robot2}
              alt="Robot2 image 3d"
              className="w-full max-w-[400px] mt-10 md:mt-0"
            />
            <div className="flex flex-col justify-center max-w-[500px]">
              <h3 className="mt-10 font-semibold max-w-[800px] text-3xl mx-0 md:mx-auto md:text-5xl">
                Sube de nivel:{" "}
                <span className="text-orange-300">Automatiza</span> y{" "}
                <span className="text-orange-300">Controla</span> con facilidad.
              </h3>
              <p className="max-w-[600px] mx-auto text-[16px] sm:text-[20px]">
                Con nuestras soluciones, puedes optimizar tus operaciones
                diarias, reducir errores y aumentar la eficiencia. La
                automatización y el control te permiten enfocarte en lo que
                realmente importa: hacer crecer tu negocio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServicesPage;
