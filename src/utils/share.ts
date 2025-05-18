export const BASE_URL = import.meta.env.BASE_URL;

export const TOP_MENU = {
	articles: 'articles',
	cheatsheets: 'cheatsheets',
	tags: 'tags',
	about: 'about',
};

export const BREADCRUMBS_DEFINITION = {
  'blog': 'Home',
  '404': '404: Page not found',
  [TOP_MENU.articles]: 'Articles',
  [TOP_MENU.cheatsheets]: 'Cheat Sheets',
  [TOP_MENU.about]: 'About',
};

export const MENU_DEFINITION = [
  {
    label: 'Articles',
    path: `/${TOP_MENU.articles}`,
    children: [
      { label: '2025', path: `/${TOP_MENU.articles}/2025` },
      { label: '2024', path: `/${TOP_MENU.articles}/2024` },
    ],
  },
  {
    label: 'Cheat Sheets',
    path: `/${TOP_MENU.cheatsheets}`,
  },
  {
    label: 'Tags',
    path: `/${TOP_MENU.tags}`,
  },
  {
    label: 'About',
    path: `/${TOP_MENU.about}`,
  },
];

