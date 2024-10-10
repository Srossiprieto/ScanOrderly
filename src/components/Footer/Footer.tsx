import GitHubIcon from "../../assets/GithubIcon";
import ScanOrderly from "@/assets/ScanOrderly";

function Footer() {
  return (
    <>
      <div className="flex justify-between items-center mt-24 p-3 max-w-screen-lg mx-auto text-left text-white border-t border-[#25252B]">
        <div className="m-2">
          <h3 className="items-center gap-4 text-2xl font-bold flex">
            <ScanOrderly className="w-5 h-5" />
            ScanOrderly
          </h3>
          <p>Tu software de confianza.</p>
          <p className="text-sm mt-2 text-gray-500 max-w-xs">
            Simplifica y optimiza tus procesos mediante un qr y acelera tus
            ordenes con nuestra solución avanzada. Diseñado para ofrecer
            eficiencia y precisión.
          </p>
        </div>
          <div>
            
          </div>
      </div>

      <div className="flex justify-between items-center mt-5 p-3 max-w-screen-lg mx-auto text-left text-white">
        <div className="text-base">
          © 2024 Todos los derechos reservados.
          <span className="hover:text-blue-500 cursor-pointer">
            {" "}
            ScanOrderly
          </span>
        </div>
        <div className="flex space-x-4 items-center">
          <a
            href="https://github.com/Srossiprieto/ScanOrderly"
            target="_blank"
            aria-label="Github Icon"
            className="hover:text-blue-500"
          >
            <GitHubIcon className="text-white" />
          </a>
          
        </div>
      </div>
    </>
  );
}

export default Footer;
