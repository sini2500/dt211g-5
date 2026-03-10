/* animation demo 1 */
const btn1 = document.getElementById("demo1-run");
const container1 = document.getElementById("demo1-container");
const img1 = document.getElementById("demo1-cat");
let demo1_rotation = 0;

btn1.addEventListener("click", () => {

  demo1_rotation -= 50;

  img1.style.transform = "rotate(" + demo1_rotation + "deg)";

});

/* animation demo 2 */
const btn2 = document.getElementById("demo2-run");
const container2 = document.getElementById("demo2-container");

btn2.addEventListener("click", () => {

  container2.classList.add("show");

  setTimeout(() => {
    container2.classList.remove("show");
  }, 2000);

});

/* animation demo 3 */

const btn3 = document.getElementById("demo3-run");
const cat3 = document.getElementById("demo3-cat");

btn3.addEventListener("click", () => {

  cat3.classList.remove("idle");
  cat3.classList.add("run");

  setTimeout(() => {
    cat3.classList.remove("run");
    cat3.classList.add("idle");
  }, 4000);

});