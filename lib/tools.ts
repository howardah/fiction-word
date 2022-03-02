function theOdds(percent: number): boolean {
  var Odds = Math.floor(Math.random() * 100);
  return Odds < percent ? true : false;
}

const budgeByOdds = (num: number, percent: number, direction: string): number => {
  const down = direction === "down";
  while (theOdds(percent)) down ? num-- : num++;
  return num;
};

function range(bottom: number, top: number): number {
  const min = Math.ceil(bottom);
  const max = Math.floor(top);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export { theOdds, budgeByOdds, capitalizeFirstLetter, range };
