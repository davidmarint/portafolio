const CallToAction = ({ currentTheme, isVisible }) => {
  return (
    <div
      className={`text-center mt-16 ${
        isVisible ? "animate-fade-in" : "opacity-0"
      } transition-all delay-700`}
    >
      <p className={`text-lg mb-6 ${currentTheme.text} opacity-80`}>
        ¿Tienes un proyecto en mente? ¡Hablemos!
      </p>
      <button
        onClick={() =>
          document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className={`px-8 py-3 ${currentTheme.accent.replace(
          "text-",
          "bg-"
        )} text-white font-bold rounded-full hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg`}
      >
        Contactar
      </button>
    </div>
  );
};
export default CallToAction;
