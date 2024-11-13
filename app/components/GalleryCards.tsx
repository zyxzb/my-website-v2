const GalleryCards = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-7'>
      {children}
    </div>
  );
};

export default GalleryCards;
