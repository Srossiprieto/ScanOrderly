import {
  AlarmClock,
  ChartNoAxesCombinedIcon,
  DownloadIcon,
  PanelsLeftBottom,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Marquee from "../Ui/marquee";
import { AnimatedListDemo } from "../AnimatedList/AnimatedList";
import { BentoCard, BentoGrid } from "../Ui/bento-grid";
import { AnimatedBeamMultipleOutputDemo } from "../AnimatedBeam/AnimatedBeam";
import Panel from "@/assets/Panel.webp";

const files = [
  {
    name: "Menú",
    body: "La versión más reciente del menú del restaurante, incluyendo todos los platos y precios.",
  },
  {
    name: "Gráficos",
    body: "Una hoja de cálculo que contiene toda la información de los gráficos de ventas y gastos.",
  },
  {
    name: "Logo",
    body: "El logotipo del restaurante en formato Scalable Vector Graphics, adecuado para su uso en diversos materiales de marketing.",
  },
  {
    name: "Inventario",
    body: "Un archivo CSV que enumera todos los artículos de inventario actuales, cantidades y niveles de reorden.",
  },
  {
    name: "Personalizado",
    body: "Personalización de los productos, detalles, nombres, imagenes y precios.",
  },
];

const features = [
  {
    Icon: DownloadIcon,
    name: "Guardar tus estadisticas",
    description: "Descarga tus estadisticas en formato CSV y PDF.",
    href: "#",
    cta: "Ver Más",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "border-gray-50/[.1] bg-gray-50/[.10] hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium text-white ">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: ChartNoAxesCombinedIcon,
    name: "Implementaciones",
    description: "Varias funcionalidades para implementar en tu restaurante.",
    href: "#",
    cta: "Ver Más",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: AlarmClock,
    name: "Conecta con tus clientes",
    description: "Ahorra tiempo con la automatización de tus ordenes.",
    href: "#",
    cta: "Ver Más",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedBeamMultipleOutputDemo className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: PanelsLeftBottom,
    name: "Panel",
    description: "Panel de control para administrar tu restaurante.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Ver Más",
    background: (
      <div
        className="absolute right-[-50px] top-3 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
      > 
        <img src={Panel} alt="Panel" className="w-full h-[600px] object-cover [mask-image:linear-gradient(to_top,transparent_0%,#000_100%)] " />
      </div>
    ),
  },
];

export function BentoDemo() {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-4 uppercase">Características de ScanOrderly tu software de confianza.</h3>
      <BentoGrid>
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </div>
  );
}