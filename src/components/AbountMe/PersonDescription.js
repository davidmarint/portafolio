const PersonDescription = ({ currentTheme }) => {
  return (
    <div>
      <h3 className={`text-2xl font-bold mb-4 ${currentTheme.accent}`}>
        Sobre Mí
      </h3>
      <p
        className={`text-lg leading-relaxed ${currentTheme.text} opacity-90 mb-4`}
      >
        Soy un Ingeniero Informatico que me he enfocado en la creacion de
        aplicaciones web y móviles que resuelven problemas reales. Mi viaje
        comenzó con la curiosidad por entender cómo funcionan las tecnologías
        que usamos diariamente.
      </p>
      <p className={`text-lg leading-relaxed ${currentTheme.text} opacity-90`}>
        Me especializo en crear experiencias de usuario intuitivas y sistemas
        backend robustos, siempre manteniéndome actualizado con las últimas
        tecnologías y mejores prácticas de la industria.
      </p>
    </div>
  );
};

export default PersonDescription;
