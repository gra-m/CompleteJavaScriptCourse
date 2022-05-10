
function addRegular(a, b) {
    console.log(arguments);
    return a + b;
}

addRegular(9, 12);


const addExpr = function(a, b) {
    console.log(arguments)
    return a + b;
}

addExpr(2, 5, 8, 7);

const addArrow = (a, b) => {
    //console.log(arguments); // errors, arguments is not defined.
    return a + b;
}


addArrow(12, 87);
