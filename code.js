// helloWorld function 
// function helloWorld() {
//     return "Hello, World!";
// }

// const helloWorld = function(){
//     return "Hello, World!";
// }


//sayHello function
function sayHello(input) {
    if (typeof input === "boolean") {
        return "Hello, World!"
    } else {
        return "Hello, " + input + "!";
    }
}


function isFive(x){
    return x == 5;
}

function isEven(x) {
    return x % 2 === 0 && typeof x !== 'boolean';
}







//     if (input === "Alex") {
//         return "Hello, Alex!";
//     } else if( input === "Pat"){
//         return "Hello, Pat!";
//     } else {
//         return "Hello, Jane!";
//     }
// }
