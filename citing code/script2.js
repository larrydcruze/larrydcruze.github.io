var container2 = document.querySelector(".text2");

var speeds = {
   pause: 500, //Higher number = longer delay
   slow: 120,
   normal: 90,
   fast: 40,
   superFast: 10
};

var text2Lines = [
   { speed: speeds.slow, string: "abcaaaaa" },
   {speed: speed.fast, string: "lalalala"}
  
];


var characters2 = [];
text2Lines.forEach((line2, index) => {
   if (index < textLines2.length - 1) {
      line2.string += " "; //Add a space between lines
   }

   line2.string.split("").forEach((character2) => {
      var span = document.createElement("span");
      span.textContent2 = character2;
      container2.appendChild(span);
      characters2.push({
         span: span,
         isSpace: character2 === " " && !line2.pause,
         delayAfter: line2.speed,
         classes: line2.classes || []
      });
   });
});

function revealOneCharacter2(list2) {
   var next2 = list2.splice(0, 1)[0];
   next2.span.classList2.add("revealed2");
   next2.classes.forEach((c2) => {
      next2.span.classList2.add(c2);
   });
   var delay = next2.isSpace && !next2.pause ? 0 : next2.delayAfter;

   if (list2.length > 0) {
      setTimeout2(function () {
         revealOneCharacter2(list2);
      }, delay);
   }
}



//Kick it off
//const elem = document.getElementById("ena")

function play2(){
setTimeout2(() => {
revealOneCharacter2(characters2);   
}, 600)
}
ena2.addEventListener('mouseover', play2); //added so the text will play when you hover over the image

