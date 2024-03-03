function toggleTheme(color) {
  var link = document.getElementById('color');
  if (color === 'light') {
    link.href = '/assets/css/mui_light.css';
  }
  if (color === 'dark') {
    link.href = '/assets/css/mui_dark.css';
  }
}

window.addEventListener('DOMContentLoaded', () => {
  var link = document.getElementById('color');
  link.href = '/assets/css/mui_light.css';
});
