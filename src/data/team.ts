export interface TeamMember {
  name: string;
  role: string;
  title: string;
  bio: string;
  credentials?: string;
  specialties: string[];
  image: string;
  featured?: boolean;
}

export const FOUNDER_INFO: TeamMember = {
  name: 'AR. ATHIF ALI',
  role: 'Founder & Principal Architect',
  title: 'Principal Architect & Founder, Studio Assiduous',
  credentials: 'B.Arch | Council of Architecture (COA) | IIA Member',
  bio: 'Athif Ali is the Founder and Principal Architect of Studio Assiduous Design Co. based in Manjeri, Kerala. Leading the studio’s design direction, his architectural philosophy centers on spatial restraint, climatic responsiveness, and material truth—reinterpreting traditional Kerala vernacular spatial dynamics through clean, contemporary minimalist geometry.',
  specialties: [
    'Architectural Masterplanning',
    'Climate-Responsive Architecture',
    'Vernacular & Contemporary Fusion',
    'Spatial Proportions & Light Studies'
  ],
  image: '/brand/whatsapp-avatar.svg',
  featured: true
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'HEAD OF INTERIORS',
    role: 'Lead Interior Architect',
    title: 'Senior Interior Designer',
    credentials: 'M.Des (Interior Architecture)',
    bio: 'Directs the interior design department at Studio Assiduous, overseeing bespoke carpentry joinery, tactile material curation, ambient concealed lighting design, and sensory residential spatial suites.',
    specialties: ['Custom Cabinetry & Millwork', 'Tactile Material Palettes', 'Lighting Choreography', 'Spatial Flow'],
    image: '/brand/whatsapp-avatar.svg'
  },
  {
    name: 'LANDSCAPE ARCHITECT',
    role: 'Principal Landscape Designer',
    title: 'Landscape & Ecological Specialist',
    credentials: 'B.Arch, MLA (Landscape Architecture)',
    bio: 'Bridges architecture and nature through native tropical vegetation schemes, permeable stone courtyards, rain gardens, and seamless indoor-outdoor spatial transitions across Kerala sites.',
    specialties: ['Tropical Planting Schemes', 'Courtyard Ecosystems', 'Permeable Hardscapes', 'Water Features'],
    image: '/brand/whatsapp-avatar.svg'
  },
  {
    name: 'PROJECT ARCHITECT',
    role: 'Senior Project Architect',
    title: 'Site Execution & Technical Lead',
    credentials: 'B.Arch | COA',
    bio: 'Oversees on-site construction realization, structural coordination, terracotta brick jali detailing, and material execution precision from schematic drawings to final handover.',
    specialties: ['Structural Coordination', 'Detail Engineering', 'Jali & Brick Masonry', 'Site Supervision'],
    image: '/brand/whatsapp-avatar.svg'
  },
  {
    name: 'SPATIAL 3D & VISUAL ARTIST',
    role: '3D Visualizer & Spatial Artist',
    title: 'Architectural Visualization Lead',
    credentials: 'Dip. Architectural Visualization',
    bio: 'Transforms early conceptual geometry into cinematic, light-accurate spatial renderings and architectural digital artworks that embody the calm ethos of the studio.',
    specialties: ['Photorealistic CGI', 'Sun & Light Studies', 'Spatial Artwork', 'Virtual Walkthroughs'],
    image: '/brand/whatsapp-avatar.svg'
  }
];

export const STUDIO_VALUES = [
  {
    title: 'MATERIAL HONESTY',
    desc: 'We prioritize raw, authentic materials—terracotta clay, natural wood, exposed concrete, and brass—that age with grace in tropical climates.'
  },
  {
    title: 'CLIMATE RESPONSIVE',
    desc: 'Every structure is planned around Kerala’s monsoon patterns, solar orientation, stack ventilation, and shaded verandah transitions.'
  },
  {
    title: 'CRAFT & COLLABORATION',
    desc: 'We work closely with local Malabar masons, carpenters, and metal fabricators to preserve artisanal knowledge through contemporary design.'
  }
];
