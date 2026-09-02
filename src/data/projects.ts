export interface Project {
  slug: string;
  title: string;
  subtitle?: string;
  category: 'Architecture' | 'Interior Design' | 'Landscape' | 'Art';
  location: string;
  year?: string;
  area?: string;
  description?: string;
  cover: string;
  images: string[];
  services?: string[];
  featured?: boolean;
  client?: string;
}

export const PROJECTS: Project[] = [
  {
    slug: 'aakruti',
    title: 'Aakruti',
    subtitle: 'Residence for Mr. Fahis',
    category: 'Architecture',
    location: 'Pathapiriyam, Edavana, Kerala',
    year: '2025',
    area: '3,200 SQ FT',
    description: 'A contemporary tropical residence exploring terracotta brick jali masonry, exposed timber rafters, and quiet courtyard light. Designed to harmonize traditional Kerala sloping roofs with minimalist spatial geometry.',
    cover: '/projects/aakruti/cover.jpg',
    images: [
      '/projects/aakruti/cover.jpg',
      '/projects/aakruti/01.jpg'
    ],
    services: ['Architecture', 'Interior Design', 'Landscape'],
    featured: true,
    client: 'Mr. Fahis'
  },
  {
    slug: 'grids-n-boxes',
    title: "Grids n' Boxes",
    subtitle: 'Residence for Mr. Sulfiker',
    category: 'Architecture',
    location: 'Amaycode, Malappuram, Kerala',
    year: '2025',
    area: '4,100 SQ FT',
    description: 'An architectural composition of cantilevered geometric volumes, brick jali privacy screens, and permeable driveway paving that frames surrounding tropical flora.',
    cover: '/projects/grids-n-boxes/cover.jpg',
    images: [
      '/projects/grids-n-boxes/cover.jpg'
    ],
    services: ['Architecture', 'Landscape Design'],
    featured: true,
    client: 'Mr. Sulfiker'
  },
  {
    slug: 'avni-house',
    title: 'Avni House',
    subtitle: 'Residence for Mr. Rahul',
    category: 'Architecture',
    location: 'Arukizhaya, Manjeri, Kerala',
    year: '2024',
    area: '2,850 SQ FT',
    description: 'A quiet residential villa featuring a signature circular aperture entrance wall, exposed brick accents, dark timber joinery, and cascading green terraces.',
    cover: '/projects/avni-house/cover.jpg',
    images: [
      '/projects/avni-house/cover.jpg',
      '/projects/avni-house/01.jpg'
    ],
    services: ['Architecture', 'Interior Design', 'Landscape'],
    featured: true,
    client: 'Mr. Rahul'
  },
  {
    slug: 'meadow-view',
    title: 'Meadow View',
    subtitle: 'Allied Art & Architecture',
    category: 'Architecture',
    location: 'Manjeri, Kerala, India',
    year: '2025',
    area: '3,600 SQ FT',
    description: 'A modern villa defined by perforated terracotta jali facades, exposed concrete structural frames, steel pergolas, and integrated bamboo planters.',
    cover: '/projects/meadow-view/cover.jpg',
    images: [
      '/projects/meadow-view/cover.jpg',
      '/projects/meadow-view/01.jpg'
    ],
    services: ['Architecture', 'Interior Design', 'Landscape', 'Art'],
    featured: true
  },
  {
    slug: 'interior-2100',
    title: 'Residence Interior',
    subtitle: '2100 SQ.FT Living Suite',
    category: 'Interior Design',
    location: 'Manjeri, Kerala',
    year: '2025',
    area: '2,100 SQ FT',
    description: 'An ultra-refined monochrome interior suite highlighting double-height sheer drapery, custom gray modular kitchen cabinetry, exposed concrete ceilings, floating steel stairs, and muted leather furnishings.',
    cover: '/projects/interior-2100/cover.jpg',
    images: [
      '/projects/interior-2100/cover.jpg',
      '/projects/interior-2100/01.jpg',
      '/projects/interior-2100/02.jpg',
      '/projects/interior-2100/03.jpg'
    ],
    services: ['Interior Design', 'Spatial Styling', 'Custom Joinery'],
    featured: true
  }
];

export const STUDIO_INFO = {
  name: 'STUDIO ASSIDUOUS',
  tagline: 'ARCHITECTURAL FIRM',
  disciplines: ['ART', 'ARCHITECTURE', 'INTERIOR DESIGN', 'LANDSCAPE'],
  location: 'MANJERI · MALAPPURAM, KERALA · INDIA',
  fullAddress: 'House Number C-11, Nelliparambu Road, Manjeri, Malappuram - 676122, Kerala',
  email: 'info@studioassiduous.com',
  instagram: 'studioassiduous.in',
  instagramUrl: 'https://www.instagram.com/studioassiduous.in?igsi=cnN3bzdpcHZlNzcz',
  threadsUrl: 'https://www.threads.com/@studioassiduous.in?xmt=AQG0n5qfhnZfRVGAAW2gF711g3316se-_472go6OV9Z_VG8',
  phone: '+91 xxxxxxxxxx',
  whatsappUrl: '#',
  placeholderCopy: {
    heroStatement: 'DESIGNING DREAMS INTO REALITY, ONE SPACE AT A TIME.',
    introStatement: 'ARCHITECTURAL FIRM · INTERIORS & LANDSCAPES.',
    introText: 'Studio Assiduous is a multidisciplinary architectural firm based in Manjeri, Kerala, exploring architecture, interiors, landscape, and spatial art through considered design.',
    aboutStatement: 'THE ARCHITECTURAL PRACTICE',
    aboutDescription: 'Rooted in Manjeri, Kerala, Studio Assiduous is an architectural firm operating at the intersection of structural rigor, material honesty, and spatial serenity. Every project is an inquiry into light, proportion, texture, and climate responsiveness.'
  }
};
