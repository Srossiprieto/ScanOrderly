import { Check } from "lucide-react";
import { pricingData } from "./pricing.data";
import ShimmerButton from "../Ui/shimmer-button";
import { Link } from "react-router-dom";

const PricingPlans = () => {
  return (
    <div
      className=" max-w-full justify-center flex items-center flex-col md:px-12 md:py-24"
    >
      <div className="py-8 text-center justify-center items-center text-white bg-black">
        <h2 className="mb-2 text-4xl font-bold text-left">
          Planes de <span className="text-orange-300">precios</span> claros y <span className="text-orange-300">accesibles</span>  para todos.
        </h2>
        <p className="text-lg font-light text-left">
          Seleccione un <span className="font-semibold">plan adecuado</span> que
          incluya las funcionalidades más avanzadas para captar su audiencia,
          fidelizar a sus clientes y aumentar sus ventas.
        </p>
      </div>

      <div className="grid gap-3 justify-center lg:grid-cols-3 md:grid-cols-2">
        {pricingData.map((plan) => (
          <div
            key={plan.id}
            className={`p-6 border-2 rounded-xl ${
              plan.title === "Admin / vista de usuario"
                ? "border-orange-300"
                : "border-[#808080a3]"
            } relative flex flex-col gap-2 rounded-2xl border p-4 text-white overflow-hidden justify-start min-h-[500px]`}
          >
            <h4 className="text-2xl font-bold">{plan.title}</h4>
            <p className="text-white">{plan.description}</p>
            <div className="text-4xl font-bold">
              {plan.price}
              <span className="text-xs font-normal pl-1">{plan.frequency}</span>
            </div>
            <div className="flex pt-3">
              <Link to="/contact">
                <ShimmerButton className="px-4 py-2 shadow-lg">
                  <span className="text-sm font-medium leading-none tracking-tight text-center text-white whitespace-pre-wrap dark:from-white dark:to-slate-900/10 lg:text-base">
                    Contáctanos
                  </span>
                </ShimmerButton>
              </Link>
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
