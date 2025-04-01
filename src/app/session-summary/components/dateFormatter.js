export function formattedDates(dates) { // Debugging step to check the value of `dates`
  if (!Array.isArray(dates)) {
    console.error("Expected an array of dates");
    return [];
  }

  const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    const day = dateObj.getDate(); 
    const month = dateObj.toLocaleString('en-US', { month: 'short' });
    return `${day} ${month}`;

    
  };

  return dates.map((item) => formatDate(item.date));
}
