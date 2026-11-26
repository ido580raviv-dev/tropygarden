import { useState } from 'react';
import { Flower2 } from 'lucide-react';

interface EditorialImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}

export function EditorialImage({
  src,
  alt,
  className = '',
  imgClassName = '',
  priority = false,
}: EditorialImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center bg-gradient-to-br from-[#EFE8DC] via-[#E8DFD1] to-[#DCE3D7] text-[#11281E]/70 p-6 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <Flower2 className="w-8 h-8 mb-3 stroke-[1.25] text-[#8D6B34]" />
        <p className="font-serif text-sm tracking-wide max-w-[22ch]">{alt}</p>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[#EAE3D7] ${className}`}>
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${imgClassName}`}
      />
    </div>
  );
}

export function TropicalLeafLineArt({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M110 250C110 190 112 120 110 22"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M110 190C76 176 42 150 28 112C64 114 96 142 110 190Z"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <path
        d="M110 156C148 140 184 110 194 70C156 76 124 108 110 156Z"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <path
        d="M110 114C80 98 54 68 50 34C82 44 102 74 110 114Z"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <path
        d="M110 78C136 64 158 40 162 14C136 22 118 46 110 78Z"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <circle cx="110" cy="18" r="3" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

export function OrchidBlossomLineArt({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 180 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M90 90C90 60 66 36 42 40C38 64 60 90 90 90Z"
        stroke="currentColor"
        strokeWidth="0.9"
      />
      <path
        d="M90 90C120 90 144 66 140 42C116 38 90 60 90 90Z"
        stroke="currentColor"
        strokeWidth="0.9"
      />
      <path
        d="M90 90C90 122 64 146 40 138C38 114 62 90 90 90Z"
        stroke="currentColor"
        strokeWidth="0.9"
      />
      <path
        d="M90 90C118 90 142 114 138 138C114 144 90 120 90 90Z"
        stroke="currentColor"
        strokeWidth="0.9"
      />
      <path
        d="M90 90C78 70 84 44 90 28C96 44 102 70 90 90Z"
        stroke="currentColor"
        strokeWidth="0.9"
      />
      <circle cx="90" cy="90" r="6" stroke="currentColor" strokeWidth="0.9" />
    </svg>
  );
}
