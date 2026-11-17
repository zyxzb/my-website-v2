'use client';

import dynamic from 'next/dynamic';

const Masonry = dynamic(() => import('react-layout-masonry'), { ssr: false });

const GalleryCards = ({ children }: { children: React.ReactNode }) => {
  return (
    <Masonry columns={{ 640: 1, 768: 2 }} gap={16}>
      {children}
    </Masonry>
  );
};

export default GalleryCards;
