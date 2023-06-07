export const capitalize = (string: string): string => {
  if (!string) return string;
  return string[0].toUpperCase() + string.slice(1);
};
