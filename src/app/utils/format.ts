export const formatDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
};

export function calculateReadingTime(content: string | null): number | null {
  if (!content) return null;
  const wordsPerMinute = 200; // Average reading speed
  const words = content.split(/\s+/).length; // Split by whitespace and count
  const readingTime = Math.ceil(words / wordsPerMinute);
  return readingTime;
}
