
const toggleWaifuDrawer = () => {
  const drawer = document.querySelector('.waifus');
  const toggleButton = document.querySelector('.waifu-drawer-toggle-button');
  if (drawer.classList.contains('off')) {
    drawer.classList.remove('off');
    toggleButton.classList.remove('off');
  } else {
    drawer.classList.add('off');
    toggleButton.classList.add('off');
  }
};