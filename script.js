let name= document.querySelector('#name');
let rollno= document.querySelector('#rollNo');
let ac=document.querySelector("#ac");
let pic=document.getElementById('pic');

let inputs=document.querySelector("#inputs");
console.log(pic);
let card=document.querySelector(`.card`);
let inputss=document.querySelector('.inputss');
let image = document.getElementById("image")
let n=document.querySelector( "#n" );
let r=document.querySelector("#r");
let a=document.querySelector( "#a" ) ;


document.getElementById("submit").onclick = function generate() {

let back=document.createElement("button");

if (pic.files.length > 0 && pic.files[0] instanceof Blob) {
    image.src = URL.createObjectURL(pic.files[0]);
} else {
    console.error("No valid file selected.");
}
n.innerHTML=name.value;
r.innerHTML=rollno.value;
a.innerHTML=ac.value;

card.before(back);
back.style.display="none"
 inputs.style.display="none"
 inputss.style.display="none"
 card.style.display="block"
 console.log("hello")
 console.log(pic)
}
