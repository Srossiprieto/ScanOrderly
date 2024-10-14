import BlurCircleDecoration from "@/components/BlurCicleDecoration/BlurCircleDecoration";
import ContactForm from "@/components/ContactForm/ContactForm";

function Contact() {
  return (
    <>
      <BlurCircleDecoration />
      <div className="flex flex-col justify-center items-center min-h-[65dvh] mt-[100px]">
        <h3 className="text-center text-[38px] p-3 md:text-[48px] font-bold">
          <span className="text-orange-300 ">Contactate</span> con nosotros!
        </h3>
        <div className="w-full max-w-lg p-3">
          <ContactForm />
        </div>
      </div>
    </>
  );
}

export default Contact;
