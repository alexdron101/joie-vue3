
export const startMain = () => {








  window.addEventListener('scroll', function () {


    var obj2 = document.querySelectorAll('section'); // берем интересующий элемент

    obj2.forEach(function (el, i) {
      var posX = el.offsetTop;  // верхний отступ эл-та от родителя
      var posY = el.offsetLeft; // левый отступ эл-та от родителя
      var top = el.offsetTop;
      var bottom = (top + el.getBoundingClientRect().height);
      var scroll = -(document.querySelector('body').getBoundingClientRect().top);
      var viewport_height = window.innerHeight;

      if (scroll > top) {
        el.classList.add('active');
      }
      if (scroll > bottom - window.innerHeight) {
        el.classList.add('active2');
      }
      if (scroll < bottom - window.innerHeight) {
        el.classList.remove('active2');
      }
      if (scroll < top) {
        el.classList.remove('active');
      }
    })

  });





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
    })

    localStorage.getItem('dark');

    if (localStorage.getItem('dark')) {

      document.querySelector('body').classList.add('night');
      document.querySelector('span.day-night').classList.add('active');
    }



  };





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
        document.querySelector('.menu').classList.remove('open');
        document.querySelector('div#body-back-fon').classList.remove('act');
        document.querySelector('body').classList.remove('no-scroll');
      } else {
        this.classList.add("active");
        document.querySelector(' .menu').classList.add('open');
        document.querySelector('div#body-back-fon').classList.add('act');
        document.body.classList.add('act')
        document.querySelector('body').classList.add('no-scroll');
      }
    });
  }
  

  document.querySelector("div#body-back-fon").addEventListener("click", function (event) {
    document.querySelector('a.b-menu').classList.remove('active');
    document.querySelector('.menu').classList.remove('open');
    document.querySelector('div#body-back-fon').classList.remove('act');
    document.querySelector('body').classList.remove('no-scroll');
  });

  document.querySelector(".menu").addEventListener("click", function (event) {
    document.querySelector('a.b-menu').classList.remove('active');
    document.querySelector('.menu').classList.remove('open');
    document.querySelector('div#body-back-fon').classList.remove('act');
    document.querySelector('body').classList.remove('no-scroll');
  });


  let scrollpos = window.scrollY

  const header = document.querySelector(".menu")
  const sc_top = document.querySelector(".a-up")
  const scrollChange = 1

  const add_class_on_scroll = () => header.classList.add("lip")
  const remove_class_on_scroll = () => header.classList.remove("lip")

  const add_class_on_scroll2 = () => sc_top.classList.add("act")
  const remove_class_on_scroll2 = () => sc_top.classList.remove("act")

  window.addEventListener('scroll', function () {
    scrollpos = window.scrollY;

    if (scrollpos >= scrollChange) { add_class_on_scroll(), add_class_on_scroll2() }
    else { remove_class_on_scroll(), remove_class_on_scroll2() }

  });



}