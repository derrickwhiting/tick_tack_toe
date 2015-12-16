var playerOneName = prompt('What is your Name Player 1?');
var playerTwoName = prompt('What is your Name Player 2?');
document.getElementById('player_one_name').innerHTML = playerOneName;
document.getElementById('player_two_name').innerHTML = playerTwoName;

var boxes = document.getElementsByClassName('tic-tac-toe-box');
console.log(boxes);

var clicks = 0

var win 

var newGameButton = document.getElementById('newGameButton');

// Add class function
function addClass(el, className) {
 if (el.classList)
   el.classList.add(className)
 else if (!hasClass(el, className)) el.className += " " + className
}
// checks if has class
function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}
function removeClass(ele,cls) {
  if (hasClass(ele,cls)) {
    var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
    ele.className=ele.className.replace(reg,' ');
  }
}
newGameButton.addEventListener('click', function() {
  for(var i = 0; i < boxes.length; i++) {
    boxes[i].innerHTML = '';
    removeClass(boxes[i], "clicked");
    clicks = 0
  }
});


for(var i = 0; i < boxes.length; i++) {
  var box = boxes[i];
  box.addEventListener('click', function() {
    clicks = clicks + 1;
    console.log()

    checkBox(this, clicks);

  });
}

function checkBox(box_value, clicks) {
  console.log(clicks)
  if (box_value.className.indexOf("clicked") >= 0) {
    alert('this one is full');
    clicks = clicks - 1  
  } else if(clicks % 2 == 0){
    box_value.innerHTML = 'X';
    addClass(box_value, 'clicked');
  } else {
    box_value.innerHTML = 'O';
    addClass(box_value, 'clicked');
  }
}
  // console.log(this.classList)

    // this.classList.add("clicked");


