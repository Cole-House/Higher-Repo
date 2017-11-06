i=0;
function checkIn(){
  if (i<3) {
//creates a new item for a list in js//
var newListItem = document.createElement('li');
//creates new variable in place of input value//
var answer = document.getElementById('name1').value;
// creates a new text node from var(answer) and stores it in the variable(newText)//
var newText = document.createTextNode(answer);
//attach the new text node to the new element, so the text appends into the list item//
newListItem.appendChild(newText);
//find the new position where the new element should be added, which is index position 0 in the ordered list//
var position = document.getElementsByClassName('room1')[0];
//inserts the new element into its new position//
position.appendChild(newListItem);
i++;
}
else{
  return;
}
}
function checkOut(){
  if (i<=3){
    var list= document.getElementById('r1');
  //I create variable that calls on the ordered list
  var kill= document.getElementById('kill').value;
  //taking input from user and calling upon it//
  list.removeChild(list.childNodes[kill-1]);
  //removes input value from ordered list//
  i--;
    document.getElementById('kill').selectedIndex = 0;
  }
}
x=0;
function checkIn2(){
  if (x<3) {
var newListItem2 = document.createElement('li');
var answer2 = document.getElementById('name2').value;
var newText2 = document.createTextNode(answer2);
newListItem2.appendChild(newText2);
var position = document.getElementsByClassName('room2')[0];
position.appendChild(newListItem2);
x++;
}
else{
  return;
}
}
function checkOut2(){
  if (x<=3){
    var list2= document.getElementById('r2');
  var kill2= document.getElementById('kill2').value;
  list.removeChild(list.childNodes[kill2-1]);
  x--;
    document.getElementById('kill2').selectedIndex = 0;
  }
}
y=0;
function checkIn3(){
  if (y<3) {
var newListItem3 = document.createElement('li');
var answer3 = document.getElementById('name3').value;
var newText3 = document.createTextNode(answer3);
newListItem3.appendChild(newText3);
var position = document.getElementsByClassName('room3')[0];
position.appendChild(newListItem3);
y++;
}
else{
  return;
}
}
function checkOut3(){
  if (y<=3){
    var list3= document.getElementById('r3');
  var kill3= document.getElementById('kill3').value;
  list.removeChild(list.childNodes[kill3-1]);
  y--;
    document.getElementById('kill3').selectedIndex = 0;
  }
}
z=0;
function checkIn4(){
  if (z<3) {
var newListItem4 = document.createElement('li');
var answer4 = document.getElementById('name4').value;
var newText4 = document.createTextNode(answer4);
newListItem4.appendChild(newText4);
var position = document.getElementsByClassName('room4')[0];
position.appendChild(newListItem4 );
z++;
}
else{
  return;
}
}
function checkOut4(){
  if (z<=3){
    var list4= document.getElementById('r4');
  var kill4= document.getElementById('kill4').value;
  list.removeChild(list.childNodes[kill4-1]);
  z--;
    document.getElementById('kill4').selectedIndex = 0;
  }
}
