var i = 0;
var images =[];
var time = 5000;
images[0] = "D:/Курсач/Сайт/IMG/sladeur1.jpg";
images[1] = "D:/Курсач/Сайт/IMG/sladeur2.jpg";
images[2] = "D:/Курсач/Сайт/IMG/sladeur3.jpg";
images[3] = "D:/Курсач/Сайт/IMG/sladeur4.jpg";
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
