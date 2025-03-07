export function timeAgoOrDate(timestamp) {
  const gdeltPattern = /^\d{8}T\d{6}Z$/;

  if (gdeltPattern.test(timestamp)) {
    const year = parseInt(timestamp.slice(0, 4), 10);
    const month = parseInt(timestamp.slice(4, 6), 10) - 1;
    const day = parseInt(timestamp.slice(6, 8), 10);
    const hours = parseInt(timestamp.slice(9, 11), 10);
    const minutes = parseInt(timestamp.slice(11, 13), 10);
    const seconds = parseInt(timestamp.slice(13, 15), 10);

    timestamp = new Date(Date.UTC(year, month, day, hours, minutes, seconds));
  } else {
    timestamp = new Date(timestamp);
  }

  if (isNaN(timestamp.getTime())) {
    return "Invalid Date";
  }

  const now = new Date();
  const diffMs = now - timestamp;
  const diffMinutes = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMinutes / 60);

  if (diffMinutes < 1) {
    return "Just now";
  } else if (diffMinutes < 60) {
    return `${diffMinutes}m ago`;
  } else if (diffHours < 24) {
    return `${diffHours}h ago`;
  } else {
    return timestamp.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }
}
