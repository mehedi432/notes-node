var counter = 0;
function changeBG(){
    var imgs = [
        "url(https://cdn.pixabay.com/photo/2015/09/05/20/02/coding-924920_960_720.jpg)",
        "url(https://cdn.pixabay.com/photo/2016/09/08/04/12/programmer-1653351_960_720.png)",
        "url(https://cdn.pixabay.com/photo/2018/06/08/00/48/developer-3461405_960_720.png",
        "url(https://image.shutterstock.com/image-photo/developing-programming-coding-technologies-website-600w-699634498.jpg)",
      ]
    
    if(counter === imgs.length) counter = 0;
    $("body").css("background-image", imgs[counter]);

    counter++;
}
  
  setInterval(changeBG, 3000);


