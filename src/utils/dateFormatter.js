export function formatDate(dateString) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString("id-ID", options);

  return formattedDate;
}
