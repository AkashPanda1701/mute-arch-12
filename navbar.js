
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
