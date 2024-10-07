import { Check } from "lucide-react";
import { pricingData } from "./pricing.data";
// import ShinyButton from "@/components/Ui/shiny-button";
// import { Button } from "../Ui/button";
import ShimmerButton from "../Ui/shimmer-button";

const PricingPlans = () => {
  return (
    <div className="max-w-screen-2xl md:px-12 md:py-24" id="pricing">
      <div className="py-8 text-center text-white bg-black">
        <h2 className="mb-2 text-4xl font-bold">
          Precios sencillos para todos.
        </h2>
        <p className="text-lg font-light">
          Elija un <span className="font-semibold">plan accesible</span> que esté repleto de las mejores funciones para atraer a su audiencia, fidelizar a los clientes e impulsar las ventas.
        </p>
      </div>

      <div className="grid gap-3 justify-center lg:grid-cols-4 md:grid-cols-2 ">
        {pricingData.map((plan) => (
          <div
            key={plan.id}
            className={`p-6 border-2 rounded-xl ${
              plan.title === "Premium"
                ? "border-orange-300"
                : "border-[#808080a3]"
            } relative flex max-w-[400px] flex-col gap-2 rounded-2xl border p-4 text-white overflow-hidden justify-center`}
          >
            <h4 className="text-2xl font-bold">{plan.title}</h4>
            <p className=" text-white">{plan.description}</p>
            <div className="text-4xl font-bold">
              {plan.price}
              <span className="text-xs font-normal pl-1">{plan.frequency}</span>
            </div>
            <div className="flex pt-3">
              <ShimmerButton className="px-4 py-2 shadow-lg">
                <span className="text-sm font-medium leading-none tracking-tight text-center text-white whitespace-pre-wrap dark:from-white dark:to-slate-900/10 lg:text-base">
                  Subscribe
                </span>
              </ShimmerButton>
            </div>
            <hr className="mt-4 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-500/30 to-neutral-200/0" />
            <ul className="mt-6">
              {plan.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex gap-2 mb-3 items-center text-white"
                >
                  <div className="flex items-center justify-center w-5 h-5 bg-green-500 border-2 border-green-500 rounded-full">
                    <Check
                      size={14}
                      className="text-white flex justify-center items-center"
                    />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
