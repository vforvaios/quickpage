const SkeletonGallery = () => {
  return (
    <div className="space-y-4 p-4 w-full mx-auto">
      {/* Τίτλος */}
      <div className="h-8 bg-gray-300 rounded w-1/2 animate-pulse"></div>

      {/* Gallery */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="w-full h-32 bg-gray-300 rounded animate-pulse"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SkeletonGallery;
