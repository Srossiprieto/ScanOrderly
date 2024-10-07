import Contact from "@/components/resend/contact"
import { ParticlesDemo } from "@/components/Ui/BgParticles/BgParticles"

function ContactPage() {
  return (
    <>
    <ParticlesDemo>
      <div className="relative flex mt-24 p-3 flex-col min-h-[65dvh] max-w-screen-lg mx-auto items-start justify-center text-left md:items-center md:text-center">
        <div className="flex-col max-w-[1200px] w-full items-start md:items-center">
          <div className="flex flex-col justify-between gap-3 sm:gap-10">
            <h1 className="text-[58px] mt-4 font-semibold max-w-[800px] mx-0 md:mx-auto md:text-7xl tracking-tight leading-tight">
                ¿Quieres contactar con ScanOrderly?
            </h1>
            <p className="max-w-[600px] mx-0 md:mx-auto text-[20px]">
             Mandanos un mensaje y te responderemos lo antes posible.
            </p>
          </div>
        </div>
        <Contact />
      </div>

    </ParticlesDemo>
  </>
  )
}

export default ContactPage
