import { BorderBeamDemo } from '../Ui/BorderBeam/BorderBeam';
// import ScanOrderlySoftware from '../../assets/ScanOrderlySoftware.webp';
import ShotsDark from '../../assets/shotsDark.png';
import PhonesSoftware from '../../../Phones.webp';

function SoftwareCardHome() {
  return (
    <>
      <BorderBeamDemo>
        <div className="hidden md:flex bg-cover md:mt-7 relative w-full h-full min-h-full min-w-full">
          <img
            src={ShotsDark}
            alt="Software"
            className="w-full h-full object-cover" // Imágen ocupa todo el espacio disponible
          />
        </div>
        <div className="flex bg-cover mt-7 relative w-full h-full min-h-full min-w-full md:hidden">
          <img
            src={PhonesSoftware}
            alt="Software"
            className="w-full h-full object-cover" // Modo móvil ajustado
          />
        </div>
      </BorderBeamDemo>
    </>
  );
}

export default SoftwareCardHome;

