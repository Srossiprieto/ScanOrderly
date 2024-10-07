import { cn } from "@/lib/utils";
import Marquee from "../Ui/marquee";


const reviews = [
  {
    name: "Omar",
    username: "@omarCourt",
    body: "La aplicacion es muy intuitiva y facil de usar, me encanta.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Daniel",
    username: "@danielPerez",
    body: "A mis clientes les encanta pedir por la aplicacion.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Ingaj",
    username: "@Ingaj",
    body: "La aplicacion me ayuda a llevar todos mis ventas y gastos mas de cerca.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Paulo",
    username: "@PauloAlvarez",
    body: "Me encanta la aplicacion, me ayuda a llevar un mejor control de mis ventas.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "VikingRoom",
    username: "@vikingroom",
    body: "La aplicacion me ayuda a llevar un control de mi inventario mas organizado.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "PizzaShop",
    username: "@pizzashop",
    body: "Me encanta que puedo llevar todas mis ventas dia por dia y mes a mes.",
    img: "https://avatar.vercel.sh/john",
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
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
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
      <div className="absolute inset-y-0 left-0 w-1/3 pointer-events-none bg-gradient-to-r from-black "></div>
      <div className="absolute inset-y-0 right-0 w-1/3 pointer-events-none bg-gradient-to-l from-black"></div>
    </div>
  );
}
