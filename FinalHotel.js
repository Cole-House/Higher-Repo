var d= new Date();
var month = d.getMonth()+1;
var day = d.getDay() + 4;
var year = d.getFullYear();
//make variables for the day, month, and year to create a the current date to add to guest name//
i=0;
function checkIn(){
//if statement to limit room occupancy to 3//
  if (i<3) {
//creates a new item for a list in js//
var newListItem = document.createElement('li');
//creates new variable in place of input value//
var answer = document.getElementById('name1').value;
// creates a new text node from var(answer) and stores it in the variable(newText)//
var newText = document.createTextNode(answer+" "+"-"+" "+month+"/"+day+"/"+year);
//attach the new text node to the new element, so the text appends into the list item; display of input and date//
newListItem.appendChild(newText);
//find the new position where the new element should be added, which is index position 0 in the ordered list//
var position = document.getElementsByClassName('room1')[0];
//inserts the new element into its new position//
position.appendChild(newListItem);
//function adds one to i every time someone checks in//
i++;
//resets input bar to blank//
document.getElementById('name1').value=" ";
}
else{
  //if room is full the add button disappears//
  document.getElementById('b1').style.visibility="hidden";
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
  //reset the select index to 0 or "select"//
    document.getElementById('kill').selectedIndex = 0;
    //if you remove a guest then the add button appears again//
    document.getElementById('b1').style.visibility="visible";
  }
}
x=0;
function checkIn2(){
  if (x<3) {
var newListItem2 = document.createElement('li');
var answer2 = document.getElementById('name2').value;
var newText2 = document.createTextNode(answer2+" "+"-"+" "+month+"/"+day+"/"+year);
newListItem2.appendChild(newText2);
var position = document.getElementsByClassName('room2')[0];
position.appendChild(newListItem2);
x++;
document.getElementById('name2').value=" ";
}
else{
  document.getElementById('b2').style.visibility="hidden";
  return;
}
}
function checkOut2(){
  if (x<=3){
    var list2= document.getElementById('r2');
  var kill2= document.getElementById('kill2').value;
  list2.removeChild(list2.childNodes[kill2-1]);
  x--;
    document.getElementById('kill2').selectedIndex = 0;
    document.getElementById('b2').style.visibility="visible";
  }
}
y=0;
function checkIn3(){
  if (y<3) {
var newListItem3 = document.createElement('li');
var answer3 = document.getElementById('name3').value;
var newText3 = document.createTextNode(answer3+" "+"-"+" "+month+"/"+day+"/"+year);
newListItem3.appendChild(newText3);
var position = document.getElementsByClassName('room3')[0];
position.appendChild(newListItem3);
y++;
document.getElementById('name3').value=" ";
}
else{
  document.getElementById('b3').style.visibility="hidden";
  return;
}
}
function checkOut3(){
  if (y<=3){
    var list3= document.getElementById('r3');
  var kill3= document.getElementById('kill3').value;
  list3.removeChild(list3.childNodes[kill3-1]);
  y--;
    document.getElementById('kill3').selectedIndex = 0;
    document.getElementById('b3').style.visibility="visible";
  }
}
z=0;
function checkIn4(){
  if (z<3) {
var newListItem4 = document.createElement('li');
var answer4 = document.getElementById('name4').value;
var newText4 = document.createTextNode(answer4+" "+"-"+" "+month+"/"+day+"/"+year);
newListItem4.appendChild(newText4);
var position = document.getElementsByClassName('room4')[0];
position.appendChild(newListItem4 );
z++;
document.getElementById('name4').value=" ";
}
else{
  document.getElementById('b4').style.visibility="hidden";
  return;
}
}
function checkOut4(){
  if (z<=3){
    var list4= document.getElementById('r4');
  var kill4= document.getElementById('kill4').value;
  list4.removeChild(list4.childNodes[kill4-1]);
  z--;
    document.getElementById('kill4').selectedIndex = 0;
    document.getElementById('b4').style.visibility="visible";
  }
}
