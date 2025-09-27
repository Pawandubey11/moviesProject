const isoTimeFormat = (dateString) => {
    const date = new Date(dateString);
    const localOffset = date.getTimezoneOffset() * 60000; // in milliseconds
    date.setTime(date.getTime() - localOffset);
    return date.toISOString();
};
export default isoTimeFormat;