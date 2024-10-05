import { Button } from "@/components/Ui/button";
import SoftwareCardHome from "../../components/SoftwareCardHome/SoftwareCardHome";
import ButtonHomeUi from "../../components/Ui/ButtonHomeUi/ButtonHomeUi";
import ButtonPrimary from "../../components/Ui/ButtonPrimary/ButtonPrimary";
import ButtonSecondary from "../../components/Ui/ButtonSecondary/ButtonSecondary";

function Home() {
  return (
    <>
      <div className="flex mt-24 p-3 flex-col min-h-[65dvh] max-w-screen-lg mx-auto items-start justify-center text-left md:items-center md:text-center">
        <div className="flex-col max-w-[1200px] w-full items-start md:items-center">
          <ButtonHomeUi text="Backed by" href="https://github.com/Srossiprieto/ScanOrderly"/>
          <div className="gap-3 flex flex-col sm:gap-10 justify-between">
            <h1 className="text-[58px] mt-4 font-semibold max-w-[800px] mx-0 md:mx-auto md:text-7xl tracking-tight leading-tight">
              Software Para Restaurantes
              <span className="font-bold text-7xl">.</span>
            </h1>
            <p className="max-w-[600px] mx-0 md:mx-auto text-[20px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
              nam alias iste, culpa omnis in? Fugiat doloremque deleniti
              impedit, hola.
            </p>
            <div className="flex justify-start gap-2 md:justify-center">
              <ButtonPrimary text="Get started free" />
              <ButtonSecondary text="Book a demo" />
            </div>
          </div>
        </div>
        <SoftwareCardHome></SoftwareCardHome>
        <Button variant="destructive">Click me!</Button>
      </div>
    </>
  );
}

export default Home;
