const SkeletonText = () => {
  return (
    <div className="space-y-4 p-4 w-full">
      {/* Τίτλος */}
      <div className="h-8 bg-gray-300 rounded w-3/4 animate-pulse"></div>

      {/* Κείμενο */}
      <div className="space-y-2">
        <div className="h-4 bg-gray-300 rounded w-full animate-pulse"></div>
        <div className="h-4 bg-gray-300 rounded w-full animate-pulse"></div>
        <div className="h-4 bg-gray-300 rounded w-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default SkeletonText;
