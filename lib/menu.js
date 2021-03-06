Carre.Menu = {

  init : function() {
    var m = document.getElementById("menu");
    m.style.width = Carre.settings.width + "px";
    m.style.height = Carre.settings.height + "px";
    var c = document.getElementsByTagName('canvas')[0];
    m.style.top = c.offsetTop + "px";
    m.style.left = c.offsetLeft + "px";
  },
  show : function() {
    document.getElementById("menu").style.visibility = "visible";
  },
  hide : function() {
    document.getElementById("menu").style.visibility = "hidden";
  },
  showHideControls : function() {
    Carre.Sound.trigger("start");
    var v = document.querySelector('.controls').style.visibility;
    if (v === "visible") {
      document.querySelector('.controls').style.visibility = "hidden";
    } else {
      document.querySelector('.controls').style.visibility = "visible";
    }
  },
  showHideCredits: function() {
    Carre.Sound.trigger("start");
    var v = document.querySelector('#credits');
    document.getElementById("curtain").style.display = "block";
    Util.fade( "curtain", .5 );
    Util.toggleFade( v );
  },
  hideCredits: function() {
    Carre.Sound.trigger("start");
    var v = document.querySelector('#credits');
    Util.fade( "curtain", 0 );
    setTimeout(function() {
      document.getElementById("curtain").style.display = "none";
    }, 1000);
    Util.toggleFade( v );
  },
  notifyLoadingFinished : function() {
    Util.c(document.getElementById('play'), "add", "ok");
    document.getElementById('play').disabled = false;
    var t = document.getElementById("loading");
    t.parentElement.removeChild(t);
  },
  toggleSound : function() {
    var e = document.querySelector('#mutesound');
    console.log(e.style.backgroundImage);
    if (e.style.backgroundImage === "url(assets/ui/son_on.png)" ||
        e.style.backgroundImage === "") {
      e.style.backgroundImage = "url(assets/ui/son.png)";
    } else {
      e.style.backgroundImage = "url(assets/ui/son_on.png)";
    }
  },
  showHidePauseLabel : function() {
    Carre.Sound.trigger("start");
    var e = document.querySelector('.pauseLabel');
    if (e !== null) {
      e.parentElement.removeChild(e);
    } else {
      var p = document.createElement('div');
      p.className = "pauseLabel";
      p.innerHTML = "Game paused !";
      document.querySelector('menu').appendChild(p);
    }
  },
  toggleQuality : function() {
    Carre.Sound.trigger("start");
    var q = document.getElementById("quality");
    if (q.innerHTML === "HQ") {
      q.innerHTML = "LQ";
      Carre.settings.quality = "LQ";
    } else {
      q.innerHTML = "HQ";
      Carre.settings.quality = "HQ";
    }
  }
};
