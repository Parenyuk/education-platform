

export const formatDuration = (duration: string): string => {
  const [hours, minutes] = duration.split(':').map(Number);

  if (hours > 0) {
    return `${hours}h ${minutes} min`;
  }

  return `${minutes} min`;
};
