const BackgroundElements = () => {
  return (
    <>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-gradient-to-l from-emerald-500/10 to-teal-500/10 rounded-full animate-bounce" style={{animationDuration: '8s'}}></div>
      </div>
    </>
  );
};

export default BackgroundElements;
