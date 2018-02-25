'use strict';

(function () {

  var children = window.galleryOverlayUl.children;
  var container = document.querySelector('.container');
  var maxWidth = +getComputedStyle(container).maxWidth.replace('px', '');
  var SPEED_DISPLACEMENT = 1;

  window.list = {
    listPages: function (evt) {
      window.debounce.debounce(function () {
        listPages(evt);
      });
    }
  };

  function listPages(evt) {
    var sliderInnerWidth = +getComputedStyle(window.sliderInner).width.replace('px', '');
    var sliderSlidesWidth = +getComputedStyle(window.sliderSlides).width.replace('px', '');
    var maxLeft = sliderInnerWidth - sliderSlidesWidth - window.util.sliderTotalMargin();
    for (var i = 0; i < children.length; i++) {
      var styleElement = getComputedStyle(window.galleryOverlayUl.children[i]).display;
      if (styleElement === 'block') {
        var number = +(window.galleryOverlayUl.children[i].className.replace('elt_', ''));
      } else if (!(styleElement === 'none')) {
        return;
      }
    }
    var target = evt.target;
    if (target.getAttribute('data-title') === 'prev') {
      removeElement(number, target);
      number--;
      if (number === 0) {
        number = children.length;
      }
      addElement(number, target, maxLeft);
    }
    if (target.getAttribute('data-title') === 'next') {
      if (number === children.length) {
        removeElement(number, target);
        number = 1;
        addElement(number, target, maxLeft);
      } else {
        removeElement(number, target);
        number++;
        if (number === children.length) {
          number = 1;
        }
        addElement(number, target, maxLeft);
      }
    } else {
      return;
    }
  }

  function removeElement(number, target) {
    var start = Date.now();
    var element = window.galleryOverlayUl.querySelector('.elt_' + number);
    element.style = 'display: block;';
    setHeight(element);
    element.style = 'display: block; position:absolute; left: 0;';
    if (target.getAttribute('data-title') === 'next') {
      listLeft(element, start, number, '-');
    } else {
      listLeft(element, start, number, '');
    }
  }

  function addElement(number, target, maxLeft) {
    var start = Date.now();
    var element = window.galleryOverlayUl.querySelector('.elt_' + number);
    element.style = 'display: block; position:absolute; left: ' + maxWidth + 'px';
    if (target.getAttribute('data-title') === 'next') {
      listRight(element, start, number, maxLeft, '');
    } else {
      listRight(element, start, number, maxLeft, '-');
    }
  }

  function setHeight(element) {
    var childrenImg;
    var imgHeight;
    childrenImg = element.querySelector('img');
    imgHeight = getComputedStyle(childrenImg).height;
    window.galleryPreview.style.height = imgHeight;
  }

  function listRight(element, start, number, maxLeft, sign) {
    var timer = setInterval(function () {
      var timePassed = Date.now() - start;
      if (draw(timePassed) >= maxWidth) {
        clearInterval(timer);
        element.style.cssText = 'display: block; opacity: 1; z-index: 2;';
        window.galleryPreview.style.height = '';
        setClassSlader(number);
        window.listSlider.moveSlider(number, maxLeft);
        return;
      }
      draw(timePassed);
      element.style.left = sign + (maxWidth - draw(timePassed)) + 'px';
    }, 20);
  }

  function listLeft(element, start, number, sign) {
    var timer = setInterval(function () {
      var timePassed = Date.now() - start;
      if (draw(timePassed) >= maxWidth) {
        clearInterval(timer);
        setClassSlader(number);
        element.style.cssText = 'display: none; opacity: 0; z-index: 1;';
        window.galleryPreview.style.height = '';
        return;
      }
      draw(timePassed);
      element.style.left = sign + draw(timePassed) + 'px';
    }, 20);
  }

  function setClassSlader(number) {
    var element = window.sliderSlides.querySelector('.elt_' + number);
    element.classList.toggle('active');
    element.firstElementChild.classList.toggle('active-img');
  }

  function draw(timePassed) {
    var elementLeft = timePassed / SPEED_DISPLACEMENT;
    return elementLeft;
  }
})();
