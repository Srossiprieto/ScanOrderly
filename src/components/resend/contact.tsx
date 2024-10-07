import ContactForm from "./contact.form";

const Contact = () => {
  return (
    <div className="max-w-5xl p-6 mx-auto md:px-12 md:py-44" id="contact">
      <div className="flex flex-col items-center">
        <h3 className="text-gray-400">¿Tienes alguna duda? contacta con ScanOrderly</h3>
        <h2 className="text-3xl">Ponte en contacto con scanOrderly</h2>
      </div>
      <div className="mt-8 ">
        <div className="col-span-2">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;