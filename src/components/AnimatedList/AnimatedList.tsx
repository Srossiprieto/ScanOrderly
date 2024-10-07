

import { cn } from "@/lib/utils";
import { AnimatedList } from "../Ui/animated-list";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
    {
      name: "Nueva Orden",
      description: "Orden de cliente",
      time: "15m ago",
      icon: "🍽️",
      color: "#f98526",
    },
    {
      name: "Control de Gastos y Stock",
      description: "Manten tu inventario actualizado!",
      time: "10m ago",
      icon: "📅",
      color: "#71c05b",
    },
    {
      name: "Productos Modificables",
      description: "Personaliza a tu estilo!",
      time: "5m ago",
      icon: "🛍️",
      color: "#ff6890",
    },
    {
      name: "Panel Administrador",
      description: "Administra tu restaurante",
      time: "2m ago",
      icon: "🔒",
      color: "#434343",
    },
    {
      name: "Clientes",
      description: "Iniciar sesión para desbloquear favoritos",
      time: "1h ago",
      icon: "👤",
      color: "#4fd8fa",
    },
    {
      name: "Favoritos",
      description: "Guarda tus platos/productos favoritos",
      time: "30m ago",
      icon: "❤️",
      color: "#bcbcbc",
    },
  ];


notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        // "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu bg-transparent backdrop-blur-md [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListDemo({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col p-6 overflow-hidden rounded-lg border bg-background md:shadow-xl",
        className,
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
