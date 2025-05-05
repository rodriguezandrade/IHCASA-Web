interface Card {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
  linkHref: string;
  linkText: string;
  linkIconSrc: string;
  linkIconAlt: string;
}

export const cards: Card[] = [
  {
    imgSrc: 'assets/images/home/cards-icons/Icon_1.svg',
    imgAlt: 'First Card Icon',
    title: 'Garantía de Calidad Internacional',
    description: 'Importamos a gran escala para satisfacer todas tus necesidades.',
    linkHref: 'products',
    linkText: 'Conoce Nuestros Productos',
    linkIconSrc: 'assets/images/home/cards-icons/chevron-right.svg',
    linkIconAlt: 'Link Icon',
  },
  {
    imgSrc: 'assets/images/home/cards-icons/Icon_2.svg',
    imgAlt: 'Second Card Icon',
    title: 'Importaciones a Gran Escala en todo el País',
    description: 'Nuestra red de distribución asegura que siempre tengas lo mejor a tu alcance.',
    linkHref: 'products',
    linkText: 'Conoce Nuestros Productos',
    linkIconSrc: 'assets/images/home/cards-icons/chevron-right.svg',
    linkIconAlt: 'Link Icon',
  },
  {
    imgSrc: 'assets/images/home/cards-icons/Icon_3.svg',
    imgAlt: 'Third Card Icon',
    title: 'Licencias y Permisos Sanitarios Certificados',
    description: 'Contamos con todos los permisos y certificados para brindarte producto de calidad.',
    linkHref: 'products',
    linkText: 'Conoce Nuestros Productos',
    linkIconSrc: 'assets/images/home/cards-icons/chevron-right.svg',
    linkIconAlt: 'Link Icon',
  },
];
