import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
	// pathname: '/blog/en/cheatsheets'
  const [, , lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

// export function useTranslations(lang: keyof typeof ui) {
//   return function t(key: keyof typeof ui[typeof defaultLang]) {
//     return ui[lang][key] || ui[defaultLang][key];
//   };
// }

// e.g. collection: 'articles', slug: 'ja/2025/git' -> ja/articles/2025/git
export function generateUrl(collection: string, slug: string) {
	const [lang, ...rest] = slug.split('/');
	return `${lang}/${collection}/${rest.join('/')}`;
}
