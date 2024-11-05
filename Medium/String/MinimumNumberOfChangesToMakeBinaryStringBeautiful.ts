function minChanges(s: string): number {
  if (s == "" || s.length % 2 != 0) return 0;
  let changes: number = 0;

  let lastCh: string = s[0];
  for (let i = 1; i < s.length; i++) {
    if (s[i] != lastCh) {
        if (i % 2 != 0) {
            changes++;
        } else {
            lastCh = s[i];
        }
    }
  }
  
  return changes;
}


console.log(minChanges("1001")); // 2
console.log(minChanges("10")); // 1
console.log(minChanges("0000")); // 0