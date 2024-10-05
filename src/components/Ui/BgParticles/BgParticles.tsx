import { useEffect, useState, ReactNode } from "react";
import { useTheme } from "next-themes";
import Particles from "../particles";

interface ParticlesDemoProps {
  children: ReactNode;
}

export function ParticlesDemo({ children }: ParticlesDemoProps) {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#ffffff");
  }, [theme]);

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background">
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
      <div>{children}</div>
    </div>
  );
}