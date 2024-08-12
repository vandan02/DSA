const checkPalindrome = (str) => {
    let i = 0;
    let j = str.length - 1;
    while (i < j) {
        if (str[i] !== str[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}

const find_Largest_Palindrome = (str, k) => {
    let maxPalindrome = "";

    for (let i = 0; i <= str.length - k; i++) {
        for (let j = str.length; j >= i + k; j--) {
            let substring = str.slice(i, j);

            if (substring.length <= maxPalindrome.length) {
                break;
            }

            if (checkPalindrome(substring)) {
                maxPalindrome = substring;
                break;
            }
        }
    }

    return maxPalindrome;
}

const str = "babad";
let k = 3;
const largestPalindrome = find_Largest_Palindrome(str, k);
console.log(largestPalindrome);

