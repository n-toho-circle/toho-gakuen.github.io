$(window).load(function(){
  
  var $logo = $("#logo-image"),
      screenWidth = $(window).width() / 2,
      screenHeight = $(window).height() / 2,
      mousePosX = 0,
      mousePosY = 0,
      bgm = new Audio(),
      currentVolume = 0.4;
  
  bgm.src = "./music.mp3";
  bgm.volume = 0.4;
  bgm.play();
  
//  画面サイズ変更時
  
  $(window).resize(function(){
    console.log("resized");
    screenWidth = $(window).width() / 2;
    screenHeight = $(window).height() / 2;
  });
  
//  マウス移動時処理
  
  $(window).mousemove(function(e){
    mousePosX = (e.screenX - screenWidth);
    mousePosY = (e.screenY - screenHeight);
    $("#logo-wrapper").css("transform", "translate(" + (mousePosX / 50) + "px," + (mousePosY / 50) + "px)");
    $("#background-wrapper").css("transform", "translate(" + (mousePosX / 20) + "px," + (mousePosY / 20) + "px)");
  });
  
  $("#header-nav").find("li").click(function(){
    $($(this).data("screen")).toggleClass("screen-visible");
    $("li").removeClass("selected");
    $(this).addClass("selected");
  });
  
  $("#btn-mute").click(function(){
    $(this).addClass("animating");
    $(this).toggleClass("muted");
    if($(this).hasClass("muted")){
      audioFadeOut();
    }else{
      audioFadeIn();
    };
  });

  function audioFadeIn(){
    console.log(bgm.volume);
    if(currentVolume >= 0.4){
      $("#btn-mute").removeClass("animating");
      cancelAnimationFrame(audioFadeIn);
    }else{
      currentVolume += 0.01;
      bgm.volume = currentVolume.toFixed(2);
      requestAnimationFrame(audioFadeIn);
    };
  };
  
  function audioFadeOut(){
    console.log(bgm.volume);
    if(currentVolume <= 0){
      $("#btn-mute").removeClass("animating");
      cancelAnimationFrame(audioFadeOut);
    }else{
      currentVolume -= 0.01;
      bgm.volume = currentVolume.toFixed(2);
      requestAnimationFrame(audioFadeOut);  
    };
  };
});