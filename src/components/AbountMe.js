import React, { useEffect, useState } from 'react';

const AboutSection = ({ theme = 'light' }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Detectar cuando la sección es visible para animaciones
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('about');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  // Temas de color para coincidir con el Hero
  const themes = {
    dark: {
      bg: 'bg-gray-900',
      text: 'text-white',
      accent: 'text-emerald-400',
      card: 'bg-gray-800',
      border: 'border-gray-700'
    },
    light: {
      bg: 'bg-white',
      text: 'text-gray-900',
      accent: 'text-red-800',
      card: 'bg-gray-50',
      border: 'border-gray-200'
    },
    gradient: {
      bg: 'bg-gradient-to-br from-indigo-900 to-purple-800',
      text: 'text-white',
      accent: 'text-emerald-400',
      card: 'bg-white/10 backdrop-blur-sm',
      border: 'border-white/20'
    }
  };

  const currentTheme = themes[theme];

  const skills = [
    { name: 'React & React Native', level: 90, icon: '⚛️' },
    { name: 'JavaScript/TypeScript', level: 85, icon: '💻' },
    { name: 'Node.js & Express', level: 80, icon: '🚀' },
    { name: 'Python & Django', level: 75, icon: '🐍' },
    { name: 'MongoDB & PostgreSQL', level: 85, icon: '🗄️' },
    { name: 'Flutter & Dart', level: 70, icon: '📱' }
  ];

  const stats = [
    { number: '1+', label: 'Años de Experiencia' },
    { number: '3+', label: 'Proyectos Completados' },
    { number: '10+', label: 'Tecnologías Dominadas' },
    { number: '1000+', label: 'Horas de Desarrollo' }
  ];

  return (
    <section id="about" className={`py-20 ${currentTheme.bg} ${currentTheme.text} relative overflow-hidden`}>
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-gradient-to-l from-emerald-500/10 to-teal-500/10 rounded-full animate-bounce" style={{animationDuration: '8s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        {/* Título principal */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Sobre <span className={currentTheme.accent}>Mí</span>
          </h2>
          <div className={`w-24 h-1 ${currentTheme.accent.replace('text-', 'bg-')} mx-auto rounded-full`}></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Imagen y información personal */}
          <div className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className={`${currentTheme.card} ${currentTheme.border} border rounded-2xl p-8 shadow-2xl`}>
              {/* Placeholder para imagen */}
              <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full flex items-center justify-center text-6xl text-white shadow-lg">
                👨‍💻
              </div>
              
              <h3 className="text-2xl font-bold text-center mb-4">David Marin</h3>
              <p className={`text-center mb-6 ${currentTheme.text} opacity-80`}>
                Desarrollador Front-End y Móvil multiplataformas especializado en crear soluciones digitales innovadoras
              </p>
              
              {/* Información de contacto rápida */}
              <div className="space-y-3">
                <div className="flex items-center justify-center gap-3">
                  <span className="text-xl">📍</span>
                  <span>Villavicencio, Colombia</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-xl">📧</span>
                  <span>maicolmarin0126@ejemplo.com</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-xl">🌐</span>
                  <span>Disponible para proyectos</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contenido principal */}
          <div className={`space-y-8 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            
            {/* Historia personal */}
            <div>
              <h3 className={`text-2xl font-bold mb-4 ${currentTheme.accent}`}>Sobre Mí</h3>
              <p className={`text-lg leading-relaxed ${currentTheme.text} opacity-90 mb-4`}>
                Soy un Ingeniero Informatico que me he enfocado en la creacion de aplicaciones web y móviles
                que resuelven problemas reales. Mi viaje comenzó 
                con la curiosidad por entender cómo funcionan las tecnologías que usamos diariamente.
              </p>
              <p className={`text-lg leading-relaxed ${currentTheme.text} opacity-90`}>
                Me especializo en crear experiencias de usuario intuitivas y sistemas backend 
                robustos, siempre manteniéndome actualizado con las últimas tecnologías y 
                mejores prácticas de la industria.
              </p>
            </div>

            {/* Lo que me motiva */}
            <div>
              <h3 className={`text-2xl font-bold mb-4 ${currentTheme.accent}`}>Lo que me motiva</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className={`${currentTheme.card} ${currentTheme.border} border rounded-lg p-4`}>
                  <div className="text-2xl mb-2">🎯</div>
                  <h4 className="font-semibold mb-2">Resolver Problemas</h4>
                  <p className={`text-sm ${currentTheme.text} opacity-80`}>
                    Me encanta encontrar soluciones elegantes a desafíos complejos
                  </p>
                </div>
                <div className={`${currentTheme.card} ${currentTheme.border} border rounded-lg p-4`}>
                  <div className="text-2xl mb-2">🚀</div>
                  <h4 className="font-semibold mb-2">Innovación</h4>
                  <p className={`text-sm ${currentTheme.text} opacity-80`}>
                    Siempre busco formas creativas de mejorar la experiencia del usuario
                  </p>
                </div>
                <div className={`${currentTheme.card} ${currentTheme.border} border rounded-lg p-4`}>
                  <div className="text-2xl mb-2">📚</div>
                  <h4 className="font-semibold mb-2">Aprendizaje</h4>
                  <p className={`text-sm ${currentTheme.text} opacity-80`}>
                    La tecnología evoluciona rápido, y me mantengo al día constantemente
                  </p>
                </div>
                <div className={`${currentTheme.card} ${currentTheme.border} border rounded-lg p-4`}>
                  <div className="text-2xl mb-2">🤝</div>
                  <h4 className="font-semibold mb-2">Colaboración</h4>
                  <p className={`text-sm ${currentTheme.text} opacity-80`}>
                    Trabajo mejor en equipo, compartiendo conocimiento y experiencias
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Estadísticas */}
        <div className={`mt-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} transition-all delay-300`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-3xl md:text-4xl font-bold ${currentTheme.accent} mb-2`}>
                  {stat.number}
                </div>
                <div className={`text-sm md:text-base ${currentTheme.text} opacity-80`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills principales */}
        <div className={`mt-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} transition-all delay-500`}>
          <h3 className={`text-2xl font-bold text-center mb-8 ${currentTheme.accent}`}>
            Tecnologías Principales
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className={`${currentTheme.card} ${currentTheme.border} border rounded-lg p-6 hover:scale-105 transition-transform duration-300`}>
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">{skill.icon}</span>
                  <h4 className="font-semibold">{skill.name}</h4>
                </div>
                <div className={`w-full bg-gray-200 rounded-full h-2`}>
                  <div 
                    className={`h-2 rounded-full ${currentTheme.accent.replace('text-', 'bg-')} transition-all duration-1000 ease-out`}
                    style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                  ></div>
                </div>
                <div className={`text-right text-sm mt-1 ${currentTheme.text} opacity-70`}>
                  {skill.level}%
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className={`text-center mt-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'} transition-all delay-700`}>
          <p className={`text-lg mb-6 ${currentTheme.text} opacity-80`}>
            ¿Tienes un proyecto en mente? ¡Hablemos!
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className={`px-8 py-3 ${currentTheme.accent.replace('text-', 'bg-')} text-white font-bold rounded-full hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg`}
          >
            Contactar
          </button>
        </div>

      </div>
    </section>
  );
};

// CSS adicional que necesitas agregar a tu archivo de estilos
const additionalCSS = `
@keyframes fade-in {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slide-in-left {
  from { opacity: 0; transform: translateX(-50px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes slide-in-right {
  from { opacity: 0; transform: translateX(50px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out forwards;
}

.animate-slide-in-left {
  animation: slide-in-left 0.8s ease-out forwards;
}

.animate-slide-in-right {
  animation: slide-in-right 0.8s ease-out forwards;
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}
`;

export default AboutSection;