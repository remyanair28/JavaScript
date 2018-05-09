// const circle = {
//     radius: 5,
//     location: {
//         x: 1,
//         y: 1,
//     },
//     draw: function(){
//         console.log('draw');
//     }
// };
//circle.draw();


//suppose if we want to create another circle. With the current implementation we have to 
//duplicate all this code. This can be a problem if we have 1 or more methods in our object.
//If there is a bug we have to come back and fix it in multiple places. 
//Imaging if the circle object has 10 methods.
//If our object doesn't have method, duplicating will not be a big problem, we can just change values
//So creating objects using literal ways is not a good idea if that object has behaviour(1 or more object)

// const circle = {
//     radius: 5,
//     location: {
//         x: 1,
//         y: 1,
//     },
//     draw: function(){
//         console.log('draw');
//     }
// };

//factory function
function createCircle(radius){
    return {
        //radius: radius, 
        //in ES6 if key and value are same we can remove value
        radius,
        draw: function(){
            console.log('draw');
        }
    };
}
const circle = createCircle(1);
circle.draw();

//Constructor function
function Circle(radius){
    //this reference to the obj that is executing this piece of code
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
    //return this;
}
const another =  new Circle(1);  //call Circle using 'new' operator
//when we use new operator to call a function, 3 things happen
//create empty obj {}
//Then it will set this to point that object
//return that object from the function, we are not explicitly returning this but it will automatically happens





