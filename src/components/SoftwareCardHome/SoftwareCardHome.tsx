import { useState, useEffect } from 'react';
import Desktop from '../../assets/Desktop.svg';
import PhonesImg from '../../assets/PhonesImg.webp';

function SoftwareCardHome() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Check initial screen size

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='flex p-3 items-start mt-3'>
      {isDesktop ? (
        <img className='hidden md:flex' src={Desktop} alt="Desktop Image" loading="lazy" />
      ) : (
        <img className='flex md:hidden' src={PhonesImg} alt="Phones Image" loading="lazy" />
      )}
    </div>
  );
}

export default SoftwareCardHome;