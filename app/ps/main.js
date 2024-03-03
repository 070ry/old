document.addEventListener('DOMContentLoaded', function () {
  const resizeFix = function () {
    const checkHeight = (window.innerWidth / 1280) * 720;
    const marginTop = window.innerHeight - checkHeight;
    const checkWidth = (window.innerHeight / 720) * 1280;
    const marginLeft = window.innerWidth - checkWidth;

    if (checkHeight > window.innerHeight) {
      document.getElementsByClassName('main')[0].style.transform = 'scale(' + window.innerHeight / 720 + ')';
      document.getElementsByClassName('main')[0].style.marginLeft = marginLeft / 2 + 'px';
      document.getElementsByClassName('main')[0].style.marginTop = 0 + 'px';
    } else {
      document.getElementsByClassName('main')[0].style.transform = 'scale(' + window.innerWidth / 1280 + ')';
      document.getElementsByClassName('main')[0].style.marginLeft = 0 + 'px';
      document.getElementsByClassName('main')[0].style.marginTop = marginTop / 2 + 'px';
    }
  };

  resizeFix();

  window.addEventListener('resize', function () {
    resizeFix();
  });
});
