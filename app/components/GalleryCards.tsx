const GalleryCards = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='columns-1 gap-4 lg:columns-2 lg:gap-7'>{children}</div>
  );
};

export default GalleryCards;
