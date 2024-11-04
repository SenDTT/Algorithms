// String Compression III
function compressedString(word: string): string {
    let result: string = "";

    let index: number = 0;
    let countCh: number = 0;
    let lastCh: string = "";
    while (index < word.length) {
        if (countCh == 9 || (lastCh != "" && lastCh != word[index])) {
            result += countCh + lastCh;
            countCh = 0;
        }
        countCh++;
        lastCh = word[index];

        index++;
    }

    return result + countCh + lastCh;
};

console.log(compressedString("aaaaaaaaaaaaaabb"));
console.log(compressedString("abcde"));