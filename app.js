function isPalindrome(str) {
    let j = str.length - 1
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[j]) {
            return false;
        }
        j--;
    }
    return true;
}

let str1 = "racecar";
let str2 = "nitin";
let str3 = "Rama";

// document.write(isPalindrome(str1));
if(isPalindrome(str3)){
document.write('this is the palindrom');

}else{
document.write('this is not palindrom');

}

