let myDiv = document.getElementById("moveTarget");
let background = document.getElementById("background");

document.documentElement.addEventListener("mouseleave", () =>
    myDiv.style.scale = "0");
document.documentElement.addEventListener("mouseenter", () =>
    myDiv.style.scale = "1");

document.documentElement.style.cursor = "none";

function isTouchDevice() {
  try {

    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
}
const move = (e) => {

  try {
    var x = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
    var y = !isTouchDevice() ? e.pageY : e.touches[0].pageY;
  } catch (e) { }

  myDiv.style.left = x - 100 + "px";
  myDiv.style.top = y - 100 + "px";
  background.style.left = -1 * x - 100 + "px";
  background.style.top = -1 * y - 100 + "px";
};

document.addEventListener("mousemove", (e) => {
  move(e);
});

document.addEventListener("touchmove", (e) => {
  move(e);
});