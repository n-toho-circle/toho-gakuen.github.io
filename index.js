$(function(){
  const $headerListItems = $(".header-list-items"),
        $containers = $(".containers"),
        $parallaxLogo = $("#parallax-logo"),
        $parallaxParticle = $("#parallax-particles"),
        $hamburger = $("#hamburger-button"),
        $sidebar = $("#sidebar-menu"),
        $sidebarItems = $(".sidebar-items"),
        $parallaxContainer = $("#parallax-container"),
        $background = $("#background-image");
  
  let $screenSizeX = $(window).width() / 2,
      $screenSizeY = $(window).height() / 2;
  
  $sidebarItems.click(function(){
    $containers.removeClass("visible");
    console.log($sidebarItems.index(this));
    $hamburger.removeClass("open");
    $sidebar.removeClass("view");
    $parallaxContainer.removeClass("dark");
    $background.removeClass("dark");
    switch($sidebarItems.index(this)){
      case 1:
        $("#container-profile").addClass("visible");
        break;
      case 3:
        $("#container-members").addClass("visible");
        break;
      case 4:
        $("#container-teaser").addClass("visible");
        break;
    };
  });
  
  $headerListItems.click(function(){
    $containers.removeClass("visible");
    console.log($headerListItems.index(this));
    switch($headerListItems.index(this)){
      case 1:
        $("#container-profile").addClass("visible");
        break;
      case 3:
        $("#container-members").addClass("visible");
        break;
      case 4:
        $("#container-teaser").addClass("visible");
        break;
    };
  });
  
  $hamburger.click(function(){
    $(this).toggleClass("open");
    $sidebar.toggleClass("view");
    $parallaxContainer.toggleClass("dark");
    $background.toggleClass("dark");
  });
  
  $(window).resize(function(){
    $screenSizeX = $(window).width() / 2;
    $screenSizeY = $(window).height() / 2;
    console.log($screenSizeX, $screenSizeY);
  });
  
  $(window).mousemove(function(e){
    $parallaxLogo.css("transform", "translate(" + (e.screenX - $screenSizeX) / 20 + "px," + (e.screenY - $screenSizeY) / 15 + "px)");
    $parallaxParticle.css("transform", "translate(" + (e.screenX - $screenSizeX) / 10 + "px," + (e.screenY - $screenSizeY) / 10 + "px)");
  });
  
});