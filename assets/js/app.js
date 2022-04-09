/*-- like unlike--*/
function stwitchLikes() {
  var unlike = document.getElementById("unlike").style;
  console.log(unlike)
  var like = document.getElementById("like").style;
  if (like.display=="none") {
     unlike.display="none";
     like.display="flex"
     console.log("img")
  } else {
      unlike.display="flex"
      like.display="none"
      console.log("noimg")

  }
}

/*--plus minus--*/

function plus() {
    const price=3
    var  number= document.getElementById("number").innerHTML;
     var Plus=Number(number)+1
    document.getElementById("number").innerHTML=Plus   
}

function minus(){
    var number =document.getElementById("number").innerHTML

    var Minus=Number(number)-1
    if(Minus<1){
        document.getElementById("number").innerHTML=1
    }else{
        document.getElementById("number").innerHTML=Minus
    }

}
