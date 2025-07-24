import React from 'react';

interface IconSparkleLoaderProps {
  className?: string;
}

const IconSparkleLoader: React.FC<IconSparkleLoaderProps> = ({ className = "" }) => {
  return (
    <div className={`animate-spin rounded-full h-5 w-5 border-b-2 border-white ${className}`}>
    </div>
  );
};

export default IconSparkleLoader; 