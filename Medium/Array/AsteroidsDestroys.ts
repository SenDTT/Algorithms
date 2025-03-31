function asteroidsDestroyed(mass: number, asteroids: number[]): boolean {
  asteroids.sort((a, b) => a - b);

  if (mass < asteroids[0]) return false;

  let i = 0;
  while (mass >= asteroids[i] && i < asteroids.length) {
    mass += asteroids[i];
    i++;
  }

  return i < asteroids.length ? false : true;
}
