import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      name,
      email,
      message,
    };

    try {
      const apiUrl = import.meta.env.VITE_API_URL as string;

      if (!apiUrl) {
        throw new Error("API URL is not defined");
      }

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Correo enviado:', result);
      } else {
        console.error('Error al enviar el correo:', response.statusText);
      }
    } catch (error) {
      console.error('Error en la conexión:', error);
    }
  };

  return (
    <div className="bg-[#141414] border border-[#80808045] p-3 rounded-lg w-full">
      <h1 className="text-2xl text-center font-bold mb-4 uppercase">Contacto</h1>
      <form className="mx-auto p-4 bg-transparent w-full" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-white text-sm font-bold mb-2">
            Nombre
          </label>
          <input
            id="name"
            type="text"
            placeholder="Tu nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 bg-[#5d5d5d29] py-2 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-white text-sm font-bold mb-2">
            Correo Electrónico
          </label>
          <input
            id="email"
            type="email"
            placeholder="Tu correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 rounded-lg bg-[#5d5d5d29]"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-white text-sm font-bold mb-2">
            Mensaje
          </label>
          <textarea
            id="message"
            placeholder="Tu mensaje"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-3 py-2 rounded-lg bg-[#5d5d5d29] resize-none"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="w-full font-semibold bg-[#F9FAFD] px-5 py-2 text-[#151519] rounded-lg border border-transparent hover:border-[#F9FAFD] hover:text-[#F9FAFD] hover:bg-transparent transition-all duration-300"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;