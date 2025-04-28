var birds = ['Shuu_sprite.webp', 'ryouta', 'Nanaki_sprite.webp',]
birds.forEach(function(image) {    // for each link l in ArrayOfImages
    var img = document.createElement('img'); // create an img element
    img.src = image;                     // set its src to the link l
    img.height = "45";
    img.width = "50";
    document.body.appendChild(img);
    //https://stackoverflow.com/questions/42327498/output-an-array-of-images-in-javascript
})

// generics
for(ryouta of birds){
    console.log( bird );
}

var morebirds = ['Ryouta_sprite.webp']

for(morebirds[1] of morebirds){
    birds.push('Ryouta_sprite.webp')
}

var ptags = document.getElementsByTagName("p");
console.log(ptags);
for(var i = 0; i < ptags.length; i++){
    ptags[i].innerHTML = birds[i];
}
