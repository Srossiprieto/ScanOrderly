import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Toaster, toast } from "sonner";

const ContactForm = () => {
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
        toast.success("Mensaje enviado con éxito."); // Mostrar toast de éxito
      } catch (error) {
        console.error("Error sending email:", error);
        setStatus({ success: false }); // Si hay error, puedes manejarlo aquí si quieres
        toast.error("Ocurrió un error al enviar el mensaje."); // Mostrar toast de error
      } finally {
        formik.setSubmitting(false); // Desactivar estado de carga
      }
    },
  });

  return (
    <>
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
              <div className="text-red-500 text-sm">
                {formik.errors.message}
              </div>
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
      </div>
      <Toaster closeButton richColors position="bottom-left" />
    </>
  );
};

export default ContactForm;
