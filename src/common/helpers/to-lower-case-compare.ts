export const toLowerCaseCompare = (a: string, b: string): boolean => {
  return Boolean(a && b && a.toLowerCase() === b.toLowerCase());
};
