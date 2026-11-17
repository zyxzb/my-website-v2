'use client';

import dynamic from 'next/dynamic';
import GalleryLoading from '@/app/components/GalleryLoading';

const Masonry = dynamic(() => import('react-layout-masonry'), {
  ssr: false,
  loading: () => <GalleryLoading />,
});

const GalleryCards = ({ children }: { children: React.ReactNode }) => {
  return (
    <Masonry columns={{ 640: 1, 768: 2 }} gap={16}>
      {children}
    </Masonry>
  );
};

export default GalleryCards;
