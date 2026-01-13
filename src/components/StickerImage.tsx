import { useState } from 'react';

interface StickerImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackEmoji?: string;
}

const StickerImage = ({ src, alt, className = '', fallbackEmoji = '🎭' }: StickerImageProps) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className={`flex items-center justify-center bg-muted ${className}`}>
        <span className="text-2xl">{fallbackEmoji}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`object-cover ${className}`}
      onError={() => setHasError(true)}
    />
  );
};

export default StickerImage;
