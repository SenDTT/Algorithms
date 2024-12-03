function predictPartyVictory(senate: string): string {
  if (senate.length === 1) return senate === "R" ? "Radiant" : "Dire";

  let radiant: number[] = [];
  let dire: number[] = [];

  for (let i = 0; i < senate.length; i++) {
    switch (senate[i]) {
      case "D":
        dire.push(i);
        break;
      case "R":
        radiant.push(i);
        break;
    }
  }

  while (dire.length > 0 && radiant.length > 0) {
    const radiantIndex = radiant.shift()!;
    const direIndex = dire.shift()!;

    if (radiantIndex < direIndex) {
      radiant.push(radiantIndex + senate.length);
    } else {
      dire.push(direIndex + senate.length);
    }
  }
  return radiant.length > 0 ? "Radiant" : "Dire";
}

console.log(predictPartyVictory("RD") == "Radiant");
console.log(predictPartyVictory("RRR") == "Radiant");
console.log(predictPartyVictory("RDD") == "Dire");
console.log(predictPartyVictory("DDRRR") == "Dire");
