export function formattedDates(dates) { // Debugging step to check the value of `dates`
  if (!Array.isArray(dates)) {
    console.error("Expected an array of dates");
    return [];
  }

  const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    const day = dateObj.getDate(); 
    const month = dateObj.toLocaleString('en-US', { month: 'short' });
    const year = dateObj.getFullYear();
    return `${day} ${month} ${year}`;

    
  };

  return dates.map((item) => formatDate(item.date));
}

export function reFormateDate( date ){
  const monthMap = {
    "Jan": 0, "Feb": 1, "Mar": 2, "Apr": 3, "May": 4, "Jun": 5,
    "Jul": 6, "Aug": 7, "Sep": 8, "Oct": 9, "Nov": 10, "Dec": 11
};   
const [day, month , year] = date.split(" ")

const fullDate = new Date(year, monthMap[month], parseInt(day));

// Convert to YYYY-MM-DD format
return fullDate.toISOString().split("T")[0]; 
}
