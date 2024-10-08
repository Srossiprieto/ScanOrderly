import { VelocityScroll } from "../Ui/scroll-based-velocity";

export function ScrollBasedVelocityDemo() {
  return (
    <div className="w-full h-screen placeholder:flex items-center justify-center">
      <VelocityScroll
        text="ScanOrderly "
        default_velocity={3}
        className="font-display text-center text-4xl font-bold tracking-[-0.02em] drop-shadow-sm text-[#80808021] md:text-7xl md:leading-[5rem]"
      />
    </div>
  );
}