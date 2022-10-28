 const inital = document.querySelector('.start');
 const guess = document.querySelector('input');
 const btn = document.querySelector('.btn');
 const btn1 = document.querySelector('.btn1');
 let score = document.querySelector('.score-1');
 score.innerHTML = 0;
 let sc = 0;
 let game = false;
 let newV = "";
 let randomV = "";
 let newImage = new Image(500, 300);
 let resEle = document.querySelector(".result");



 const words = ['Apple', 'Ball', 'Cat','Jug', 'Dog', 'Egg', 'Goat', 'Hat', 'Ice cream', 'fish','Kite','Leg','Mouth','Nose','Olive','Pen','Quiet','Rat','Snake','Rabbit','Umbrella','Van','Water','box','Zoo','Yacht','Tree'];




// It takes the form randomly from  words[]
 function  createWords()  {
     let number = Math.floor(Math.random() * words.length);
     let random = words[number];
     // console.log(random.split(""));
     return random;
 }
// If it was for a correct answer it gives a sound of applause 
 function answerT() {
  var snd = new Audio('sound/s1.mp3')
  snd.play()
}

// He takes a word and works to change the place of the letters 
 function  jumbleWord  (el)  {
     for (let i = el.length - 1; i >= 0; i--) {
         let temp = el[i];
         let j = Math.floor(Math.random() * (i + 1));
         el[i] = el[j];
         el[j] = temp;

     }
     return el.join("");


 }
//He started a game
 function play(){
  if (!game) {
    game = true;
    inital.style.color = 'darkred';

    btn.textContent = 'Guess Word';
    guess.classList.toggle('hidden');
    newV = createWords(); // Takes a value createWords() 
    randomV = jumbleWord(newV.split(""));  // Takes a value jumbleWord() 
    console.log(randomV);
    inital.innerHTML = 'Arrange the word \'' + randomV + '\'';

} else {

    let inputWord = guess.value;
    if (inputWord === newV) {//Investigate who doesn't answer
      answerT();
     
        game = false;

        inital.innerHTML = `Awesome!It's correct.\n
                      It is ${newV}`;
        inital.style.color = 'darkviolet';
        sc += 5;
        score.innerHTML = sc;
        guess.classList.toggle('hidden');
        btn.innerHTML = 'start again';
        guess.value = "";

    } else {

    
        inital.innerHTML = `Better luck next time.Try Again! '${randomV}'`;
        inital.style.color = 'red';
        btn.innerHTML = 'Again';
        guess.value = "";
        guess.classList.toggle('hidden');
    }

}
 }

 // Contains a picture for every word
 btn1.addEventListener('click', function () {
  //He takes newV  and gives a picture according to  newV
    switch (newV) {
        case 'Apple':
 
          newImage.src = "images/Apple.jpg";
          resEle.appendChild(newImage);
          break;
        case 'Ball':

          newImage.src = "images/Ball.jpg";
          resEle.appendChild(newImage);
          break;
        case 'Cat':
    
          newImage.src = "images/Cat.jpg";
          resEle.appendChild(newImage);
          break;
        case 'Dog':
    
          newImage.src = "images/Dog.jpg";
          resEle.appendChild(newImage);
          break;
        case 'Egg':
  
          newImage.src = "images/Egg.jpg";
          resEle.appendChild(newImage);
          break;
        case 'fish':
    
          newImage.src = "images/fish.jpg";
          resEle.appendChild(newImage);
          break;
        case 'Goat':
   
          newImage.src = "images/Goat.jpg";
          resEle.appendChild(newImage);
          break;
        case 'Hat':
  
          newImage.src = "images/Hat.jpg";
          resEle.appendChild(newImage);
          break;
        case 'Ice cream':
  
          newImage.src = "images/Ice cream.jpg";
          resEle.appendChild(newImage);
          break;
        case 'Jug':
   
          newImage.src = "images/Jug.jpg";
          resEle.appendChild(newImage);
          break;
        case 'Kite':

          newImage.src = "images/Kite.jpg";
          resEle.appendChild(newImage);
          break;
        case 'Leg':
  
          newImage.src = "images/Leg.jpg";
          resEle.appendChild(newImage);
          break;
        case 'Mouth':

          newImage.src = "images/Mouth.jpg";
          resEle.appendChild(newImage);
          
          break;
        case 'Nose':

          newImage.src = "images/Nose.jpg";
          resEle.appendChild(newImage);
          break;
        case 'Olive':
   
          newImage.src = "images/Olive.jpg";
          resEle.appendChild(newImage);
          break;
        case 'Pen':
 
          newImage.src = "images/Pen.jpg";
          resEle.appendChild(newImage);
          break;
        case 'Quiet':
   
          newImage.src = "images/Quiet.jpg";
          resEle.appendChild(newImage);
          break;
        case 'Rabbit':
      
          newImage.src = "images/Rabbit.jpg";
          resEle.appendChild(newImage);
          break;
        case 'Snake':

          newImage.src = "images/Snake.jpg";
          resEle.appendChild(newImage);
          break;
        case 'Tree':
    
          newImage.src = "images/Tree.jpg";
          resEle.appendChild(newImage);
          break;
        case 'Umbrella':

          newImage.src = "images/Umbrella.jpg";
          resEle.appendChild(newImage);
          break;
        case 'Van':

          newImage.src = "images/Van.jpg";
          resEle.appendChild(newImage);
          break;
        case 'Water':
  
          newImage.src = "images/Water.jpg";
          resEle.appendChild(newImage);
          break;
        case 'box':
   
          newImage.src = "images/box.jpg";
          resEle.appendChild(newImage);
          break;
        case 'Yacht':
   
          newImage.src = "images/Yacht.jpg";
          resEle.appendChild(newImage);
          break;
        case 'Zoo':
     
          newImage.src = "images/Zoo.jpg";
          resEle.appendChild(newImage);
          break;
        default:
          console.log("There isn't any");
      }



 })

 // star play
 btn.addEventListener('click', function () {
     play();
 });
