const AboutTitle = ({ currentTheme, isVisible }) => {
  return (
    <div
      className={`text-center mb-16 ${
        isVisible ? "animate-fade-in" : "opacity-0"
      }`}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Sobre <span className={currentTheme.accent}>Mí</span>
      </h2>
      <div
        className={`w-24 h-1 ${currentTheme.accent.replace(
          "text-",
          "bg-"
        )} mx-auto rounded-full`}
      ></div>
    </div>
  );
};

export default AboutTitle;
