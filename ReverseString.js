function reverseString(text) {

    if(text === "") {
        return "";
    }
    return reverseString(text.substring(1)) + text.charAt(0);
}

console.log(reverseString("Palistha"));