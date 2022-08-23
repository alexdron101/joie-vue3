export const startMain = () => {




  localStorage.getItem('dark');

  if (localStorage.getItem('dark')) {

    document.querySelector('body').classList.add('night');
    document.querySelector('span.day-night').classList.add('active');
  }





  const progressBar = document.querySelector('.scroll-progress');
  const section = document.querySelector('body');
  
  const scrollProgressBar = () => {
      let scrollDistance = -(section.getBoundingClientRect().top);
      let progressPercentage =
          (scrollDistance /
              (section.getBoundingClientRect().height - 
                  document.documentElement.clientHeight)) * 100;
  
      let val = Math.floor(progressPercentage);
      progressBar.style.width = val + '%';
  
      if (val < 0) {
          progressBar.style.width = '0%';
      }
  };
  
  window.addEventListener('scroll', scrollProgressBar);







  var toggles2 = document.querySelectorAll('span.day-night');

  for (var i = toggles2.length - 1; i >= 0; i--) {
    var toggle = toggles2[i];
    toggleHandler2(toggle);
  };

  function toggleHandler2(toggle) {
    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      if (this.classList.contains("active") === true) {

        this.classList.remove("active");
        document.querySelector('body').classList.remove('night');
        localStorage.removeItem('dark', 222);
      } else {
        this.classList.add("active");
        document.querySelector('body').classList.add('night');
        localStorage.setItem('dark', 222);
      }
    });
  }




  var toggles = document.querySelectorAll("a.b-menu");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      if (this.classList.contains("active") === true) {

        this.classList.remove("active");
        document.querySelector('.widget_nav_menu .menu').classList.remove('open');
        document.querySelector('div#body-back-fon').classList.remove('act');
        document.querySelector('body').classList.remove('no-scroll');
      } else {
        this.classList.add("active");
        document.querySelector('.widget_nav_menu .menu').classList.add('open');
        document.querySelector('div#body-back-fon').classList.add('act');
        document.body.classList.add('act')
        document.querySelector('body').classList.add('no-scroll');
      }
    });
  }

  document.querySelector("div#body-back-fon").addEventListener("click", function (event) {
    document.querySelector('a.b-menu').classList.remove('active');
    document.querySelector('.widget_nav_menu .menu').classList.remove('open');
    document.querySelector('div#body-back-fon').classList.remove('act');
    document.querySelector('body').classList.remove('no-scroll');
  });


  let scrollpos = window.scrollY

  const header = document.querySelector(".menu")
  const scrollChange = 1

  const add_class_on_scroll = () => header.classList.add("lip")
  const remove_class_on_scroll = () => header.classList.remove("lip")

  window.addEventListener('scroll', function () {
    scrollpos = window.scrollY;

    if (scrollpos >= scrollChange) { add_class_on_scroll() }
    else { remove_class_on_scroll() }

  })



}