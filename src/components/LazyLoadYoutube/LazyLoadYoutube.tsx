import { Play } from "lucide-react";
import { useState } from "react";
import VideoBg from "../../../VideoBg.webp";
interface LazyLoadYouTubeProps {
  videoId: string;
}

const LazyLoadYouTube: React.FC<LazyLoadYouTubeProps> = ({ videoId }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleVideoClick = () => {
    setIsVideoLoaded(true);
  };

  return (
    <div className="relative pt-[56.25%] border border-white">
      {!isVideoLoaded ? (
        <div
          className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black cursor-pointer bg-cover bg-center"
          onClick={handleVideoClick}
          style={{ backgroundImage: `url(${VideoBg})` }}

        >
          <Play className="w-[100px] h-[100px] border-4 border-white rounded-full p-4 text-white" />
        </div>
      ) : (
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default LazyLoadYouTube;