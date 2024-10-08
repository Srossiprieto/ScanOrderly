import BlurCircleDecoration from "@/components/BlurCicleDecoration/BlurCircleDecoration";
import ContactForm from "@/components/ContactForm/ContactForm";

function Contact() {
  return (
    <>
      <BlurCircleDecoration />
      <div className="flex justify-center items-center min-h-[65vh] mt-[100px]">
        <div className="w-full max-w-lg p-3">
          <ContactForm />
        </div>
      </div>
    </>
  );
}

export default Contact;
