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

      {/* Image Container */}
      <div 
        className="relative max-w-full max-h-full flex items-center justify-center animate-zoom-in"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          className="max-w-full max-h-[90vh] object-contain shadow-2xl border border-white/10"
        />
        
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
