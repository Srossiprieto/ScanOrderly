import { Check } from "lucide-react";
import { pricingData } from "./pricing.data";
// import ShinyButton from "@/components/Ui/shiny-button";
// import { Button } from "../Ui/button";
import { Separator } from "../Ui/separator";
import ShimmerButton from "../Ui/shimmer-button";

const PricingPlans = () => {
  return (
    <div className="max-w-5xl p-6 mx-auto md:px-12 md:py-24" id="pricing">
      <div className="py-8 text-center text-white bg-black">
        <h2 className="mb-2 text-4xl font-bold">
          Simple pricing for everyone.
        </h2>
        <p className="text-lg font-light">
          Choose an <span className="font-semibold">affordable plan</span>{" "}
          that's packed with the best features for engaging your audience,
          creating customer loyalty, and driving sales.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        {pricingData.map((plan) => (
          <div
            key={plan.id}
            className={`p-6 border-2 rounded-xl ${
              plan.title === "Premium"
                ? "border-yellow-500"
                : "border-slate-400"
            } dark:bg-slate-800 h-fit`}
          >
            <h4 className="mb-2 text-2xl font-semibold">{plan.title}</h4>
            <p className="mb-4 text-gray-500">{plan.description}</p>
            <div className="text-4xl font-bold">
              {plan.price}
              <span className="text-lg font-normal">{plan.frequency}</span>
            </div>
            <div className="z-10 flex items-center justify-center min-h-16">
              <ShimmerButton className="px-4 py-2 shadow-lg">
                <span className="text-sm font-medium leading-none tracking-tight text-center text-white whitespace-pre-wrap dark:from-white dark:to-slate-900/10 lg:text-base">
                  Subscribe
                </span>
              </ShimmerButton>
            </div>
            <Separator className="mt-3" />
            <ul className="mt-6">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex gap-2 mb-3">
                  <div className="flex items-center justify-center w-6 h-6 bg-green-500 border-2 border-green-500 rounded-full">
                    <Check size={16} className="text-white" />
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
