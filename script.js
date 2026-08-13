var btn = document.querySelector("button");
var body = document.body;
var song = document.querySelector("#song");

var images = [
  {
    no: 1,
    src: "https://www.freepnglogos.com/uploads/doraemon-png/blink-doraemon-photo-11.png",
  },
  {
    no: 2,
    src: "https://www.freepnglogos.com/uploads/doraemon-png/-doraemon-nobita-png-cartoon-character-35.png",
  },
  {
    no: 3,
    src: "https://www.freepnglogos.com/uploads/doraemon-png/cartoon-characters-doraemon-girl-hello-18.png",
  },
  {
    no: 4,
    src: "https://www.freepnglogos.com/uploads/doraemon-png/cartoon-characters-doraemon-rotate-new-png-images-31.png",
  },
  {
    no: 5,
    src: "https://www.freepnglogos.com/uploads/doraemon-png/boy-and-girl-cartoon-characters-doraemon-new-png-images-25.png",
  },
  {
    no: 6,
    src: "imgs/gian.png",
  },
];

btn.addEventListener("click", () => {
  song.play();
  var no = Math.floor(Math.random() * 6);
  var result = images[no];

  var x = Math.floor(Math.random() * (window.innerWidth - 100));
  var y = Math.floor(Math.random() * (window.innerHeight - 100));
  var rotate = Math.floor(Math.random() * 365);

  var element = document.createElement("img");
  element.src = result.src;
  element.style.left = x + "px";
  element.style.top = y + "px";
  element.style.rotate = rotate + "deg";

  body.appendChild(element);
});
