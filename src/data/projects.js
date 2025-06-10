
export const projects = [
    {
      id: 1,
      title: 'App Emergencias',
      description: 'Aplicación móvil que permite a los ciudadanos reportar emergencias y verlas en un mapa en tiempo real.',
      fullDescription: 'App Emergencias es una aplicación móvil completa desarrollada con React Native que conecta ciudadanos con organismos de emergencia. La aplicación permite reportar incidentes con geolocalización automática, subir fotos y videos, y categorizar el tipo de emergencia. Los usuarios pueden ver un mapa en tiempo real con todas las emergencias activas en su área. Por el lado de los organismos de emergencia, tienen acceso a un panel administrativo donde pueden gestionar reportes, asignar recursos y comunicarse directamente con los ciudadanos.',
      tags: ['React Native', 'Firebase', 'Redux', 'Django'],
      image: '/placeholder-mobile.jpg',
      icon: '/images/logos/icon.png',
      type: 'mobile',
      iconApp: '/images/logos/icon.png',
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
      mainImages:[
        '/images/aplicacion/emergencias/login.png',
        '/images/aplicacion/emergencias/inicio.png',
        '/images/aplicacion/emergencias/directorio.png',
        '/images/aplicacion/emergencias/detalle.png',
        '/images/aplicacion/emergencias/cuadrantes.png',
        '/images/aplicacion/emergencias/creacion.png',
        '/images/aplicacion/emergencias/lista.png',
        '/images/aplicacion/emergencias/emergencias.png',
        '/images/aplicacion/emergencias/mapares.png',
      ],
      github: 'https://github.com/davidmarint/app-emergencia',
    },
    {
      id: 2,
      title: 'Ecomerce Anly',
      description: 'Una aplicación móvil de comercio electrónico desarrollada en Flutter.',
      fullDescription: 'Ecomerce Anly es una aplicación de comercio electrónico moderna desarrollada en Flutter que ofrece una experiencia de compra fluida y atractiva. La aplicación incluye un catálogo completo de productos con filtros avanzados, sistema de favoritos, carrito de compras persistente, y múltiples métodos de pago. Los usuarios pueden crear perfiles personalizados, seguir sus pedidos en tiempo real, y recibir recomendaciones personalizadas basadas en su historial de compras.',
      tags: ['Flutter', 'Dart', 'Firebase'],
      image: '/placeholder-mobile.jpg',
      icon: '/images/logos/logo.png',
      type: 'mobile',
      iconApp: '/images/logos/logo-app.png',
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
        mainImages:[
        '/images/aplicacion/ecommerce/sesion.png',
        '/images/aplicacion/ecommerce/registro.png',
        '/images/aplicacion/ecommerce/inicio.png',
        '/images/aplicacion/ecommerce/detalle.png',
        '/images/aplicacion/ecommerce/categorias.png',
        '/images/aplicacion/ecommerce/carro.png',
        '/images/aplicacion/ecommerce/realizado.png',
        '/images/aplicacion/ecommerce/seguimiento.png',
        '/images/aplicacion/ecommerce/pedido.png',
      ],
      github: 'https://github.com/davidmarint/Ecommerce-anly',
    }
  ];