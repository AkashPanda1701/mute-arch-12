var scrollableElement = document; //document.getElementById('scrollableElement');

scrollableElement.addEventListener("scroll", checkScrollDirection);
let scrollValueTop = 1;
let scrollValueBottom = 1;
let previous = -Infinity;
function checkScrollDirection(event) {
  if (scrollValueTop == 1) {
    let nav = document.querySelector("#navbar");
    nav.setAttribute("class", "");
  }
  if (window.pageYOffset < 2) {
    let nav = document.querySelector("#navbar");
    nav.setAttribute("class", "");
  }

  scrollValueTop = window.pageYOffset;
  if (previous < scrollValueTop) {
    let nav = document.querySelector("#navbar");
    nav.setAttribute("class", "");
    previous = scrollValueTop;
  } else {
    if (window.pageYOffset > 2) {
      let nav = document.querySelector("#navbar");
      nav.setAttribute("class", "stickyNav");
      previous--;
    }
  }
}

// menubar



var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
  document.body.style.overflow="hidden";
}

span.onclick = function() {
  modal.style.display = "none";
  document.body.style.overflowY="scroll";
}


//////////////////////

// Events
document.querySelector("#logo").addEventListener("click", () => {
  window.location.href = "homePage.html";
});
let abt=document.querySelectorAll(".aboutPage");
abt.forEach(function(ele){
  ele.addEventListener("click", () => {
    window.location.href = "about.html";
  });
})

let log=document.querySelectorAll(".login");

log.forEach(function(ele){

  ele.addEventListener("click", () => {
    window.location.href = "login.html";
  });
})
let buttons = document.querySelectorAll(".signup");

buttons.forEach(function (ele) {
  ele.addEventListener("click", () => {
    window.location.href = "signup.html";
  });
});
