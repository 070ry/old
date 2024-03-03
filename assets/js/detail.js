function loadVideo(vid, iid) {
  const iframe = document.createElement('iframe');
  iframe.width = '560';
  iframe.height = '315';
  iframe.src = `https://www.youtube-nocookie.com/embed/${vid}`;
  iframe.title = 'YouTube video player';
  iframe.frameBorder = '0';
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  iframe.allowFullscreen = true;
  iframe.id = '_iframe_' + iid;
  const details = document.getElementById(iid);
  details.appendChild(iframe);
  if (details.onclick) {
    details.removeAttribute('onclick');
    details.classList.remove('glow');
  }
}
