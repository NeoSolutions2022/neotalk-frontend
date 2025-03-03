import { useIsMobile } from "@/hooks/use-mobile";

interface VideoPlayerProps {
  videoUrl: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl }) => {
  const isMobile = useIsMobile();

  return (
    <div 
      className="relative w-full h-0 overflow-hidden bg-black"
      style={{ paddingBottom: "56.25%", borderRadius: "8px" }} // Proporção 16:9 + cantos arredondados
    >
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        style={{
          objectFit: "cover", 
          pointerEvents: "none", 
          transform: "scale(1.2)", // 🔥 Dá zoom no vídeo para remover bordas
          transformOrigin: "center center"
        }}
        src={`https://www.youtube.com/embed/${videoUrl}?autoplay=1&mute=1&loop=1&playlist=${videoUrl}&controls=0&modestbranding=1&showinfo=0&rel=0&playsinline=1&disablekb=1`}
        frameBorder="0"
        allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
