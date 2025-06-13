import { useNavigate, Link } from 'react-router-dom';
import {projects} from '../../data/projects';

const ProjectsSection = () => {
  const navigate = useNavigate();

  const handleProjectClick = (projectId) => {
    navigate(`proyecto/${projectId}`);
  };

  return (
   <section id="projects" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
          Mis <span className="text-red-600">Proyectos</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                onClick={() => handleProjectClick(project.id)}
            >
              <div className="h-48 bg-gray-200 relative">
                <div className="absolute top-2 right-2 px-2 py-1 bg-white rounded-md text-xs font-medium shadow">
                  {project.type === 'mobile' ? '📱 Móvil' : '🌐 Web'}
                </div>
                <div className="flex items-center justify-center  h-full">
                  <img
                    src={project.icon} 
                    alt={project.title} 
                    className="w-40 h-40"
                  />
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
                <Link 
                  className="mt-4 inline-block text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
                >
                  Ver detalles →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;