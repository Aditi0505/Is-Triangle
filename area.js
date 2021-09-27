var btnArea = document.querySelector("#btn-area");
var base = document.querySelector("#base");
var height = document.querySelector("#height");
var outputArea = document.querySelector("#output-area");
btnArea.addEventListener("click", clickAreaHandler);
function clickAreaHandler() {
  var area = 0.5 * Number(base.value) * Number(height.value);
  outputArea.innerText = "The area of the triangle is " + area + " cm²";
}
