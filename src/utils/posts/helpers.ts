export const getShortPostContent = (content: string): string => {
  const maxNumberOfWords = 150;
  const newContent = content.split(" ");

  if (newContent.length > maxNumberOfWords) {
    return `${newContent.splice(0, maxNumberOfWords).join(" ")}...`;
  }

  return content;
};
