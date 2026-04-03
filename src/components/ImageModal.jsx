import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { useImageModal } from '../context/ImageModalContext';

export default function ImageModal() {
  const { isOpen, currentImage, closeImage } = useImageModal();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [closeImage]);

  if (!isOpen || !currentImage) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-forest/95 backdrop-blur-sm animate-fade-in"
      onClick={closeImage}
    >
      {/* Close button */}
      <button 
        className="absolute top-6 right-6 p-2 text-blush/70 hover:text-blush bg-forest/20 rounded-full transition-colors z-[110]"
        onClick={closeImage}
        aria-label="Cerrar vista"
      >
        <X size={32} />
      </button>

      {/* Media Container */}
      <div 
        className="relative max-w-full max-h-full w-full md:w-auto h-full flex flex-col items-center justify-center animate-zoom-in"
        onClick={(e) => e.stopPropagation()}
      >
        {currentImage.type === 'video' ? (
          <video
            autoPlay
            controls
            playsInline
            className="w-full md:w-auto max-w-full max-h-[85vh] object-contain shadow-2xl border border-white/10"
          >
            <source src={currentImage.src} type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        ) : (
          <img
            src={currentImage.src}
            alt={currentImage.alt}
            className="max-w-full max-h-[85vh] object-contain shadow-2xl border border-white/10"
          />
        )}
        
        {/* Caption */}
        {currentImage.alt && (
          <div className="absolute -bottom-12 left-0 right-0 text-center">
            <p className="text-blush font-body text-sm md:text-base tracking-wide">
              {currentImage.alt}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
