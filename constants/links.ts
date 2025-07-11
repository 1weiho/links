import { BookUser, Cloud, Frame, LucideIcon, Palette, Wrench } from 'lucide-react';

export enum LinkCategory {
  DESIGN = 'design',
  TOOL = 'tool',
  CLOUD = 'cloud',
  UI = 'ui',
  PORTFOLIO = 'portfolio'
}

export interface Link {
  id: string;
  name: string;
  url: string;
}

export type LinkWithCategory = Link & { category: LinkCategory };

export interface CategoryInfo {
  id: LinkCategory;
  name: string;
  icon: LucideIcon;
  iconColorClassname?: string;
}

export const CATEGORY_CONFIG: Record<LinkCategory, Omit<CategoryInfo, 'id'>> = {
  [LinkCategory.DESIGN]: {
    name: 'Design',
    icon: Palette,
    iconColorClassname: 'text-rose-300',
  },
  [LinkCategory.TOOL]: {
    name: 'Tool',
    icon: Wrench,
    iconColorClassname: 'text-sky-300',
  },
  [LinkCategory.CLOUD]: {
    name: 'Cloud',
    icon: Cloud,
    iconColorClassname: 'text-amber-400',
  },
  [LinkCategory.UI]: {
    name: 'UI',
    icon: Frame,
    iconColorClassname: 'text-violet-300',
  },
  [LinkCategory.PORTFOLIO]: {
    name: 'Portfolio',
    icon: BookUser,
    iconColorClassname: 'text-emerald-300',
  },
};

export const ALL_LINKS: LinkWithCategory[] = [
  // Design
  {
    id: 'animations-on-the-web',
    name: 'Animations on the Web',
    url: 'https://animations.dev/learn',
    category: LinkCategory.DESIGN,
  },
  {
    id: 'devouring-details',
    name: 'Devouring Details',
    url: 'https://devouringdetails.com',
    category: LinkCategory.DESIGN,
  },
  {
    id: 'mobbin',
    name: 'Mobbin',
    url: 'https://mobbin.com',
    category: LinkCategory.DESIGN,
  },
  {
    id: 'layers',
    name: 'Layers',
    url: 'https://layers.to',
    category: LinkCategory.DESIGN,
  },
  {
    id: 'dribbble',
    name: 'Dribbble',
    url: 'https://dribbble.com',
    category: LinkCategory.DESIGN,
  },
  {
    id: 'emil-kowalski',
    name: 'Emil Kowalski',
    url: 'https://emilkowal.ski',
    category: LinkCategory.DESIGN,
  },
  {
    id: 'uilabs',
    name: 'uilabs',
    url: 'https://uilabs.dev',
    category: LinkCategory.DESIGN,
  },
  {
    id: 'vercel-design',
    name: 'Vercel Design',
    url: 'https://vercel.com/design',
    category: LinkCategory.DESIGN,
  },
  {
    id: 'coolors',
    name: 'Coolors',
    url: 'https://coolors.co/palettes',
    category: LinkCategory.DESIGN,
  },
  {
    id: 'pigment',
    name: 'Pigment',
    url: 'https://pigment.shapefactory.co',
    category: LinkCategory.DESIGN,
  },
  {
    id: 'web-gradients',
    name: 'WebGradients',
    url: 'https://webgradients.com',
    category: LinkCategory.DESIGN,
  },
  {
    id: 'eggradients',
    name: 'Eggradients',
    url: 'https://eggradients.com',
    category: LinkCategory.DESIGN,
  },
  {
    id: 'svg-generator',
    name: 'SVG generator',
    url: 'https://fffuel.co',
    category: LinkCategory.DESIGN,
  },
  {
    id: 'magic-pattern',
    name: 'MagicPattern',
    url: 'https://www.magicpattern.design',
    category: LinkCategory.DESIGN,
  },

  // Tool
  {
    id: 'v0',
    name: 'v0',
    url: 'https://v0.dev',
    category: LinkCategory.TOOL,
  },
  {
    id: 'grep',
    name: 'Grep',
    url: 'https://grep.app',
    category: LinkCategory.TOOL,
  },
  {
    id: 'tailwind-play',
    name: 'Tailwind Play',
    url: 'https://play.tailwindcss.com',
    category: LinkCategory.TOOL,
  },
  {
    id: 'code-pen',
    name: 'CodePen',
    url: 'https://codepen.io',
    category: LinkCategory.TOOL,
  },
  {
    id: 'json-crack',
    name: 'JSON Crack',
    url: 'https://jsoncrack.com',
    category: LinkCategory.TOOL,
  },
  {
    id: 'animate-code',
    name: 'AnimateCode',
    url: 'https://www.animate-code.com',
    category: LinkCategory.TOOL,
  },
  {
    id: 'github-star-history',
    name: 'GitHub Star History',
    url: 'https://www.star-history.com',
    category: LinkCategory.TOOL,
  },
  {
    id: 'svgl',
    name: 'svgl',
    url: 'https://svgl.app',
    category: LinkCategory.TOOL,
  },
  {
    id: 'snappify',
    name: 'snappify',
    url: 'https://snappify.com',
    category: LinkCategory.TOOL,
  },
  {
    id: 'ray-so',
    name: 'ray.so',
    url: 'https://ray.so',
    category: LinkCategory.TOOL,
  },
  {
    id: 'teachable-machine',
    name: 'Teachable Machine',
    url: 'https://teachablemachine.withgoogle.com',
    category: LinkCategory.TOOL,
  },
  {
    id: 'replit',
    name: 'Replit',
    url: 'https://replit.com',
    category: LinkCategory.TOOL,
  },
  {
    id: 'hero-patterns',
    name: 'Hero Patterns',
    url: 'https://heropatterns.com',
    category: LinkCategory.TOOL,
  },
  {
    id: 'lucide',
    name: 'Lucide',
    url: 'https://lucide.dev',
    category: LinkCategory.TOOL,
  },
  {
    id: 'crontab-guru',
    name: 'crontab guru',
    url: 'https://crontab.guru',
    category: LinkCategory.TOOL,
  },
  {
    id: 'css-hd-gradients',
    name: 'CSS HD Gradients',
    url: 'https://gradient.style',
    category: LinkCategory.TOOL,
  },
  {
    id: 'tailwind-css-cheat-sheet',
    name: 'Tailwind CSS Cheat Sheet',
    url: 'https://nerdcave.com/tailwind-cheat-sheet',
    category: LinkCategory.TOOL,
  },
  {
    id: 'tree',
    name: 'Tree',
    url: 'https://tree.nathanfriend.com',
    category: LinkCategory.TOOL,
  },
  {
    id: 'page-speed-insights',
    name: 'PageSpeed Insights',
    url: 'https://pagespeed.web.dev',
    category: LinkCategory.TOOL,
  },

  // Cloud
  {
    id: 'upstash',
    name: 'Upstash',
    url: 'https://console.upstash.com',
    category: LinkCategory.CLOUD,
  },
  {
    id: 'trigger-dev',
    name: 'Trigger.dev',
    url: 'https://cloud.trigger.dev',
    category: LinkCategory.CLOUD,
  },
  {
    id: 'cloudways',
    name: 'Cloudways',
    url: 'https://unified.cloudways.com',
    category: LinkCategory.CLOUD,
  },
  {
    id: 'go-daddy',
    name: 'GoDaddy',
    url: 'https://tw.godaddy.com',
    category: LinkCategory.CLOUD,
  },
  {
    id: 'azure',
    name: 'Azure',
    url: 'https://portal.azure.com',
    category: LinkCategory.CLOUD,
  },
  {
    id: 'gcp',
    name: 'GCP',
    url: 'https://console.cloud.google.com',
    category: LinkCategory.CLOUD,
  },
  {
    id: 'planet-scale',
    name: 'PlanetScale',
    url: 'https://app.planetscale.com',
    category: LinkCategory.CLOUD,
  },
  {
    id: 'neon',
    name: 'Neon',
    url: 'https://console.neon.tech',
    category: LinkCategory.CLOUD,
  },
  {
    id: 'clerk',
    name: 'Clerk',
    url: 'https://dashboard.clerk.com',
    category: LinkCategory.CLOUD,
  },
  {
    id: 'resend',
    name: 'Resend',
    url: 'https://resend.com',
    category: LinkCategory.CLOUD,
  },
  {
    id: 'laravel-cloud',
    name: 'Laravel Cloud',
    url: 'https://cloud.laravel.com',
    category: LinkCategory.CLOUD,
  },

  // UI
  {
    id: 'shadcn-ui',
    name: 'shadcn/ui',
    url: 'https://ui.shadcn.com',
    category: LinkCategory.UI,
  },
  {
    id: 'daisy-ui',
    name: 'daisyUI',
    url: 'https://daisyui.com',
    category: LinkCategory.UI,
  },
  {
    id: 'aceternity-ui',
    name: 'Aceternity UI',
    url: 'https://ui.aceternity.com',
    category: LinkCategory.UI,
  },
  {
    id: 'magic-ui',
    name: 'Magic UI',
    url: 'https://magicui.design',
    category: LinkCategory.UI,
  },
  {
    id: 'catalyst-ui',
    name: 'Catalyst UI',
    url: 'https://catalyst.tailwindui.com',
    category: LinkCategory.UI,
  },
  {
    id: 'react-spectrum',
    name: 'React Spectrum',
    url: 'https://react-spectrum.adobe.com',
    category: LinkCategory.UI,
  },
  {
    id: 'origin-ui',
    name: 'Origin UI',
    url: 'https://originui.com',
    category: LinkCategory.UI,
  },
  {
    id: 'fancy-components',
    name: 'Fancy Components',
    url: 'https://www.fancycomponents.dev',
    category: LinkCategory.UI,
  },
  
  // Portfolio
  {
    id: 'rauno-freiberg',
    name: 'Rauno Freiberg',
    url: 'https://rauno.me',
    category: LinkCategory.PORTFOLIO,
  },
  {
    id: 'pedro-duarte',
    name: 'Pedro Duarte',
    url: 'https://ped.ro',
    category: LinkCategory.PORTFOLIO,
  },
  {
    id: 'anthony-fu',
    name: 'Anthony Fu',
    url: 'https://antfu.me',
    category: LinkCategory.PORTFOLIO,
  },
  {
    id: 'onur',
    name: 'Onur',
    url: 'https://onur.dev',
    category: LinkCategory.PORTFOLIO,
  },
  {
    id: 'cali-castle',
    name: 'Cali Castle',
    url: 'https://cali.so',
    category: LinkCategory.PORTFOLIO,
  },
  {
    id: 'ryo-lu',
    name: 'Ryo Lu',
    url: 'https://ryo.lu',
    category: LinkCategory.PORTFOLIO,
  },
  {
    id: 'emil-kowalski',
    name: 'Emil Kowalski',
    url: 'https://emilkowal.ski',
    category: LinkCategory.PORTFOLIO,
  },
  {
    id: 'lee-robinson',
    name: 'Lee Robinson',
    url: 'https://leerob.com',
    category: LinkCategory.PORTFOLIO,
  },
  {
    id: 'yiwei-ho',
    name: 'Yiwei Ho',
    url: 'https://1wei.dev',
    category: LinkCategory.PORTFOLIO,
  },
  {
    id: 'jhey-tompkins',
    name: 'Jhey Tompkins',
    url: 'https://www.jhey.dev',
    category: LinkCategory.PORTFOLIO,
  },
  {
    id: 'evil-rabbit',
    name: 'Evil Rabbit',
    url: 'https://www.evilrabbit.com',
    category: LinkCategory.PORTFOLIO,
  },
  {
    id: 'shu-ding',
    name: 'Shu Ding',
    url: 'https://shud.in',
    category: LinkCategory.PORTFOLIO,
  },
  {
    id: 'guillermo-rauch',
    name: 'Guillermo Rauch',
    url: 'https://rauchg.com',
    category: LinkCategory.PORTFOLIO,
  },
  {
    id: 'brian-ruiz',
    name: 'Brian Ruiz',
    url: 'https://www.b-r.io',
    category: LinkCategory.PORTFOLIO,
  },
];

export const getLinksByCategory = (
  category: LinkCategory
): LinkWithCategory[] => {
  return ALL_LINKS.filter((link) => link.category === category);
};

export const getCategoriesWithCount = () => {
  return Object.values(LinkCategory).map((category) => ({
    id: category,
    name: CATEGORY_CONFIG[category].name,
    icon: CATEGORY_CONFIG[category].icon,
    count: getLinksByCategory(category).length,
    iconColorClassname: CATEGORY_CONFIG[category].iconColorClassname,
  }));
};

export const generateCategoryStructure = () => {
  return Object.values(LinkCategory).map((category) => ({
    id: category,
    name: CATEGORY_CONFIG[category].name,
    icon: CATEGORY_CONFIG[category].icon,
    links: getLinksByCategory(category),
  }));
};

export const getLinkById = (id: string): LinkWithCategory | undefined => {
  return ALL_LINKS.find((link) => link.id === id);
};

export const searchLinks = (
  query: string,
  category?: LinkCategory
): LinkWithCategory[] => {
  const links = category ? getLinksByCategory(category) : ALL_LINKS;

  if (!query.trim()) return links;

  const searchTerm = query.toLowerCase();
  return links.filter(
    (link) =>
      link.name.toLowerCase().includes(searchTerm) ||
      link.url.toLowerCase().includes(searchTerm)
  );
};
