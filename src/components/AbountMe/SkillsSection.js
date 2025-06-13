const SkillsSection = ({ currentTheme, isVisible, skills }) => {
  return (
    <div className={`mt-16 'animate-fade-in-up' transition-all delay-500`}>
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
                    style={{ width: skill.level }}
                  ></div>
                </div>
                <div className={`text-right text-sm mt-1 ${currentTheme.text} opacity-70`}>
                  {skill.level}%
                </div>
              </div>
            ))}
          </div>
        </div>
  );
};

export default SkillsSection;
