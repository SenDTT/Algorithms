function isSubsequence(s: string, t: string): boolean {
  let s2 = "";

  for (let i = 0, j = 0; i < t.length; i++) {
    if (t[i] == s[j]) {
      s2 += t[i];
      j++;
    }

    if (j == s.length) break;
  }

  return s2 == s;
}
