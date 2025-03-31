function asteroidCollision(asteroids: number[]): number[] {
  let ans: number[] = [asteroids[0]];

  for (let i = 1; i < asteroids.length; i++) {
    let nextValue = asteroids[i];
    let isValid = true;

    while (ans.length > 0 && ans[ans.length - 1] > 0 && nextValue < 0) {
      let lastValue = ans.pop()!;

      if (Math.abs(lastValue) >= Math.abs(nextValue)) {
        isValid = false;

        if (Math.abs(lastValue) > Math.abs(nextValue)) {
          ans.push(lastValue);
        }
        break;
      }
    }

    if (isValid) ans.push(nextValue);
  }

  return ans;
}
