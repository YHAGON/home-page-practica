const header = () => {
  const header = document.querySelector('.header');
  const nav = document.querySelector('.nav');
  const navActionMenu = document.getElementById('navActionMenu');
  const navActionClose = document.getElementById('navActionClose');

  const documentScroll = () => {
    header.classList.toggle('header--scroll', scrollY > 0);
    nav.classList.toggle('nav--scroll', scrollY > 0);
  };

  const openMenu = () => {
    nav.classList.add('nav--open');
  };

  const closeMenu = () => {
    nav.classList.remove('nav--open');
  };

  document.addEventListener('scroll', documentScroll);
  navActionMenu.addEventListener('click', openMenu);
  navActionClose.addEventListener('click', closeMenu);
};

export default header;