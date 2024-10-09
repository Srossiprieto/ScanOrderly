function ContactForm() {
  return (
    <div className="bg-[#141414] border border-[#80808045] p-3 rounded-lg w-full">
      <h1 className="text-2xl text-center font-bold mb-4 uppercase">Contacto</h1>
      <form className="mx-auto p-4 bg-transparent w-full">
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
            className="w-full px-3 bg-[#5d5d5d29] py-2 rounded-lg"
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
            className="w-full px-3 py-2 rounded-lg bg-[#5d5d5d29]"
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
}

export default ContactForm;