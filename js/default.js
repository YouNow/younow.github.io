$( document ).ready(function() {
  $("h2").each(function(i, h2){
    $("#sections").append('<li onclick="scrollTo('+i+')">'+$(h2).text()+'</li>');
  });
});
function scrollTo(i) {
  $('html,body').animate({
    scrollTop: $($("h2")[i]).offset().top
  }, 1000);
}
