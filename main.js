var count = 0;
alert("For better experience use dekstop site");
var no = document.getElementById("no").addEventListener('click', function(){
  let yes = document.getElementById("yes");
  let btn = document.getElementById("no");
  let kenshie = document.getElementById("kenshie");
  count++;
  if(count == 1){
    btn.style.padding = "25px 65px";
    yes.style.padding = "35px 75px";
    yes.style.fontSize = "35px";
    btn.textContent = "Pweaseee!";
    kenshie.src = "/gifs/cat1.gif";
    yes.style.transition = "1s";
    btn.style.transition = "1s";
  }
  else if(count == 2){
    btn.style.padding = "20px 60px";
    yes.style.padding = "40px 80px";
    yes.style.fontSize = "40px";
    btn.textContent = "C'mooon!";
    kenshie.src = "/gifs/cat2.gif";
    yes.style.transition = "1s";
    btn.style.transition = "1s";
  }
  else if(count == 3){
    btn.style.padding = "15px 40px";
    yes.style.padding = "45px 85px"
    yes.style.fontSize = "45px";
    yes.style.boxShadow = "0px 2px 10px red"
    btn.textContent = "Plssss!";
    kenshie.src = "/gifs/cat3.gif";
    yes.style.transition = "1s";
    btn.style.transition = "1s";
  }
  else if(count == 4){
    btn.style.padding = "10px 35px";
    yes.style.padding = "50px 90px"
    yes.style.fontSize = "50px";
    yes.style.boxShadow = "0px 5px 20px red"
    btn.textContent = "Be fr!";
    kenshie.src = "/gifs/cat4.gif";
    yes.style.transition = "1s";
    btn.style.transition = "1s";
  }
  else if(count == 5){
    btn.style.padding = "5px 30px";
    yes.style.padding = "55px 95px"
    yes.style.fontSize = "55px";
    yes.style.boxShadow = "0px 5px 60px red"
    btn.textContent = "Rethink?";
    kenshie.src = "/gifs/cat5.gif";
    yes.style.transition = "1s";
    btn.style.transition = "1s";
  }
  else if(count == 6){
    btn.style.padding = "0px 25px";
    yes.style.padding = "60px 100px"
    yes.style.fontSize = "50px";
    yes.style.boxShadow = "0px 5px 100px red"
    btn.textContent = "Pretty please?";
    kenshie.src = "/gifs/cat6.gif";
    yes.style.transition = "1s";
    btn.style.transition = "1s";
  }
  else if(count == 7){
    btn.style.display = "none";
    yes.style.padding = "60px 100px"
    yes.style.fontSize = "60px";
    yes.style.boxShadow = "0px 5px 120px red"
    yes.style.textShadow = "0px 5px 120px green"
    yes.style.transition = "1s";
    btn.style.transition = "1s";
  }
})
let yes = document.getElementById("yes").addEventListener('click', function(){
  let no = document.getElementById("no");
  let compli = document.getElementById("jee");
  compli.style.display = "flex";
  no.style.display = "none";
  let msg = document.getElementById("kenshiejee").textContent = "YEHEY!!!kakwieififjfiejdieifi";
  let kenshie = document.getElementById("kenshie");
  kenshie.src = "/gifs/catride.gif"
  const audio = document.getElementById("song");
  audio.muted = false;
  audio.play();
  audio.loop = true;
  alert("scroll down😣");
})
