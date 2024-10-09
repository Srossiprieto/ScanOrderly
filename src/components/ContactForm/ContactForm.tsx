import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Check, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ContactForm = () => {
  const [modals, setModals] = useState<string[]>([]);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("El nombre es obligatorio"),
      email: Yup.string()
        .email("Correo electrónico inválido")
        .required("El correo electrónico es obligatorio"),
      message: Yup.string().required("El mensaje es obligatorio"),
    }),
    onSubmit: async (values, { resetForm, setStatus }) => {
      try {
        formik.setSubmitting(true); // Activar estado de carga
        await axios.post(process.env.REACT_APP_API_URL ?? "", values);
        setStatus({ success: true }); // Mensaje de éxito
        resetForm(); // Resetear formulario
        setModals((prev) => [...prev, "Mensaje enviado con éxito."]); // Añadir modal
      } catch (error) {
        console.error("Error sending email:", error);
        setStatus({ success: false }); // Si hay error, puedes manejarlo aquí si quieres
      } finally {
        formik.setSubmitting(false); // Desactivar estado de carga
      }
    },
  });

  useEffect(() => {
    if (modals.length > 0) {
      const timer = setTimeout(() => {
        setModals((prev) => prev.slice(1));
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [modals]);

  return (
    <div className="bg-[#141414] border border-[#80808045] p-3 rounded-lg w-full">
      <h1 className="text-2xl text-center font-bold mb-4 uppercase">
        Contacto
      </h1>
      <form
        className="mx-auto p-4 bg-transparent w-full"
        onSubmit={formik.handleSubmit}
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
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full px-3 bg-[#5d5d5d29] py-2 rounded-lg"
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500 text-sm">{formik.errors.name}</div>
          ) : null}
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
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full px-3 py-2 rounded-lg bg-[#5d5d5d29]"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-sm">{formik.errors.email}</div>
          ) : null}
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
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full px-3 py-2 rounded-lg bg-[#5d5d5d29] resize-none"
          />
          {formik.touched.message && formik.errors.message ? (
            <div className="text-red-500 text-sm">{formik.errors.message}</div>
          ) : null}
        </div>
        <div className="text-center">
          <button
            type="submit"
            disabled={!formik.isValid || formik.isSubmitting}
            className={`w-full font-semibold ${
              !formik.isValid || formik.isSubmitting
                ? "bg-gray-300"
                : "bg-[#F9FAFD]"
            } px-5 py-2 text-[#151519] rounded-lg border border-transparent hover:border-[#F9FAFD] hover:text-[#F9FAFD] hover:bg-transparent transition-all duration-300`}
          >
            {formik.isSubmitting ? "Enviando..." : "Enviar"}
          </button>
        </div>
      </form>
      {formik.status?.success && (
        <div className="text-green-500 text-sm text-center mt-2">
          Mensaje enviado con éxito.
        </div>
      )}
      {formik.status?.success === false && (
        <div className="text-red-500 text-sm text-center mt-2">
          Ocurrió un error al enviar el mensaje.
        </div>
      )}
      <div className="fixed left-0 m-6 bottom-0 space-y-4 max-w-full">
        <AnimatePresence>
          {modals.map((modal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              className="bg-[#f0ffff] p-3 rounded-lg shadow-lg"
            >
              <div className="text-[#4d4d4d]">
                <h2 className="text-lg font-bold flex gap-2 items-center">
                  <Check className="bg-green-500 w-5 h-5 rounded-full text-white p-1" />
                  Mensaje enviado
                </h2>
                <p>{modal}</p>
              </div>
              <X
                onClick={() => setModals((prev) => prev.filter((_, i) => i !== index))}
                className="w-5 h-5 text-[#4d4d4d] absolute top-2 right-2 cursor-pointer"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ContactForm;