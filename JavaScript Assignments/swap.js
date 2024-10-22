function swapping(x,y) {
    console.log("Before swapping: x value is", x, ", y value is", y);
    x=x+y;
    y=x-y;
    x=x-y;
    console.log("After swapping: x  value is", x, ", y value is", y);
}
let x=5;
let y=10;
swapping(x,y);
