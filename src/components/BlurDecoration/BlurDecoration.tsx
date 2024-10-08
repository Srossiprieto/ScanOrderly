
interface BlurDecorationProps {
  className?: string;
}

const BlurDecoration: React.FC<BlurDecorationProps> = ({ className }) => {
  return (
    <div className={`absolute bottom-0  transform -translate-x-1/2 blur-[300px] opacity-50 ${className}`}>
      <div className="w-[550px] h-[550px] bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-50"></div>
    </div>
  );
};

export default BlurDecoration;