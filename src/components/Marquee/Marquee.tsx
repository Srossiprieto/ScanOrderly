import { cn } from "@/lib/utils";
import Marquee from "../Ui/marquee";

const reviews = [
  {
    name: "Carlos",
    username: "@carlos",
    body: "Este software ha revolucionado la forma en que gestionamos nuestro restaurante. ¡Es increíble!",
    img: "https://avatar.vercel.sh/carlos",
  },
  {
    name: "María",
    username: "@maria",
    body: "No puedo creer lo fácil que es usar este software. Ha hecho todo mucho más eficiente.",
    img: "https://avatar.vercel.sh/maria",
  },
  {
    name: "Luis",
    username: "@luis",
    body: "Desde que implementamos este software, hemos visto una mejora significativa en la organización de las órdenes.",
    img: "https://avatar.vercel.sh/luis",
  },
  {
    name: "Ana",
    username: "@ana",
    body: "El software es muy intuitivo y ha facilitado mucho nuestro trabajo diario en el restaurante.",
    img: "https://avatar.vercel.sh/ana",
  },
  {
    name: "Pedro",
    username: "@pedro",
    body: "La precisión y eficiencia de este software son impresionantes. Lo recomiendo totalmente.",
    img: "https://avatar.vercel.sh/pedro",
  },
  {
    name: "Lucía",
    username: "@lucia",
    body: "Este software ha mejorado la experiencia tanto para el personal como para los clientes. ¡Es fantástico!",
    img: "https://avatar.vercel.sh/lucia",
  },
];
const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        // "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "border-gray-50/[.1] bg-gray-50/[.10] hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative  h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background hidden md:max-w-screen-lg md:flex">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black "></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black"></div>
    </div>
  );
}
