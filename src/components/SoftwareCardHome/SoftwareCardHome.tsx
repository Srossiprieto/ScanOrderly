import { BorderBeamDemo } from '../Ui/BorderBeam/BorderBeam';
import ScanOrderlySoftware from '../../assets/ScanOrderlySoftware.webp';
import PhonesSoftware from '../../../Phones.webp';

function SoftwareCardHome() {
  return (
    <>
      <BorderBeamDemo>
        <div className='hidden md:flex bg-cover mt-7 relative w-full h-full'>
          <img src={ScanOrderlySoftware} alt="Software" className='w-full h-auto object-cover'/>
        </div>
        <div className='flex bg-cover mt-7 relative w-full h-full md:hidden'>
          <img src={PhonesSoftware} alt="Software" className='w-full h-auto object-cover'/>
        </div>
      </BorderBeamDemo>
    </>
  );
}

export default SoftwareCardHome;