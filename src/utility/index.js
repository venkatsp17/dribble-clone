export const timeAgo = (timestamp) => {
    const now = new Date();
    const timeDifference = now - new Date(timestamp); // Difference in milliseconds
  
    const minutes = Math.floor(timeDifference / 1000 / 60);
    const hours = Math.floor(timeDifference / 1000 / 60 / 60);
    const days = Math.floor(timeDifference / 1000 / 60 / 60 / 24);
    const weeks = Math.floor(timeDifference / 1000 / 60 / 60 / 24 / 7);
    const months = Math.floor(timeDifference / 1000 / 60 / 60 / 24 / 30);
  
    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    if (hours < 24) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    if (days < 7) return `${days} day${days > 1 ? 's' : ''} ago`;
    if (weeks < 5) return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
    return `${months} month${months > 1 ? 's' : ''} ago`;
};
  
  