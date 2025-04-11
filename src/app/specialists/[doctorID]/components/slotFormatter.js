export function formattedSlots(slotDetails) {
    if (!Array.isArray(slotDetails)) {
        console.error("Expected an array, received:", slotDetails);
        return {};
    }

    const sortedSlots = slotDetails.reduce((acc, item) => {
        const dateObj = new Date(item.date);
        const day = dateObj.getDate();
        const month = dateObj.toLocaleString("en-US", { month: "short" }); // Short month format
        const year = dateObj.getFullYear();
        const formattedDate = `${day} ${month} ${year}`;
        acc[formattedDate] = item.slots; // Assign slots to formatted date key
        return acc; // Must return acc in reduce
    }, {}); // Initial value is an empty object

    return sortedSlots;
}