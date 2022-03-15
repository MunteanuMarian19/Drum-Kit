  //Detecting Btn press, clicked
  //if a btn was pressed,
  for (let i = 0; i < document.querySelectorAll(".drum").length; i++) { //how many elements with classes ".drum" are : 7
    //document.querySelectorAll(".drum").length = nr of drums
    document.querySelectorAll(".drum")[i].addEventListener("click", function() { //getting all btns with class ".drum"

      let buttonInnerHtml = this.innerHTML; //variable that holds the value, check the btn that wass pressed
      //"this" is the btn that trigers the event
      makeSound(buttonInnerHtml); //(send to makeSound() to play the relevant sound)pass in key by calling make sound = innerHTML of the btn that was pressed

      btnAnimation(buttonInnerHtml);
    });

  }

  //Detecting Keyboard press
  document.addEventListener("keydown", function(event) { //if a key was pressed, on the all document/keyboard

    makeSound(event.key); //the "key" poperty of the event//tells which keyboard key was pressed
    //when the event is detected, the function get's called//then it goes to the function makeSound

    btnAnimation(event.key);
  });

  function makeSound(key) {

    switch (key) {
      case "w":
        let tom_1 = new Audio("sounds/tom-1.mp3");
        tom_1.play();
        break;

      case "a":
        let tom_2 = new Audio("sounds/tom-2.mp3");
        tom_2.play();
        break;

      case "s":
        let tom_3 = new Audio("sounds/tom-3.mp3");
        tom_3.play();
        break;

      case "d":
        let tom_4 = new Audio("sounds/tom-4.mp3");
        tom_4.play();
        break;

      case "j":
        let snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;

      case "k":
        let crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;

      case "l":
        let kick_bass = new Audio("sounds/kick-bass.mp3");
        kick_bass.play();
        break;

      default:
        console.log(buttonInnerHtml);

    }
  }

  function btnAnimation(currentKey) { //currentKey is a just a single character

    let activeBtn = document.querySelector("." + currentKey);

    activeBtn.classList.add("pressed");

    setTimeout(function() {
      activeBtn.classList.remove("pressed");
    }, 100);

  }
