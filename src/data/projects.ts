export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  name: string;
  platform: string;
  summary: string;
  description: string[];
  features: string[];
  technologies: string[];
  links: ProjectLink[];
  icon: string;
  screenshots: string[];
}

// Each slug is also a route (/kapow, /twisty...). scripts/project-pages.js generates one page per slug at build time.
export const projects: Project[] = [
  {
    slug: 'twisty',
    name: 'twisty',
    platform: 'Android',
    summary: 'Motorcycle route planner for Spain that finds the twisty roads between where you start and where you are going.',
    description: [
      "Navigation apps treat \"avoid motorways\" as all or nothing: either you stay on the motorway the whole way, or you crawl through every village. A good ride is usually something else: the motorway to the hills, then the twisty roads.",
      'twisty plans that ride. It takes the motorway when that gets you to the curves sooner, and a slider sets how much extra time goes on curves. The ride goes to your navigation app, or out as a GPX file.',
      'It is free and planned on the device. It is not on Google Play yet, so for now you build it yourself from the repo.'
    ],
    features: [
      'Slider from fastest route to maximum curves',
      'Loops that bring you back to the start',
      'Ride summary with its twisty stretches',
      'Export to your navigation app or as GPX'
    ],
    technologies: ['TypeScript', 'OpenStreetMap', 'Android'],
    links: [{ label: 'GitHub', href: 'https://github.com/sanchezpaco/twisty' }],
    icon: '/projects/twisty/icon.svg',
    screenshots: ['/projects/twisty/1.jpg', '/projects/twisty/2.jpg', '/projects/twisty/3.jpg', '/projects/twisty/4.jpg']
  },
  {
    slug: 'kapow',
    name: 'Kapow',
    platform: 'Android',
    summary: 'Comic reader designed for the Samsung Z Fold, where the reading experience follows how you hold the device.',
    description: [
      'Kapow reads comic archives you already own (.cbz, .cbr, .cb7, .cbt and .pdf). It is not a store and downloads nothing.',
      'Unfolded you get full pages or a two-page spread. On the cover screen, Guided View detects the panels on the device and shows them one at a time, with enlarged speech bubbles so the text stays readable on the small screen.',
      'It works on any Android 11+ device, with a Spanish and English interface and black, graphite and paper themes.'
    ],
    features: [
      'Reading modes driven by the device posture',
      'Guided View with on-device panel detection',
      'Enlarged speech bubbles for the cover screen',
      'Library with covers, series, progress and search'
    ],
    technologies: ['Kotlin', 'Jetpack Compose', 'Android'],
    links: [
      { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.sanchezpaco.kapow' },
      { label: 'GitHub', href: 'https://github.com/sanchezpaco/kapow' }
    ],
    icon: '/projects/kapow/icon.png',
    screenshots: ['/projects/kapow/1.jpg', '/projects/kapow/2.jpg', '/projects/kapow/3.jpg', '/projects/kapow/4.jpg']
  },
  {
    slug: 'procesionariapp',
    name: 'ProcesionariApp',
    platform: 'Android & iOS',
    summary: 'Free, non-profit app to report pine processionary caterpillar nests in Spain.',
    description: [
      'The pine processionary is a caterpillar whose urticating hairs can cause allergic reactions in people and serious harm to pets, while weakening the pine trees it feeds on.',
      'ProcesionariApp lets anyone report a sighting with its location. Volunteer moderators validate the reports, building a shared map of affected areas so people and pets can stay away.',
      'It also includes articles, news and tips to prevent and handle encounters with the caterpillar.'
    ],
    features: [
      'Geolocated reports on a shared map',
      'Reports validated by volunteer moderators',
      'News and educational resources'
    ],
    technologies: ['React Native', 'Expo', 'Node.js', 'PostgreSQL'],
    links: [
      { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.sanchezpaco.procesionariapp' },
      { label: 'App Store', href: 'https://apps.apple.com/es/app/procesionariapp/id6743547663' }
    ],
    icon: '/projects/procesionariapp/icon.png',
    screenshots: ['/projects/procesionariapp/1.jpg']
  }
];
