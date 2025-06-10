import React from 'react';
import { Briefcase, GraduationCap, Code, Calendar, MapPin } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      type: 'trabajo',
      title: 'Practicante de Desarrollo',
      company: 'Tech Solutions S.A.S',
      location: 'Villavicencio, Meta',
      period: 'Marzo 2023 - Agosto 2023',
      description: 'Desarrollo de aplicaciones web usando React y Node.js. Participé en proyectos de digitalización de procesos empresariales y mantenimiento de sistemas existentes.',
      skills: ['React', 'Node.js', 'JavaScript', 'MySQL', 'Git'],
      icon: <Briefcase className="text-blue-500" size={24} />,
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      id: 2,
      type: 'trabajo',
      title: 'Desarrollador Freelancer',
      company: 'Colaboraciones Independientes',
      location: 'Remoto',
      period: 'Septiembre 2023 - Presente',
      description: 'Desarrollo de aplicaciones móviles y web para diversos clientes. Especializado en soluciones personalizadas usando tecnologías modernas y metodologías ágiles.',
      skills: ['React Native', 'Flutter', 'Firebase', 'MongoDB', 'Express.js'],
      icon: <Code className="text-green-500" size={24} />,
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      id: 3,
      type: 'educacion',
      title: 'Ingeniería de Sistemas',
      company: 'Universidad de los Llanos',
      location: 'Villavicencio, Meta',
      period: '2020 - 2024',
      description: 'Formación integral en desarrollo de software, bases de datos, redes y gestión de proyectos tecnológicos. Proyecto de grado enfocado en aplicaciones móviles.',
      skills: ['Programación', 'Bases de Datos', 'Redes', 'Gestión de Proyectos', 'Metodologías Ágiles'],
      icon: <GraduationCap className="text-purple-500" size={24} />,
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    }
  ];

  return (
    <section className="py-16 bg-gray-50" id="experience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header de la sección */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Mi Trayectoria
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experiencia profesional y formación académica que han moldeado mi carrera como desarrollador
          </p>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-6"></div>
        </div>

        {/* Timeline horizontal */}
        <div className="relative">
          {/* Línea de tiempo horizontal */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 transform -translate-y-1/2"></div>
          
          {/* Contenedor de tarjetas - Siempre en fila */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                {/* Punto en la línea de tiempo */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-red-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                
                {/* Tarjeta de experiencia */}
                <div className={`${exp.bgColor} ${exp.borderColor} border-2 rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative`}>
                  {/* Badge del tipo - Solo en desktop */}
                  <div className="hidden md:block absolute top-4 right-4">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      exp.type === 'educacion' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {exp.type === 'educacion' ? 'Educación' : 'Experiencia'}
                    </span>
                  </div>

                  {/* Header de la tarjeta */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className="flex-shrink-0">
                      {exp.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-base md:text-lg font-semibold text-gray-700 mb-2">
                        {exp.company}
                      </p>
                      
                      {/* Información de fecha - Simplificada en móvil */}
                      <div className="text-sm text-gray-600 mb-3">
                        <div className="flex items-center gap-1 mb-1">
                          <Calendar size={14} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="hidden md:flex items-center gap-1">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Descripción - Más corta en móvil */}
                  <p className="text-gray-700 mb-3 md:mb-4 leading-relaxed text-sm md:text-base">
                    <span className="md:hidden">
                      {exp.description.split('.')[0]}.
                    </span>
                    <span className="hidden md:block">
                      {exp.description}
                    </span>
                  </p>

                  {/* Skills - Menos en móvil */}
                  <div className="flex flex-wrap gap-1 md:gap-2">
                    {exp.skills.slice(0, window.innerWidth < 768 ? 3 : exp.skills.length).map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-2 md:px-3 py-1 bg-white text-gray-700 text-xs md:text-sm rounded-full border border-gray-200 font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                    {exp.skills.length > 3 && (
                      <span className="md:hidden px-2 py-1 bg-gray-200 text-gray-600 text-xs rounded-full border border-gray-300">
                        +{exp.skills.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Número de orden */}
                  <div className="absolute -top-2 -left-2 md:-top-3 md:-left-3 w-6 h-6 md:w-8 md:h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xs md:text-sm shadow-lg">
                    {index + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            ¿Interesado en conocer más sobre mi experiencia?
          </p>
          <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl">
            Descargar CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;