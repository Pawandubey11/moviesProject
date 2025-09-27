// lib/timeFormat.js

/**
 * Format minutes into "Xh Ym" format
 * Example: 142 -> "2h 22m"
 * @param {number} minutes
 * @returns {string}
 */
export const formatRuntime = (minutes) => {
  if (!minutes || isNaN(minutes)) return "N/A";
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${h > 0 ? `${h}h ` : ""}${m}m`;
};

/**
 * Format date to a readable format
 * Example: "2025-09-15" -> "Sep 15, 2025"
 * @param {string | Date} date
 * @returns {string}
 */
export const formatDate = (date) => {
  if (!date) return "N/A";
  const options = { year: "numeric", month: "short", day: "numeric" };
  return new Date(date).toLocaleDateString("en-US", options);
};

/**
 * Format time (24h -> 12h with AM/PM)
 * Example: "18:30" -> "6:30 PM"
 * @param {string} time
 * @returns {string}
 */
export const formatTime = (time) => {
  if (!time) return "N/A";
  const [hour, minute] = time.split(":");
  const h = parseInt(hour, 10);
  const suffix = h >= 12 ? "PM" : "AM";
  const adjustedHour = h % 12 || 12;
  return `${adjustedHour}:${minute} ${suffix}`;
};
