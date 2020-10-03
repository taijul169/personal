$(document).ready(function($){
  "use strict";
  
// Filter Gallery
$('.itm-list').click(function(){
  const value = $(this).attr('data-filter');
  if(value == 'all'){
      $('.single-item').show('1000');
  }
  else{
      $('.single-item').not('.'+value).hide('1000');
      $('.single-item').filter('.'+value).show('1000');
  }
})
$('.itm-list').click(function(){
  $(this).addClass('active').siblings().removeClass('active');
})

// Circle-Progress-activation
$(function(){
  
  $('.circlechart').circlechart();
  

 })
 

});
// responisveNav-activation
function myFunction() {
  var element = document.getElementById("custom_toggleNav");
   element.classList.toggle("demoNav");
   var cross = document.getElementById("cross");
   cross.classList.toggle("crossShow");
   var sideNav = document.getElementById("sideNavbar");
   sideNav.classList.toggle("sidenavDisplayNone")
            }