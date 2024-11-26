// Greatest Common Divisor of Strings
function gcdOfStrings(str1: string, str2: string): string {
    let shorter: string = str1.length < str2.length ? str1 : str2;

    let divisor: string = shorter;
    while (divisor.length > 0) {
        let newStr = divisor;
        while (newStr.length < str1.length) newStr += divisor;

        let newStr2 = divisor;
        while (newStr2.length < str2.length) newStr2 += divisor;

        if (newStr == str1 && newStr2 == str2) {
            return divisor;
        }
        divisor = divisor.substring(0, divisor.length - 1);
    }

    return "";
};