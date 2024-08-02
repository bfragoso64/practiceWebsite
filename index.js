const div1 = document.querySelector(".div1");
const div2 = document.querySelector(".div2");
const div3 = document.querySelector(".div3");

const overall = document.querySelector(".overall-div");

div1.addEventListener("mouseenter", () => {
  overall.style.gridTemplateColumns = "2fr 1fr 1fr";
});

div2.addEventListener("mouseenter", () => {
  overall.style.gridTemplateColumns = "1fr 2fr 1fr";
});

div3.addEventListener("mouseenter", () => {
    overall.style.gridTemplateColumns = "1fr 1fr 2fr";
  });

document.querySelectorAll(".div").forEach((div) => {
  div.addEventListener("mouseleave", () => {
    overall.style.gridTemplateColumns = "1fr 1fr 1fr";
  });
});
