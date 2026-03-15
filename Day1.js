console.log(calculateArea(10, 10, triangle))
// Here we used hoisting to print area of triangle and run calculateArea func before its declaration

function calculateArea (a, b, areafunction) {
    return areafunction(a,b);
}
// area of Reactangle
const reactangle = (l,b) => l * b;

// area of square
const square = (side) => side * side;

//area of circle
const circle = (r) => Math.PI * r * r ;

//area of Triangle
function triangle (b, h) {
    return 0.5 * b * h;
}

console.log(calculateArea(10, 10, circle))
console.log(calculateArea(10, 10, reactangle))
console.log(calculateArea(10, 10, square))


