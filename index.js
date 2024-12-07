
const img = document.getElementsByClassName('img')[0]
const start = document.getElementById("yes")
const pause = document.getElementById("no")
start.addEventListener('click', () => img.style.animationPlayState = "running")
pause.addEventListener('click', () => img.style.animationPlayState = "paused")

const image1 = document.getElementById("img");
const text = document.getElementById("h1");
document.getElementById("yes").onclick = function(){
document.getElementById("myh1").textContent = `ITS A MATCH`;
image.style.width = "500px";  
image.style.height = "500px"; 
document.getElementById("h1").textContent = "LETS GOO"
text1.textContent = ""
button.style.display = "none"; 
button1.style.display = "none"; 
input.style.display = "block";
inputbt.style.display = "block";
p1.style.display = "block";
}

const textElement = document.getElementById("h1");
const text1 = document.getElementById("p");
const button = document.getElementById("yes"); 
const button1 = document.getElementById("no");
const p1 = document.getElementById("p1");


   //onclick=changeImage('file2_processed.png')
 //}
 const images = {
   1:"file5_processed.png",
   2:"file2_processed.png",
   3: "file3_processed.png",
   4: "file3,4_processed.png",
   5:"file4.jpg",
   6:"file12.png",
   7:"15.jpg",
   8: "file16.jpg",
   9:"file17.jpg",
   10:"file13.jpg",
   };
 const max = 10;
 const min = 1;
 let randomNum1;
 const myh1 = document.getElementById('myh1');
 let image = document.getElementById('img');
 document.getElementById("no").onclick = function(){
  image.style.width = "200px";
image.style.height = "200px";
  textElement.textContent = "";
  randomNum1 = Math.floor(Math.random() * max) + min;
 console.log(randomNum1);
 p1.style.display = "none"
 input.style.display ="none"
 inputbt.style.display = "none"
 p1.textContent =""
 
 image.src = images[randomNum1];
 if(randomNum1 === 1){
  myh1.textContent="Jack:I'm interested in science"
 }
 else if(randomNum1 ===2){
  myh1.textContent="Michael:I like to work out"
 }
 else if(randomNum1 ===3){
   myh1.textContent="Azibo:I have 10k followers on instagram"
 }
 else if(randomNum1===4)
 {
  myh1.textContent="Ade:My dad is the CEO of monkeytype"
 }
 else if(randomNum1===5){
  myh1.textContent="Malawi:I have 3 US gold medals in swimming"
 }
 else if(randomNum1===6){
  myh1.textContent="Alkebulan:I have a PHD in Computer Science"
 }
 else if(randomNum1===7){
  myh1.textContent="Kellan:Im a frat boy looking to mingle"
 }
 else if(randomNum1===8){
  myh1.textContent="Chikondi:Professional F1 Driver"
 }
 else if(randomNum1===9){
  myh1.textContent="Zuri:A bit shy about my weight"
 }
 else if(randomNum1===10){
  myh1.textContent="Zuberi:Cmon just go out with me"
 }
 else{
  console.log("notcool");
 }}
const input = document.getElementById("input");
const inputbt = document.getElementById("inputbt");
let RandomNum2;
let max1 = 10
let min1 = 1
inputbt.onclick = function(){
  RandomNum2= Math.floor(Math.random() * max1) + min1;
  console.log(RandomNum2);
if (RandomNum2 ===1){
  document.getElementById("p1").textContent = `Yes`
}
else if(RandomNum2===2) {
  document.getElementById("p1").textContent =`No`
}
else if(RandomNum2===3) {
  document.getElementById("p1").textContent =`Thanks`
}
else if(RandomNum2===4) {
  document.getElementById("p1").textContent =`You're so funny`
}
else if(RandomNum2===5) {
  document.getElementById("p1").textContent =`Monke`
}
else if(RandomNum2===6) {
  document.getElementById("p1").textContent =`I like banana`
}
else if(RandomNum2===7) {
  document.getElementById("p1").textContent =`I want to go to Africa`
}
else if(RandomNum2===8) {
  document.getElementById("p1").textContent =`I like tribal Music`
}
else if(RandomNum2===9) {
  document.getElementById("p1").textContent =`My dream job is working on a banana plantation`
}
else if(RandomNum2===10) {
  document.getElementById("p1").textContent =`My day was good, How about yours?`
}
}




 
   




