import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [responseMessage, setResponseMessage] = useState<string>("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setResponseMessage("");
  
    try {
      const apiUrl = import.meta.env.VITE_REACT_APP_API_URL as string;
  
      if (!apiUrl) {
        throw new Error("API URL is not defined");
      }
  
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: "scanorderly@gmail.com",
          subject: `Mensaje de ${formData.name}`,
          text: `Nombre: ${formData.name}\nCorreo: ${formData.email}\nMensaje: ${formData.message}`,
        }),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        setResponseMessage("Correo enviado con éxito");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setResponseMessage("Error al enviar el correo: " + result.error);
      }
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      setResponseMessage("Error al enviar el correo");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-[#141414] border border-[#80808045] p-3 rounded-lg w-full">
      <h1 className="text-2xl text-center font-bold mb-4 uppercase">
        Contacto
      </h1>
      <form
        onSubmit={handleSubmit}
        className="mx-auto p-4 bg-transparent w-full"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-white text-sm font-bold mb-2"
          >
            Nombre
          </label>
          <input
            id="name"
            type="text"
            placeholder="Tu nombre"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 bg-[#5d5d5d29] py-2 rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-white text-sm font-bold mb-2"
          >
            Correo Electrónico
          </label>
          <input
            id="email"
            type="email"
            placeholder="Tu correo electrónico"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg bg-[#5d5d5d29]"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-white text-sm font-bold mb-2"
          >
            Mensaje
          </label>
          <textarea
            id="message"
            placeholder="Tu mensaje"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg bg-[#5d5d5d29] resize-none"
            required
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="w-full font-semibold bg-[#F9FAFD] px-5 py-2 text-[#151519] rounded-lg border border-transparent hover:border-[#F9FAFD] hover:text-[#F9FAFD] hover:bg-transparent transition-all duration-300"
            disabled={isLoading}
          >
            {isLoading ? "Enviando..." : "Enviar"}
          </button>
        </div>
        {responseMessage && (
          <p className="text-center text-white mt-4">{responseMessage}</p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
