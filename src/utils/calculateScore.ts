export const calculateScore = (stats: {
  speed: number;
  stamina: number;
  accuracy: number;
}) => {
  return Math.round((stats.speed + stats.stamina + stats.accuracy) / 3);
};