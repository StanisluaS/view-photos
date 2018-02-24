'use strict';

(function () {

  var next = window.sliderInner.querySelector('.pages-next-span');
  var prev = window.sliderInner.querySelector('.pages-prev-span');
  var SPEED_DISPLACEMENT = 2;


  window.listSlider = {
    listSlider: function (evt) {
      window.debounce.debounce(function () {
        listSlider(evt);
      });
    },

    resize: function () {
      window.sizeWindow.getWindowSize();
    },

    moveSlider: function (element, left) {
      var index;
      if (typeof (element) === 'string') {
        index = +element.replace('elt_', '');
      } else if (typeof (element) === 'number') {
        index = element;
      } else {
        return;
      }
      window.sliderSlides.style.left = -104 * (index - 1) + 'px';
      if (+window.sliderSlides.style.left.replace('px', '') < left) {
        window.sliderSlides.style.left = left + 'px';
      }
    }
  };

  function listSlider(evt) {
    var sliderInnerWidth = +getComputedStyle(window.sliderInner).width.replace('px', '');
    var sliderWidth = +getComputedStyle(window.sliderSlides).width.replace('px', '');
    var sliderLeft = +getComputedStyle(window.sliderSlides).left.replace('px', '');
    var maxLeft = sliderInnerWidth - sliderWidth - 39;
    var start = Date.now();
    var target = evt.target;
    var timer;
    switch (target) {

      case next:
        if (sliderLeft <= (maxLeft)) {
          timer = setInterval(function () {
            var timePassed = Date.now() - start;
            if (+window.sliderSlides.style.left.replace('px', '') > 0) {
              clearInterval(timer);
              window.sliderSlides.style.left = 0;
              return;
            }
            drawBack(timePassed);
            window.sliderSlides.style.left = sliderLeft + drawBack(timePassed) + 'px';
          }, 20);
        } else {
          timer = setInterval(function () {
            var timePassed = Date.now() - start;
            if (draw(timePassed) > 104) {
              clearInterval(timer);
              window.sliderSlides.style.left = sliderLeft - 104 + 'px';
              if (+window.sliderSlides.style.left.replace('px', '') < maxLeft) {
                window.sliderSlides.style.left = maxLeft + 'px';
              }
              return;
            }
            draw(timePassed);
            window.sliderSlides.style.left = sliderLeft - draw(timePassed) + 'px';
          }, 20);
        }
        break;

      case prev:
        if (sliderLeft >= 0) {
          timer = setInterval(function () {
            var timePassed = Date.now() - start;
            if (+window.sliderSlides.style.left.replace('px', '') < (maxLeft)) {
              clearInterval(timer);
              window.sliderSlides.style.left = maxLeft + 'px';
              return;
            }
            drawBack(timePassed);
            window.sliderSlides.style.left = sliderLeft - drawBack(timePassed) + 'px';
          }, 20);
        } else {
          timer = setInterval(function () {
            var timePassed = Date.now() - start;
            if (draw(timePassed) > 104) {
              clearInterval(timer);
              window.sliderSlides.style.left = sliderLeft + 104 + 'px';
              if (+window.sliderSlides.style.left.replace('px', '') > 0) {
                window.sliderSlides.style.left = 0;
              }
              return;
            }
            draw(timePassed);
            window.sliderSlides.style.left = sliderLeft + draw(timePassed) + 'px';
          }, 20);
        }
        break;
    }

    if (target.tagName === 'IMG') {
      var sliders = window.sliderSlides.children;
      var childrenUl = window.galleryOverlayUl.children;
      var imgClass;
      imgClass = target.parentElement.className;
      for (var i = 0; i < childrenUl.length; i++) {
        var childrenClass = childrenUl[i].className;
        childrenUl[i].style.cssText = 'display: none; opacity: 0; z-index: 1;';
        if (imgClass === childrenClass) {
          for (var j = 0; j < sliders.length; j++) {
            sliders[j].classList.remove('active');
            sliders[j].lastElementChild.classList.remove('active-img');
          }
          window.listSlider.moveSlider(imgClass, maxLeft);
          target.classList.add('active-img');
          target.parentElement.classList.add('active');
          childrenUl[i].style.cssText = 'display: block; opacity: 1; z-index: 2;';
        }
      }
    }
  }

  function draw(timePassed) {
    var elementLeft = timePassed / SPEED_DISPLACEMENT;
    return elementLeft;
  }

  function drawBack(timePassed) {
    var elementLeft = timePassed / (SPEED_DISPLACEMENT / 10);
    return elementLeft;
  }

})();
