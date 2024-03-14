const path = '../src/assets/img/';

const profesores = [
  {
    foto: 'https://www.theprospectordaily.com/wp-content/uploads/2022/06/JORGE_MUNOZ-317x475.jpg',
    nombre: 'Juan Rodríguez',
    desc: `El maestron Josué tiene experiencia profesional como profesor de inglés desde hace 7 años
      Además tiene una carrera profesional y 2 maestrias
    `
  },
  {
    foto: 'https://b2472105.smushcdn.com/2472105/wp-content/uploads/2023/12/Poses-Perfil-Profesional-Hombres-oct.-13-2022-3-819x1024.jpg?lossy=1&strip=1&webp=1',
    nombre: 'Gregory Hoouse',
    desc: `El maestron Greg tiene experiencia profesional como diagnosta clinico desde hace 13 años
      Además tiene una carrera profesional en medicina, 2 doctorados y una moto
    `
  },
  {
    foto: 'https://img.ecartelera.com/noticias/72000/72020-h4.jpg',
    nombre: 'Barney Stinson',
    desc: `El maestron Ted tiene experiencia profesional como profesor de arquitectura desde hace 8 años
      Además tiene una carrera profesional y una sitcom muy exitosa
    `
  }
]

const costos = [
  {
    precio: '$550 MX',
    dias: 'Lunes, Miércoles y Viernes'
  },
  {
    precio: '$450 MX',
    dias: 'Martes y Jueves'
  },
  {
    precio: '$450 MX',
    dias: 'Sábado'
  }
]

export const cursos = [
    {
      img: 'https://img.freepik.com/vector-gratis/ilustracion-bandera-estados-unidos_53876-18165.jpg',
      nombre: 'INGLÉS',
      desc: '¡Despierta tu potencial con el inglés! Aprende el idioma que abre puertas al éxito.',
      titulo: 'Lengua Extranjera',
      publicoDirigido1:`Este curso de inglés es para cualquiera que quiera abrir 
      puertas a nuevas oportunidades. Ya sea que busques avanzar en tu carrera, 
      viajar con confianza o ampliar tus horizontes culturales, te brindamos las 
      herramientas y el apoyo para alcanzar tus metas.`,
      publicoDirigido2:`Nuestro curso se adapta a tu estilo de aprendizaje y te 
      sumerge en lecciones interactivas para un progreso rápido y efectivo. Cubrimos 
      desde gramática hasta pronunciación y comprensión oral, fortaleciendo tus habilidades 
      lingüísticas.`,
      queAprendera:[
        'Gramática',
        'Vocabulario',
        'Pronunciación.',
        'Habilidades de conversación',
        'Comprensión auditiva',
        'Preparación para exámenes',
        'Apoyo personalizado:'
      ],
      descLg:
      `Conviértete en un hablante del inglés competente y domina
      las habilidades lingüísticas más demandadas en al ámbito profesional actual.
      Libera la creatividad lingüística, aprende a comunicarte de manera
      efectiva en diversos contextos y adapta tus habilidades lingüísticas
      para satisfacer las necesidades de usuarios diversos.

      Explora las últimas tendencias en el uso del idioma inglés, estilos y la
      composición óptima de elementos lingüísticos`,
      temario: [
        'Hangui y Expresiones Basicas',
        'Numeros y conteo',
        'Conversacion con Verbos',
        'Hablar sobre experiencias y vocabulario avanzado',
        'Estrcutura de oraciones compuestas'
      ],
      video: `${path}compa.mp4`,
      costos: costos,
      profesores: profesores,
      isOnline: true,
    },
    {
      img: 'https://1.bp.blogspot.com/_QbhkU0p7RyM/Sv3Pp9ImoyI/AAAAAAAAA2o/q1iGxw_Z5_4/w1200-h630-p-k-no-nu/Bandera+de+Corea+-+grande.png',
      nombre: 'COREANO',
      desc: '¡Despierta tu potencial con el Coreano! Aprende el idioma que abre puertas al éxito.',
      titulo: 'Clases de Coreano',
      publicoDirigido1:`Este curso de inglés es para cualquiera que quiera abrir 
      puertas a nuevas oportunidades. Ya sea que busques avanzar en tu carrera, 
      viajar con confianza o ampliar tus horizontes culturales, te brindamos las 
      herramientas y el apoyo para alcanzar tus metas.`,
      publicoDirigido2:`Nuestro curso se adapta a tu estilo de aprendizaje y te 
      sumerge en lecciones interactivas para un progreso rápido y efectivo. Cubrimos 
      desde gramática hasta pronunciación y comprensión oral, fortaleciendo tus habilidades 
      lingüísticas para que te conviertas en un hablante confiado y competente en inglés.`,
      queAprendera:[
        'Gramática',
        'Vocabulario',
        'Pronunciación.',
        'Habilidades de conversación',
        'Comprensión auditiva',
        'Preparación para exámenes',
        'Apoyo personalizado'
      ],
      descLg:
      `Convierte en un hablante de coreano competente y domina
      las habilidades lingüísticas más demandadas en al ámbito profesional actual.
      Libera la creatividad lingüística, aprende a comunicarte de manera
      efectiva en diversos contextos y adapta tus habilidades lingüísticas
      para satisfacer las necesidades de usuarios diversos.

      Explora las últimas tendencias en el uso del idioma inglés, estilos y la
      composición óptima de elementos lingüísticos`,
      temario: [
        'Hangui y Expresiones Basicas',
        'Numeros y conteo',
        'Conversacion con Verbos',
        'Hablar sobre experiencias y vocabulario avanzado',
        'Estrcutura de oraciones compuestas'
      ],
      video: `${path}Prueba.mp4`,
      costos: costos,
      profesores: profesores,
      isOnline: true,
    },
    {
      img: 'https://png.pngtree.com/background/20230528/original/pngtree-sketch-portraits-sketching-tutorial-for-beginners-how-to-draw-a-portrait-picture-image_2783767.jpg',
      nombre: 'DIBUJO',
      desc: '¡Pinta tu mundo! cubre la magia de la creatividad con cada trazo.',
      titulo: 'Clases de Dibujo',
      publicoDirigido1:`Este curso de inglés es para cualquiera que quiera abrir 
      puertas a nuevas oportunidades. Ya sea que busques avanzar en tu carrera, 
      viajar con confianza o ampliar tus horizontes culturales, te brindamos las 
      herramientas y el apoyo para alcanzar tus metas.`,
      publicoDirigido2:`Nuestro curso se adapta a tu estilo de aprendizaje y te 
      sumerge en lecciones interactivas para un progreso rápido y efectivo. Cubrimos 
      desde gramática hasta pronunciación y comprensión oral, fortaleciendo tus habilidades 
      lingüísticas para que te conviertas en un hablante confiado y competente en inglés.`,
      queAprendera:[
        'Gramática',
        'Vocabulario',
        'Pronunciación.',
        'Habilidades de conversación',
        'Comprensión auditiva',
        'Preparación para exámenes',
        'Apoyo personalizado:'
      ],
      descLg:
      `Convierte en un dibujante competente y domina
      las habilidades artisticas más demandadas en al ámbito profesional actual.
      Libera la creatividad artistica, aprende a pintar de manera
      efectiva en diversos contextos y adapta tus habilidades artistica
      para satisfacer las necesidades de usuarios diversos.

      Explora las últimas tendencias en el uso de las pinturas, estilos y la
      composición óptima de elementos artisticos`,
      temario: [
        'Teoria del color',
        'Anatomia',
        'Poner precio a una comision de porno furro',
        'Hablar sobre experiencias y vocabulario avanzado',
        'Estrcutura de oraciones compuestas'
      ],
      video: `${path}Prueba2.mp4`,
      costos: costos,
      profesores: profesores,
      isOnline: true,
    }

  ]