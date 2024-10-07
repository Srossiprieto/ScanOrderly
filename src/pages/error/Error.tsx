import { ParticlesDemo } from "@/components/Ui/BgParticles/BgParticles";
import { Button } from "@/components/Ui/button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Error() {
  const [glitchText, setGlitchText] = useState("NOT FOUND");

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      let newText = "";
      for (let i = 0; i < 9; i++) {
        newText += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      setGlitchText(newText);
    }, 100);

    setTimeout(() => {
      clearInterval(glitchInterval);
      setGlitchText("NOT FOUND");
    }, 2000);

    return () => clearInterval(glitchInterval);
  }, []);

  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <>
      <ParticlesDemo>
        <div className="flex items-center justify-center w-full h-screen">
          <div className="relative w-[30em] h-[30em]">
            <div className="flex flex-col items-center justify-center mt-20">
              <div className="w-20 h-20 rounded-full border-2 border-green-500 bg-gray-900 mb-[-6em] z-10 shadow-[0_0_15px_#00ff00]"></div>
              <div className="w-[17em] h-36 mt-12 rounded-2xl bg-gray-900 flex justify-center border-2 border-green-500 shadow-[0_0_20px_#00ff00]">
                <div className="relative flex items-center justify-center">
                  <div className="w-52 h-[7.85em] font-['Orbitron',sans-serif] border-2 border-green-500 bg-black rounded-lg z-20 flex items-center justify-center font-bold text-green-500 tracking-widest text-center overflow-hidden">
                    <span className="relative z-30 text-lg animate-pulse">
                      {glitchText}
                    </span>
                    <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(0deg,transparent,transparent_2px,rgba(0,255,0,0.1)_2px,rgba(0,255,0,0.1)_4px)] bg-[size:100%_4px] animate-scan"></div>
                  </div>
                </div>
              </div>

              <Button
              onClick={handleGoHome}
              className="px-4 py-2 mt-8 text-white transition rounded-lg shadow bg-slate-500 hover:bg-slate-800"
            >
              Volver a la página principal
            </Button>
            </div>
          </div>
        </div>
      </ParticlesDemo>
    </>
  );
}

export default Error;
