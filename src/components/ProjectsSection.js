const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'App de Fitness',
      description: 'Aplicación móvil para seguimiento de entrenamientos con integración de wearables.',
      tags: ['React Native', 'Firebase', 'Redux'],
      image: '/placeholder-mobile.jpg',
      type: 'mobile'
    },
    {
      id: 2,
      title: 'Plataforma E-learning',
      description: 'Sistema web completo para cursos en línea con panel de administración.',
      tags: ['React', 'Node.js', 'MongoDB'],
      image: '/placeholder-web.jpg',
      type: 'web'
    },
    {
      id: 3,
      title: 'Red Social Móvil',
      description: 'Aplicación social con geolocalización y chat en tiempo real.',
      tags: ['Flutter', 'Firebase', 'WebSockets'],
      image: '/placeholder-mobile.jpg',
      type: 'mobile'
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
          Mis <span className="text-indigo-600">Proyectos</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gray-200 relative">
                <div className="absolute top-2 right-2 px-2 py-1 bg-white rounded-md text-xs font-medium shadow">
                  {project.type === 'mobile' ? '📱 Móvil' : '🌐 Web'}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="mt-4 text-indigo-600 font-medium hover:text-indigo-800 transition-colors">
                  Ver detalles →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;