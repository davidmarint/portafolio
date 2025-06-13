const Motivation = ({ currentTheme }) => {
  return (
    <div>
      <h3 className={`text-2xl font-bold mb-4 ${currentTheme.accent}`}>
        Lo que me motiva
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          className={`${currentTheme.card} ${currentTheme.border} border rounded-lg p-4`}
        >
          <div className="text-2xl mb-2">🎯</div>
          <h4 className="font-semibold mb-2">Resolver Problemas</h4>
          <p className={`text-sm ${currentTheme.text} opacity-80`}>
            Me encanta encontrar soluciones elegantes a desafíos complejos
          </p>
        </div>
        <div
          className={`${currentTheme.card} ${currentTheme.border} border rounded-lg p-4`}
        >
          <div className="text-2xl mb-2">🚀</div>
          <h4 className="font-semibold mb-2">Innovación</h4>
          <p className={`text-sm ${currentTheme.text} opacity-80`}>
            Siempre busco formas creativas de mejorar la experiencia del usuario
          </p>
        </div>
        <div
          className={`${currentTheme.card} ${currentTheme.border} border rounded-lg p-4`}
        >
          <div className="text-2xl mb-2">📚</div>
          <h4 className="font-semibold mb-2">Aprendizaje</h4>
          <p className={`text-sm ${currentTheme.text} opacity-80`}>
            La tecnología evoluciona rápido, y me mantengo al día constantemente
          </p>
        </div>
        <div
          className={`${currentTheme.card} ${currentTheme.border} border rounded-lg p-4`}
        >
          <div className="text-2xl mb-2">🤝</div>
          <h4 className="font-semibold mb-2">Colaboración</h4>
          <p className={`text-sm ${currentTheme.text} opacity-80`}>
            Trabajo mejor en equipo, compartiendo conocimiento y experiencias
          </p>
        </div>
      </div>
    </div>
  );
};

export default Motivation;
