
// import ScanOrderlyWhite from '../../assets/ScanOrderlyWhite.webp'
import Desktop from '../../assets/Desktop.svg'
import PhonesImg from '../../assets/PhonesImg.webp'

function SoftwareCardHome() {
  return (
    <div className='flex p-3 items-start mt-3'>
        {/* <img src={ScanOrderlyWhite}alt="Imagen Software" /> */}
        <img className='hidden md:flex'src={Desktop} alt="Desktop Image" />
        <img className='flex md:hidden' src={PhonesImg} alt="Phones Image" />
    </div>
  )
}

export default SoftwareCardHome
