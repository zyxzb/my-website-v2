'use client';

import Masonry from 'react-layout-masonry';

const GalleryCards = ({ children }: { children: React.ReactNode }) => {
  return (
    <Masonry columns={{ 640: 1, 768: 2 }} gap={16}>
      {children}
    </Masonry>
  );
};

export default GalleryCards;
