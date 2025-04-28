    //https://www.freecodecamp.org/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/
    //https://www.w3schools.com/js/js_arrays.asp
    //https://www.w3schools.com/js/js_array_const.asp
function setup(){
    var canvas = createCanvas(1260, 1000,)
    canvas.parent('holder')
    background('white')


    document.getElementById("erm").innerHTML = birds;
    let dust = createElement (dirt,[birds]);
    dust.style = ('color', 'black');
    dust.position(5,0)
    let p = createP(birds)
    p.position(5, 0);








    

}
