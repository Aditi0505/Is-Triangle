var btnHypo = document.querySelector("#btn-hypo");
var a = document.querySelector("#a");
var b = document.querySelector("#b");
var outputHypo = document.querySelector("#output-hypo");
btnHypo.addEventListener("click", clickHypoHandler);
function clickHypoHandler() {
  var lengthHypo = Math.sqrt(
    Number(a.value) * Number(a.value) + Number(b.value) * Number(b.value)
  );
  outputHypo.innerText =
    "The length of the hypotenuse is " + lengthHypo + " cm";
}
