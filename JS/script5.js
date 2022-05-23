var i = 0;
var images =[];
var time = 5000;
images[0] = "F:/Курсач/Сайт/IMG/cards2.jpg";
images[1] = "F:/Курсач/Сайт/IMG/cards3.jpg";
images[2] = "F:/Курсач/Сайт/IMG/cards4.jpg";
images[3] = "F:/Курсач/Сайт/IMG/cards5.jpg";
function slideShow(){
  document.slideshow.src = images[i];
  if (i < images.length - 1){
    i++;
  } else {
    i = 0;
  }
  setTimeout("slideShow()", time);
}
window.onload = slideShow;
