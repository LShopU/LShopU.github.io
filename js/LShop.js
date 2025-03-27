var clik = new Audio("/sfx/eshopclick.wav");
var hvr = new Audio("/sfx/eshophover.wav");
function wiuclick() {
  clik.play();
}
function wiuover() {
  hvr.play();
}

// loading

function startloader() {
  document.getElementById("loader").style.display="block";
  setTimeout(graidload,100);
  setTimeout(stoploading,2500);
  document.getElementById("loadingsound").play();
  document.getElementById("loadingsound").currentTime = 0;
  document.getElementById("loadingsound").volume = 0.2;
}
function graidload() {
  document.getElementById("loader").style.opacity="100%";
}
function stoploading() {
  document.getElementById("loader").style.opacity="0%";
  document.getElementById("loadingsound").pause();
  document.getElementById("loadingsound").currentTime = 0;
  setTimeout(stopfinal,300);
}
function stopfinal() {
  document.getElementById("loader").style.display="none";
}
// loading


// musik

var shoploop = new Audio("/sfx/bgm/bgm.mp3");
shoploop.loop = true;
shoploop.volume = 0.3;
window.onload = function() {

  var savedTime = localStorage.getItem("bgmlooppoint");

  if (savedTime) {
    shoploop.currentTime = parseFloat(savedTime); 
  }

  if (localStorage.getItem("shopmusic") === "playing") {
      playBGM();
  } else {
    pauseBGM();
  }
};

window.onbeforeunload = function() {
  localStorage.setItem("bgmlooppoint", shoploop.currentTime);
};

function playBGM() {
  localStorage.setItem("shopmusic", "playing");

  shoploop.play();
  document.getElementById("bgmbtn").innerHTML="Stop BGM";
  document.getElementById("shopbgm").href="javascript:pauseBGM();"
}


function pauseBGM() {
  localStorage.setItem("shopmusic", "paused");

  shoploop.pause();
  document.getElementById("bgmbtn").innerHTML="Play BGM";
  document.getElementById("shopbgm").href="javascript:playBGM();"
}

