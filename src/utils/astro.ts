export function slugify(str: string): string {
  return str
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')       // space → hyphen
    .replace(/[^\w-]/g, '');    // remove non-word characters
    // .replace(/[^\w\-ぁ-んァ-ヶ一-龠]/g, '') // Japanese
}

export function generateToc(data: { depth: number, slug: string, text: string }): Array<{ level: number, id: string, text: string }> {
	return data.map((item) => ({
		level: item.depth,
		id: item.slug,
		text: item.text,
	}));
}
