
interface BlurDecorationProps {
  className?: string;
}

const BlurDecoration: React.FC<BlurDecorationProps> = ({ className }) => {
  return (
    <div className={`absolute bottom-0  scroll-smooth transform  blur-[300px] opacity-160 ${className}`}>
      <div className="w-[550px] h-[550px] bg-gradient-to-r from-orange-400 to-orange-300 rounded-full opacity-50"></div>
    </div>
  );
};

export default BlurDecoration;