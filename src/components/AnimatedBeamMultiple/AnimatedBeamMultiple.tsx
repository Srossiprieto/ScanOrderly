import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "../Ui/animated-beam";
import ScanOrderlyL from "../../assets/ScanOrderlyL.png";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function AnimatedBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg  bg-background md:shadow-xl"
      ref={containerRef}
    >
      <div className="flex size-full flex-col max-w-lg max-h-[200px] items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref}>
            <Icons.prisma />
          </Circle>
          <Circle ref={div5Ref}>
            <Icons.nextjs />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref}>
            <Icons.shadcn />
          </Circle>
          <Circle ref={div4Ref} className="size-16">
            <img src={ScanOrderlyL} />
          </Circle>
          <Circle ref={div6Ref}>
            <Icons.postgresql />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref}>
            <Icons.typescript />
          </Circle>
          <Circle ref={div7Ref}>
            <Icons.tailwind />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
    </div>
  );
}

const Icons = {
  prisma: () => (
    <svg
      width="800px"
      height="800px"
      viewBox="-27 0 310 310"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      fill="#000000"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0" />

      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      />

      <g id="SVGRepo_iconCarrier">
        {" "}
        <g>
          {" "}
          <path
            d="M254.312882,235.518775 L148.000961,9.74987264 C145.309805,4.08935083 139.731924,0.359884549 133.472618,0.0359753113 C127.198908,-0.384374336 121.212054,2.71925839 117.939655,8.08838662 L2.63252565,194.847143 C-0.947129465,200.604248 -0.871814894,207.912774 2.8257217,213.594888 L59.2003287,300.896318 C63.5805009,307.626626 71.8662281,310.673635 79.5631922,308.384597 L243.161606,259.992851 C248.145475,258.535702 252.252801,254.989363 254.421072,250.271225 C256.559881,245.57581 256.523135,240.176915 254.32061,235.511047 L254.312882,235.518775 Z M230.511129,245.201761 L91.6881763,286.252058 C87.4533189,287.511696 83.388474,283.840971 84.269448,279.567474 L133.866738,42.0831633 C134.794079,37.6396542 140.929985,36.9364206 142.869673,41.0476325 L234.684164,236.021085 C235.505704,237.779423 235.515611,239.809427 234.711272,241.575701 C233.906934,243.341974 232.369115,244.667163 230.503401,245.201761 L230.511129,245.201761 Z"
            fill="#000000"
            fill-rule="nonzero"
          >
            {" "}
          </path>{" "}
        </g>{" "}
      </g>
    </svg>
  ),

  nextjs: () => (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0)">
        <path
          d="M11.2141 0.00645944C11.1625 0.0111515 10.9982 0.0275738 10.8504 0.039304C7.44164 0.346635 4.24868 2.18593 2.22639 5.01291C1.10029 6.58476 0.380059 8.36775 0.107918 10.2563C0.0117302 10.9156 0 11.1103 0 12.0041C0 12.898 0.0117302 13.0927 0.107918 13.7519C0.760117 18.2587 3.96716 22.0452 8.31672 23.4481C9.0956 23.6991 9.91672 23.8704 10.8504 23.9736C11.2141 24.0135 12.7859 24.0135 13.1496 23.9736C14.7613 23.7953 16.1267 23.3965 17.4733 22.7091C17.6798 22.6035 17.7196 22.5754 17.6915 22.5519C17.6727 22.5378 16.793 21.3578 15.7372 19.9314L13.8182 17.339L11.4135 13.7801C10.0903 11.8235 9.00176 10.2235 8.99238 10.2235C8.98299 10.2211 8.97361 11.8024 8.96891 13.7331C8.96188 17.1138 8.95953 17.2499 8.9173 17.3296C8.85631 17.4446 8.80938 17.4915 8.71085 17.5431C8.63578 17.5807 8.57009 17.5877 8.21584 17.5877H7.80997L7.70205 17.5197C7.63167 17.4751 7.58006 17.4164 7.54487 17.3484L7.4956 17.2428L7.50029 12.539L7.50733 7.83285L7.58006 7.74136C7.6176 7.69209 7.69736 7.62875 7.75367 7.59825C7.84985 7.55133 7.88739 7.54664 8.29325 7.54664C8.77185 7.54664 8.85161 7.5654 8.97595 7.70147C9.01114 7.73901 10.3132 9.7003 11.871 12.0628C13.4287 14.4252 15.5589 17.651 16.6053 19.2346L18.5056 22.1132L18.6018 22.0499C19.4534 21.4962 20.3543 20.7079 21.0674 19.8868C22.5853 18.1437 23.5636 16.0182 23.8921 13.7519C23.9883 13.0927 24 12.898 24 12.0041C24 11.1103 23.9883 10.9156 23.8921 10.2563C23.2399 5.74957 20.0328 1.96306 15.6833 0.560125C14.9161 0.311445 14.0997 0.140184 13.1848 0.036958C12.9595 0.0134976 11.4088 -0.0123089 11.2141 0.00645944ZM16.1267 7.26511C16.2393 7.32142 16.3308 7.42933 16.3636 7.54194C16.3824 7.60294 16.3871 8.90734 16.3824 11.8469L16.3754 16.0651L15.6317 14.9249L14.8856 13.7848V10.7185C14.8856 8.73608 14.895 7.62171 14.9091 7.56775C14.9466 7.43637 15.0287 7.33315 15.1413 7.27215C15.2375 7.22288 15.2727 7.21819 15.6411 7.21819C15.9883 7.21819 16.0493 7.22288 16.1267 7.26511Z"
          fill="#000000"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),

  shadcn: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className="h-6 w-6 text-black"
    >
      <rect width={256} height={256} fill="none" />
      <line
        x1={208}
        y1={128}
        x2={128}
        y2={208}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <line
        x1={192}
        y1={40}
        x2={40}
        y2={192}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </svg>
  ),

  tailwind: () => (
    <svg
    className="w-6 h-6 text-[#06B6D4]"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M11.782 5.72a4.773 4.773 0 0 0-4.8 4.173 3.43 3.43 0 0 1 2.741-1.687c1.689 0 2.974 1.972 3.758 2.587a5.733 5.733 0 0 0 5.382.935c2-.638 2.934-2.865 3.137-3.921-.969 1.379-2.44 2.207-4.259 1.231-1.253-.673-2.19-3.438-5.959-3.318ZM6.8 11.979A4.772 4.772 0 0 0 2 16.151a3.431 3.431 0 0 1 2.745-1.687c1.689 0 2.974 1.972 3.758 2.587a5.733 5.733 0 0 0 5.382.935c2-.638 2.933-2.865 3.137-3.921-.97 1.379-2.44 2.208-4.259 1.231-1.253-.673-2.19-3.443-5.963-3.317Z" />
  </svg>
  ),

  typescript: () => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-label="TypeScript"
    role="img"
    viewBox="0 0 512 512"
    fill="#000000"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g id="SVGRepo_iconCarrier">
      <rect width={512} height={512} rx="15%" fill="#3178c6" />
      <path
        fill="#ffffff"
        d="m233 284h64v-41H118v41h64v183h51zm84 173c8.1 4.2 18 7.3 29 9.4s23 3.1 35 3.1c12 0 23-1.1 34-3.4c11-2.3 20-6.1 28-11c8.1-5.3 15-12 19-21s7.1-19 7.1-32c0-9.1-1.4-17-4.1-24s-6.6-13-12-18c-5.1-5.3-11-10-18-14s-15-8.2-24-12c-6.6-2.7-12-5.3-18-7.9c-5.2-2.6-9.7-5.2-13-7.8c-3.7-2.7-6.5-5.5-8.5-8.4c-2-3-3-6.3-3-10c0-3.4.89-6.5 2.7-9.3s4.3-5.1 7.5-7.1c3.2-2 7.2-3.5 12-4.6c4.7-1.1 9.9-1.6 16-1.6c4.2 0 8.6.31 13 .94c4.6.63 9.3 1.6 14 2.9c4.7 1.3 9.3 2.9 14 4.9c4.4 2 8.5 4.3 12 6.9v-47c-7.6-2.9-16-5.1-25-6.5s-19-2.1-31-2.1c-12 0-23 1.3-34 3.8s-20 6.5-28 12c-8.1 5.4-14 12-19 21c-4.7 8.4-7 18-7 30c0 15 4.3 28 13 38c8.6 11 22 19 39 27c6.9 2.8 13 5.6 19 8.3s11 5.5 15 8.4c4.3 2.9 7.7 6.1 10 9.5c2.5 3.4 3.8 7.4 3.8 12c0 3.2-.78 6.2-2.3 9s-3.9 5.2-7.1 7.2s-7.1 3.6-12 4.8c-4.7 1.1-10 1.7-17 1.7c-11 0-22-1.9-32-5.7c-11-3.8-21-9.5-28.1-15.44z"
      />
    </g>
  </svg>
  ),

  postgresql: () => (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{"file_type_pgsql"}</title>
      <path d="M29.507,18.773a1.378,1.378,0,0,0-1.144-.921,2.619,2.619,0,0,0-.913.051,8.2,8.2,0,0,1-1.406.185,27.125,27.125,0,0,0,2.872-6.83c.953-3.689.444-5.369-.151-6.13A8.239,8.239,0,0,0,22.121,2a11.773,11.773,0,0,0-3.453.484A12.858,12.858,0,0,0,16.648,2.3a6.565,6.565,0,0,0-3.518.867,16.039,16.039,0,0,0-2.484-.624,7.694,7.694,0,0,0-5.819.924C3.093,4.691,2.289,6.819,2.438,9.792A36.351,36.351,0,0,0,3.844,16.33a22.579,22.579,0,0,0,1.514,3.863A4.786,4.786,0,0,0,7.8,22.742a2.4,2.4,0,0,0,2.379-.516,2.08,2.08,0,0,0,.5.43,3.328,3.328,0,0,0,.944.4,5.069,5.069,0,0,0,3.3-.2c.006.171.011.335.014.477.006.229.013.454.021.665a11.641,11.641,0,0,0,.441,3.3c.016.043.037.107.059.176a3.975,3.975,0,0,0,.991,1.745,2.955,2.955,0,0,0,2.09.777,4.7,4.7,0,0,0,.977-.109A4.592,4.592,0,0,0,22.607,28.1c.811-1.155,1.206-2.894,1.277-5.635.009-.078.018-.152.026-.222l.017-.145.191.017.049,0a7.562,7.562,0,0,0,3.163-.548c.631-.293,2.654-1.361,2.177-2.8" />
      <path
        d="M27.689,19.053c-3.163.652-3.38-.418-3.38-.418C27.648,13.68,29.044,7.39,27.839,5.851c-3.286-4.2-8.975-2.213-9.07-2.162l-.031.006a11.28,11.28,0,0,0-2.11-.22,5.212,5.212,0,0,0-3.34,1S3.14.294,3.612,9.733c.1,2.008,2.878,15.194,6.191,11.211,1.211-1.456,2.381-2.688,2.381-2.688a3.071,3.071,0,0,0,2.006.512l.057-.048a2.21,2.21,0,0,0,.023.567c-.854.954-.6,1.121-2.309,1.472-1.726.356-.712.989-.05,1.155a3.508,3.508,0,0,0,3.915-1.272l-.05.2c.334.268.569,1.742.53,3.079a8.481,8.481,0,0,0,.2,2.971c.264.717.526,2.329,2.769,1.849a3.307,3.307,0,0,0,2.98-3.179c.1-1.234.313-1.052.326-2.155l.174-.522c.2-1.673.032-2.213,1.186-1.962l.281.025a6.4,6.4,0,0,0,2.615-.44c1.406-.652,2.239-1.742.853-1.455h0"
        style={{
          fill: "#336791",
        }}
      />
      <path
        d="M13.882,10.631a.981.981,0,0,0-.674.1.247.247,0,0,0-.1.164.48.48,0,0,0,.117.314.881.881,0,0,0,.559.349.637.637,0,0,0,.09.006.725.725,0,0,0,.687-.467c.035-.248-.326-.414-.676-.463m9.442.008c-.027-.195-.374-.25-.7-.2s-.647.194-.62.389a.667.667,0,0,0,.62.411.592.592,0,0,0,.083-.006.8.8,0,0,0,.451-.247.5.5,0,0,0,.169-.343"
        style={{
          fill: "#fff",
        }}
      />
      <path
        d="M28.741,18.979c-.121-.365-.509-.482-1.154-.349-1.915.4-2.6.121-2.826-.044a26.327,26.327,0,0,0,3.373-7.565,14.374,14.374,0,0,0,.5-3.253,3.513,3.513,0,0,0-.509-2.2,7.482,7.482,0,0,0-6.049-2.825,10.363,10.363,0,0,0-3.5.551,8.717,8.717,0,0,0-1.968-.253,5.684,5.684,0,0,0-3.372.929,15.051,15.051,0,0,0-2.74-.718,6.978,6.978,0,0,0-5.242.805c-1.5,1.064-2.2,2.966-2.061,5.653a35.489,35.489,0,0,0,1.373,6.348c1.07,3.505,2.233,5.49,3.457,5.9a1.548,1.548,0,0,0,.491.081,2.049,2.049,0,0,0,1.563-.886q1.042-1.25,2.155-2.438a3.472,3.472,0,0,0,1.55.417l0,.042q-.14.166-.273.338c-.375.475-.452.574-1.658.823-.343.071-1.254.259-1.267.9-.014.7,1.077.991,1.2,1.022a5.144,5.144,0,0,0,1.249.162,3.634,3.634,0,0,0,2.5-.934,23.674,23.674,0,0,0,.381,5.684,2.854,2.854,0,0,0,2.729,2.1,4.378,4.378,0,0,0,.917-.1,3.462,3.462,0,0,0,3.156-3.212c.177-1.026.481-3.475.624-4.789a3.859,3.859,0,0,0,1.11.137,6.6,6.6,0,0,0,2.519-.48c.712-.331,2-1.141,1.763-1.846ZM24.051,10.1a7.968,7.968,0,0,1-.116,1.107,10.229,10.229,0,0,0-.14,1.3,9.859,9.859,0,0,0,.1,1.47,5.236,5.236,0,0,1-.229,2.986,3.882,3.882,0,0,1-.207-.426c-.058-.141-.185-.368-.359-.681-.68-1.22-2.274-4.078-1.458-5.244.243-.347.86-.7,2.408-.512ZM22.174,3.531a6.617,6.617,0,0,1,5.334,2.522c.975,1.245-.1,6.912-3.205,11.8l-.094-.119-.039-.049a5.524,5.524,0,0,0,.506-3.8,9.114,9.114,0,0,1-.1-1.352,9.572,9.572,0,0,1,.131-1.206,7.614,7.614,0,0,0,.123-1.493.619.619,0,0,0,.013-.21,8.381,8.381,0,0,0-1.912-3.6,8.61,8.61,0,0,0-3.039-2.284,10.246,10.246,0,0,1,2.28-.214ZM9.479,20.654c-.627.754-1.061.61-1.2.562-.928-.31-2.006-2.272-2.955-5.384a35.167,35.167,0,0,1-1.34-6.159c-.12-2.4.462-4.074,1.73-4.974,2.063-1.463,5.456-.587,6.819-.143-.02.019-.04.037-.059.057-2.237,2.259-2.184,6.119-2.178,6.355,0,.091.007.22.018.4a15.969,15.969,0,0,1-.081,3.226A4.08,4.08,0,0,0,11.3,18.007q.133.138.278.262c-.383.41-1.216,1.318-2.1,2.385Zm2.39-3.19a3.3,3.3,0,0,1-.865-2.764,16.7,16.7,0,0,0,.087-3.381c-.006-.095-.011-.178-.014-.243A4.3,4.3,0,0,1,14,10.223a1.188,1.188,0,0,1,.918,1.026c.646,2.989.085,4.234-.365,5.235-.093.206-.181.4-.255.6l-.058.156a10.218,10.218,0,0,0-.368,1.109,2.788,2.788,0,0,1-2-.887Zm.113,4.03a1.733,1.733,0,0,1-.523-.225,2.553,2.553,0,0,1,.557-.166c1.418-.292,1.637-.5,2.116-1.105.11-.139.234-.3.406-.489h0c.256-.287.374-.238.586-.15a.829.829,0,0,1,.408.525.585.585,0,0,1-.05.491A3.1,3.1,0,0,1,11.983,21.495ZM19.406,28.4a2.113,2.113,0,0,1-2.754-1.526,31.129,31.129,0,0,1-.3-6.853.392.392,0,0,0-.017-.124,1.643,1.643,0,0,0-.048-.23,1.589,1.589,0,0,0-.862-1.034,1.216,1.216,0,0,0-.793-.1,9.586,9.586,0,0,1,.342-1.022l.058-.157c.066-.177.148-.36.235-.554.471-1.047,1.117-2.482.416-5.722a2.044,2.044,0,0,0-2.468-1.669A5.694,5.694,0,0,0,11.328,10c-.078.04-.15.078-.216.115A8.244,8.244,0,0,1,13.03,5.163,4.711,4.711,0,0,1,16.6,3.827,7.567,7.567,0,0,1,22.381,6.59,8.774,8.774,0,0,1,23.963,9.3c-1.463-.149-2.458.14-2.962.861-1.1,1.568.6,4.612,1.416,6.075.15.268.279.5.319.6a5.432,5.432,0,0,0,.861,1.387c.077.1.152.189.208.271-.443.128-1.239.423-1.166,1.9-.058.74-.474,4.205-.686,5.43-.279,1.617-.874,2.22-2.548,2.579Zm7.242-8.288a5.714,5.714,0,0,1-1.931.4,2.422,2.422,0,0,1-1.3-.167c-.045-.919.3-1.015.66-1.117.057-.016.112-.032.166-.05a1.353,1.353,0,0,0,.11.08c.639.422,1.78.467,3.39.135l.018,0a4.334,4.334,0,0,1-1.116.72Z"
        style={{
          fill: "#fff",
        }}
      />
    </svg>
  ),
};
