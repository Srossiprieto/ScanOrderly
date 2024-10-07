import ButtonPrimary from "@/components/Ui/ButtonPrimary/ButtonPrimary";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-6xl font-bold mb-8">404</h1>
        <h2 className="text-4xl font-semibold mb-4">Página no encontrada</h2>
        <p className="text-xl mb-8">
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </p>
        <Link
          to="/"
        >
          <ButtonPrimary text="Volver al inicio"></ButtonPrimary>
          
        </Link>
      </div>
      <div className="mt-16 text-sm text-gray-500">
        © {new Date().getFullYear()} ScanOrderly. Todos los derechos reservados.
      </div>
    </div>
  );
}

export default Error;
