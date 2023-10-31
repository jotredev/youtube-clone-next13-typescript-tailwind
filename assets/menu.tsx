import {
  LuHome,
  LuPlaySquare,
  LuMonitorPlay,
  LuUserSquare2,
  LuClock3,
  LuClock,
} from 'react-icons/lu';

export const menu = [
  {
    id: '1',
    category: 'menu',
    items: [
      {
        id: '1',
        label: 'Inicio',
        icon: LuHome,
        href: '/',
      },
      {
        id: '2',
        label: 'Shorts',
        icon: LuPlaySquare,
        href: '/shorts',
      },
      {
        id: '3',
        label: 'Subscripciones',
        icon: LuMonitorPlay,
        href: '/subscripciones',
      },
    ],
  },
  {
    id: '2',
    category: 'user',
    items: [
      {
        id: '1',
        label: 'Tu canal',
        icon: LuUserSquare2,
        href: '/perfil',
      },
      {
        id: '2',
        label: 'Historial',
        icon: LuClock3,
        href: '/historial',
      },
      {
        id: '3',
        label: 'Mis videos',
        icon: LuPlaySquare,
        href: '/mis-videos',
      },
      {
        id: '4',
        label: 'Ver más tarde',
        icon: LuClock,
        href: '/ver-mas-tarde',
      },
    ],
  },
];

export const subs = [
  {
    id: '1',
    label: 'Code With Antonio',
    image:
      'https://res.cloudinary.com/jotredev/image/upload/v1698247714/ElementumUI/hombres/a-parque-atracciones-que-mira-camara_qxn9il.webp',
    href: '/sub-1',
  },
  {
    id: '2',
    label: 'Fazt Code',
    image:
      'https://res.cloudinary.com/jotredev/image/upload/v1698092582/ElementumUI/hombres/hombre-45354dsfd_w82pg3.webp',
    href: '/sub-2',
  },
  {
    id: '3',
    label: 'Midulive',
    image:
      'https://res.cloudinary.com/jotredev/image/upload/v1697568346/ElementumUI/hombres/onrie-ampliamente-esperando-sorpresa_rcgn7i.webp',
    href: '/sub-3',
  },
  {
    id: '4',
    label: 'Doble G',
    image:
      'https://res.cloudinary.com/jotredev/image/upload/v1698247714/ElementumUI/hombres/a-parque-atracciones-que-mira-camara_qxn9il.webp',
    href: '/sub-4',
  },
];
