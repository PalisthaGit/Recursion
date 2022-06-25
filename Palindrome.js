function checkPalindrome(text) {

    // base case
    if(text.length === 1 || text.length === 0) {
        return true;
    }
    if(text.charAt(0) === text.charAt(text.length - 1)) {

       return checkPalindrome(text.substring(1, text.length - 1))
    }
    return false;

}

console.log(checkPalindrome("kknkk"));