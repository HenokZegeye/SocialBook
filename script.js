settingsMenuToggle = () => {
  const menu = document.querySelector('.settings-menu');
  menu.classList.toggle('settings-menu-height');
};

darkMenuToggle = () => {
  const button = document.getElementById('dark-btn');
  button.classList.toggle('dark-btn-on');
  document.body.classList.toggle('dark-theme');
};
