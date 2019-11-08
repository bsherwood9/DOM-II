// Your code goes here

//load event 1
window.addEventListener("load", event => {
  alert(
    "Welcome to the FUN BUS. Please keep all hands and feet inside at all times... OR SUFFER THE CONSEQUENCES."
  );
});

//header scroll 2
const head = document.querySelector(".main-navigation");
head.style.zIndex = 3;
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 4) {
    head.style.height = "60px";
  } else {
    head.style.height = "90px";
  }
});

//mouseover, mouseleave, dblclick (3,4.5)
const bigPhotos = document.querySelectorAll("img");
// bigPhotos.style.position = "relative";
// bigPhotos.style.zIndex = 5;
bigPhotos.forEach(el => {
  el.addEventListener("mouseover", () => {
    el.style.transform = "scale(1.3)";
    el.style.transition = "all 0.3s";
    el.style.zIndex = 2;
  });
  el.addEventListener("mouseleave", () => {
    el.style.transform = "scale(1)";
    el.style.transition = "all 0.3s";

    setTimeout(function() {
      el.removeAttribute("style", "transform");
    }, 300);
  });
  el.addEventListener("dblclick", () => {
    el.style.transform = "scale(2)";
  });
});

//drag, dragenter 6
const dropHere = document.querySelector(".content-pick");
// console.log(dropHere);
// dropHere.classList.add("splashZone");
// dropHere.addEventListener("drop", () => {
//   dropHere.style.background = "blue";
// });

const texts = document.querySelectorAll(".text-content");
texts.forEach(el => {
  el.draggable = true;
  el.addEventListener("drag", () => {
    el.style.background = "red";
  });
});

//resize 7
window.addEventListener("resize", () => {
  document.querySelectorAll(".content-section").forEach(el => {
    el.style.display = "flex";
    el.style.flexDirection = "column-reverse";
    el.style.width = "100%";
    el.style.alignContent = "center";
    el.style.margin = "0 auto";
    el.style.background =
      "linear-gradient(to right, rgba(255,255,255, 0), rgba(0,0,0,.5))";
  });
});

//keydown event 8
document.addEventListener("keydown", number);

function number() {
  if (event.which == 68) {
    console.log(`I pressed the letter: D`);
  } else {
    console.log(`I pressed ${event.which}`);
  }
}

//wheel event 9
window.addEventListener("wheel", () => {
  console.log(`You see me rolling...trying catch me...white and nerdy.`);
});

//click event 10
const buttons = document.querySelectorAll(".btn");
buttons.forEach(el => {
  el.addEventListener("click", event => {
    console.log(event.target);
    event.target.style.padding = "100px";
    event.target.textContent = "Stop!";
    event.target.style.background = "darkred";
    event.stopPropagation();
  });
});

document.querySelectorAll(".content-pick p").forEach(el => {
  el.addEventListener("click", event => {
    console.log("Clicking on the greens");
    event.target.style.background = "green";
    event.stopPropagation();
  });
});

dropHere.addEventListener("click", event => {
  console.log("Who pressing my buttons, fool!");
  event.target.style.background = "blue";
  event.stopPropagation();
});

navItems = document.querySelectorAll("nav a").forEach(el => {
  el.addEventListener("click", () => event.preventDefault());
});
