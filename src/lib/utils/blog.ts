export function calculateReadTime(content: string | null | undefined): string {
  if (!content) return "1 min read";
  const wordsPerMinute = 225;
  const noHtml = content.replace(/<[^>]*>?/gm, ""); // Clean MDX/HTML tags
  const words = noHtml.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}
