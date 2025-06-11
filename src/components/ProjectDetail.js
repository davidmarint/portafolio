import { useParams, useNavigate, } from 'react-router-dom';
import {ChevronLeft, ChevronRight, ArrowLeft, Github, Star } from 'lucide-react';
import {projects} from '../data/projects';
import Navigation from './Header/Navigation';
import { useState,useEffect } from 'react';
import Footer from './Footer';


const ImageCarousel = ({ images, title }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-64 md:h-80 bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500">No hay imágenes disponibles</span>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Imagen principal */}
      <div className="relative overflow-hidden">
        <div className="flex items-center justify-center h-full">
        <img 
          src={images[currentImageIndex]} 
          alt={`${title} - Imagen ${currentImageIndex + 1}`}
          className="w-46 h-96 md:h-140  object-cover transition-all duration-300"
        />
        </div>
        {/* Overlay con gradiente para mejor legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      {/* Botones de navegación (solo si hay más de 1 imagen) */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90 backdrop-blur-sm rounded-full p-2 transition-all duration-200 shadow-lg"
            aria-label="Imagen anterior"
          >
            <ChevronLeft size={20} className="text-gray-700" />
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90 backdrop-blur-sm rounded-full p-2 transition-all duration-200 shadow-lg"
            aria-label="Siguiente imagen"
          >
            <ChevronRight size={20} className="text-gray-700" />
          </button>
        </>
      )}

      {/* Indicadores de posición */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentImageIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white/60 hover:bg-white/80'
              }`}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Contador de imágenes */}
      {images.length > 1 && (
        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
          {currentImageIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );
};



const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

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
      <Navigation />
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
          <div className="rounded-2xl shadow-lg overflow-hidden mb-8">
          
               <ImageCarousel 
              images={project.mainImages || [project.image]} 
              title={project.title}
            />
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-gray-700">
                {project.type === 'mobile' ? '📱 Aplicación Móvil' : '🌐 Aplicación Web'}
              </div>
            
            
            <div className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <img src={project.iconApp} alt="ee" className="w-12 h-12 rounded-lg" />
                <div>
                  <h1 className="text-3xl font-bold text-gray-800">{project.title}</h1>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-red-200 text-red-700 rounded-full text-sm font-medium"
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
                  <Star className="text-red-500 mt-1 flex-shrink-0" size={16} />
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
      <Footer />
    </div>
  );
};

export default ProjectDetail;