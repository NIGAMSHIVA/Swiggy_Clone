const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6 bg-gray-50 min-h-screen">
      {Array(12)
        .fill("")
        .map((_, i) => (
          <div
            key={i}
            className="w-60 h-64 bg-gray-200 rounded-xl animate-pulse shadow-md"
          >
            {/* Image placeholder */}
            <div className="w-full h-40 bg-gray-300 rounded-t-xl"></div>

            {/* Text placeholders */}
            <div className="p-4 space-y-2">
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
