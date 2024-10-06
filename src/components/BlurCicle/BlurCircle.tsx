
interface BlurCircleProps {
  children: React.ReactNode;
}

function BlurCircle({ children }: BlurCircleProps) {
  return (
    <>
      <div className="absolute min-h-[60px] blur-[120px] w-full bg-gray-200 bg-opacity-50 md:blur-[170px] rounded-xl md:min-h-[100px]"></div>
      <div className="relative  flex items-start justify-start h-full">
        {children}
      </div>
    </>

  );
}

export default BlurCircle;