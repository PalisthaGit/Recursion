let counter = 0;
function callMe() {
    if(counter>3){
        return 'done';
    }
    counter++
    callMe();
    console.log("Hello ");
}

callMe();