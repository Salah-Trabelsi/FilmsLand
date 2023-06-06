export function getVoteClass(vote) {
    if (vote >= 0 && vote <= 5.9) {
      return 'text-red-500 font-medium';
    } else if (vote > 4.9 && vote <= 6.9) {
      return 'text-orange-500 font-medium';
    } else {
      return 'text-green-500 font-medium';
    }
  }
  