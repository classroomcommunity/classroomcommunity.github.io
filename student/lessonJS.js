function upvote(item){
  var arrow = $(item).attr("id");
  document.getElementById(arrow).style.borderBottom="4vh solid blue";
  var split = arrow.split("arrowUp");
  var otherArrow = "arrowDown" + split[1];
  document.getElementById(otherArrow).style.borderTop="4vh solid black";
}
function downvote(item){
  var arrow = $(item).attr("id");
  document.getElementById(arrow).style.borderTop="4vh solid blue";
  var split = arrow.split("arrowDown");
  var otherArrow = "arrowUp" + split[1];
  document.getElementById(otherArrow).style.borderBottom="4vh solid black";
}
function newQ(){
  let parent = document.getElementById("questionDiv");
  let qbox = document.getElementById("newQ");
  document.getElementById("newQButton").style.display="none";
  var question = qbox.value;
  qbox.style.display="none";
  let html = "<span style='font-size: 4vh;'>" + question + "</span>";
  parent.innerHTML+= html;
}
