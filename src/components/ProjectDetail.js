import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Star } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Misma data de proyectos (idealmente esto vendría de un contexto o store)
  const projects = [
    {
      id: 1,
      title: 'App Emergencias',
      description: 'Aplicación móvil que permite a los ciudadanos reportar emergencias y verlas en un mapa en tiempo real.',
      fullDescription: 'App Emergencias es una aplicación móvil completa desarrollada con React Native que conecta ciudadanos con organismos de emergencia. La aplicación permite reportar incidentes con geolocalización automática, subir fotos y videos, y categorizar el tipo de emergencia. Los usuarios pueden ver un mapa en tiempo real con todas las emergencias activas en su área. Por el lado de los organismos de emergencia, tienen acceso a un panel administrativo donde pueden gestionar reportes, asignar recursos y comunicarse directamente con los ciudadanos.',
      tags: ['React Native', 'Firebase', 'Redux', 'Django'],
      image: '/placeholder-mobile.jpg',
      icon: 'images/logos/icon.png',
      type: 'mobile',
      features: [
        'Reporte de emergencias con geolocalización',
        'Mapa en tiempo real',
        'Chat directo con organismos de apoyo',
        'Clasificación automática de emergencias',
        'Notificaciones push',
        'Panel administrativo para organismos'
      ],
      technologies: {
        'Frontend': 'React Native con Redux para manejo de estado',
        'Backend': 'Django REST Framework',
        'Base de datos': 'Firebase Firestore',
        'Mapas': 'Google Maps API',
        'Autenticación': 'Firebase Auth'
      },
      challenges: [
        'Implementación de geolocalización en tiempo real',
        'Optimización de rendimiento para mapas con múltiples marcadores',
        'Sincronización de datos entre múltiples usuarios'
      ],
      github: 'https://github.com/usuario/app-emergencias',
      demo: 'https://app-emergencias-demo.com'
    },
    {
      id: 2,
      title: 'Ecomerce Anly',
      description: 'Una aplicación móvil de comercio electrónico desarrollada en Flutter.',
      fullDescription: 'Ecomerce Anly es una aplicación de comercio electrónico moderna desarrollada en Flutter que ofrece una experiencia de compra fluida y atractiva. La aplicación incluye un catálogo completo de productos con filtros avanzados, sistema de favoritos, carrito de compras persistente, y múltiples métodos de pago. Los usuarios pueden crear perfiles personalizados, seguir sus pedidos en tiempo real, y recibir recomendaciones personalizadas basadas en su historial de compras.',
      tags: ['Flutter', 'Dart', 'Firebase'],
      image: '/placeholder-mobile.jpg',
      icon: 'images/logos/logo.png',
      type: 'mobile',
      features: [
        'Catálogo de productos con búsqueda avanzada',
        'Sistema de favoritos y listas de deseos',
        'Carrito de compras persistente',
        'Múltiples métodos de pago',
        'Seguimiento de pedidos',
        'Recomendaciones personalizadas',
        'Sistema de reviews y calificaciones'
      ],
      technologies: {
        'Framework': 'Flutter con arquitectura BLoC',
        'Backend': 'Firebase Functions',
        'Base de datos': 'Cloud Firestore',
        'Pagos': 'Stripe API',
        'Imágenes': 'Firebase Storage'
      },
      challenges: [
        'Optimización de la carga de imágenes de productos',
        'Implementación de sistema de pagos seguro',
        'Manejo de inventario en tiempo real'
      ],
      github: 'https://github.com/usuario/ecomerce-anly',
      demo: 'https://ecomerce-anly-demo.com'
    }
  ];

  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Proyecto no encontrado</h2>
          <button 
            onClick={() => navigate('/')}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <ArrowLeft size={20} />
            Volver a proyectos
          </button>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero del proyecto */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
            <div className="relative">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-gray-700">
                {project.type === 'mobile' ? '📱 Aplicación Móvil' : '🌐 Aplicación Web'}
              </div>
            </div>
            
            <div className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <img src={project.icon} alt="" className="w-12 h-12 rounded-lg" />
                <div>
                  <h1 className="text-3xl font-bold text-gray-800">{project.title}</h1>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors"
                >
                  <Github size={20} />
                  Ver código
                </a>
                <a 
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <ExternalLink size={20} />
                  Ver demo
                </a>
              </div>
            </div>
          </div>

          {/* Descripción detallada */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Descripción del Proyecto</h2>
            <p className="text-gray-600 leading-relaxed">{project.fullDescription}</p>
          </div>

          {/* Características */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Características Principales</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Star className="text-blue-500 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tecnologías */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Tecnologías Utilizadas</h2>
            <div className="space-y-4">
              {Object.entries(project.technologies).map(([category, tech]) => (
                <div key={category}>
                  <h3 className="font-semibold text-gray-800 mb-2">{category}</h3>
                  <p className="text-gray-600">{tech}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Desafíos */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Desafíos Técnicos</h2>
            <div className="space-y-3">
              {project.challenges.map((challenge, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">{challenge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;