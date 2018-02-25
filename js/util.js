'use strict';

(function () {

  window.util = {
    sliderImgWidth: 90,
    sliderImgBorder: 1,
    sliderMarginRight: 12,
    sliderSlidesMargin: 27,
    sliderTotalWidth: function () {
      return this.sliderImgWidth + 2 * this.sliderImgBorder + this.sliderMarginRight;
    },
    sliderTotalMargin: function () {
      return this.sliderMarginRight + this.sliderSlidesMargin;
    }
  };

})();
