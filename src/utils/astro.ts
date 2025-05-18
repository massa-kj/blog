export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/\s+/g, '-')       // space → hyphen
    .replace(/[^\w-]/g, '');    // remove non-word characters
}
