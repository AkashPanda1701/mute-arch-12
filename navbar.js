
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


    // Events

    document.querySelector("#login").addEventListener("click", () => {
      window.location.href = "login.html";
    });
    let buttons = document.querySelectorAll(".signup");
  
    buttons.forEach(function (ele) {
      ele.addEventListener("click", () => {
        window.location.href = "signup.html";
      });
    });
