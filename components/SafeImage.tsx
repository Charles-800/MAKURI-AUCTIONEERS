'use client';

import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import { ImageIcon } from 'lucide-react';

interface SafeImageProps extends Omit<ImageProps, 'src' | 'onError'> {
  src: string;
  fallbackSrc?: string;
  alt: string;
}

export default function SafeImage({
  src,
  fallbackSrc,
  alt,
  className = '',
  priority = false,
  fill,
  width,
  height,
  sizes,
  ...rest
}: SafeImageProps) {
  const [currentSrc, setCurrentSrc] = useState<string>(src);
  const [hasError, setHasError] = useState<boolean>(false);

  const handleError = () => {
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    } else {
      setHasError(true);
    }
  };

  if (hasError) {
    return (
      <div 
        className={`bg-slate-800 text-slate-300 flex flex-col items-center justify-center p-4 border border-slate-700/50 ${
          fill ? 'absolute inset-0 w-full h-full' : ''
        } ${className}`}
      >
        <div className="w-10 h-10 rounded bg-[#163E72] text-[#C6A15B] flex items-center justify-center mb-2">
          <ImageIcon className="w-5 h-5" />
        </div>
        <span className="text-xs font-semibold text-center text-slate-200 line-clamp-2">
          {alt}
        </span>
        <span className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider">
          Makuri Auctioneers
        </span>
      </div>
    );
  }

  return (
    <Image
      src={currentSrc}
      alt={alt}
      fill={fill}
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      sizes={sizes}
      priority={priority}
      referrerPolicy="no-referrer"
      onError={handleError}
      className={className}
      {...rest}
    />
  );
}
