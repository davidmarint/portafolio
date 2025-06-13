const CardInfo = ({ isVisible, currentTheme }) => {
  return (
    <div className={`${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
      <div
        className={`${currentTheme.card} ${currentTheme.border} border rounded-2xl p-8 shadow-2xl`}
      >
        {/* Placeholder para imagen */}
        <div className="w-52 h-52 mx-auto mb-6 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full flex items-center justify-center text-6xl text-white shadow-lg">
          <img
            src={"/images/photos/perfil.jpg"}
            alt={"David Marin"}
            className="w-48 h-48 rounded-full"
          />
        </div>

        <h3 className="text-2xl font-bold text-center mb-4">David Marin</h3>
        <p className={`text-center mb-6 ${currentTheme.text} opacity-80`}>
          Desarrollador Front-End y Móvil multiplataformas especializado en
          crear soluciones digitales innovadoras
        </p>

        {/* Información de contacto rápida */}
        <div className="space-y-3">
          <div className="flex items-center justify-center gap-3">
            <span className="text-xl">📍</span>
            <span>Villavicencio, Colombia</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <span className="text-xl">📧</span>
            <span>maicolmarin0126@gmail.com</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <span className="text-xl">🌐</span>
            <span>Disponible para proyectos</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
