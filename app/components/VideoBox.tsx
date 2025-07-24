import React from 'react';

interface VideoBoxProps {
  video: React.RefObject<HTMLVideoElement>;
  audio: React.RefObject<HTMLAudioElement>;
}

const VideoBox: React.FC<VideoBoxProps> = ({ video, audio }) => {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <video
        ref={video}
        className="w-full h-auto rounded-lg"
        autoPlay
        playsInline
        muted
      />
      <audio ref={audio} autoPlay />
    </div>
  );
};

export default VideoBox; 