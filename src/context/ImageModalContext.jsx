import React, { createContext, useContext, useState, useCallback } from 'react';

const ImageModalContext = createContext();

export function ImageModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openImage = useCallback((image) => {
    setCurrentImage(image);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeImage = useCallback(() => {
    setIsOpen(false);
    setCurrentImage(null);
    document.body.style.overflow = 'unset';
  }, []);

  return (
    <ImageModalContext.Provider value={{ isOpen, currentImage, openImage, closeImage }}>
      {children}
    </ImageModalContext.Provider>
  );
}

export const useImageModal = () => {
  const context = useContext(ImageModalContext);
  if (!context) {
    throw new Error('useImageModal must be used within an ImageModalProvider');
  }
  return context;
};
