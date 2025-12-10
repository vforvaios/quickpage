const SkeletonHero = () => {
  return (
    <div className="relative w-full h-64 md:h-96 bg-gray-300 animate-pulse flex flex-col justify-center items-start p-6">
      {/* Τίτλος */}
      <div className="h-10 w-3/4 bg-gray-400 rounded mb-4"></div>
      {/* Subtitle */}
      <div className="h-6 w-1/2 bg-gray-400 rounded mb-6"></div>
      {/* Button */}
      <div className="h-10 w-32 bg-gray-400 rounded"></div>
    </div>
  );
};

export default SkeletonHero;
