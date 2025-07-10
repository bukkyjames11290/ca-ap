// Add this utility function at the top of your file
export const getRandomColor = (letter: string) => {
  // Use letter to create consistent colors for the same initials
  const colors = [
    'bg-blue-400', 
    'bg-green-400',
    'bg-yellow-400',
    'bg-purple-400',
    'bg-pink-400',
    'bg-indigo-400',
    'bg-red-400',
    'bg-teal-400'
  ];
  const charCode = letter.charCodeAt(0);
  return colors[charCode % colors.length];
};
