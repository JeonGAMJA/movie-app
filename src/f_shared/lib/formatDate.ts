export const formatDate = (inputDate) => {
  const date = new Date(inputDate);

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(date);

  return formattedDate;
};
