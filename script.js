const $menu = document.querySelector('.menu-lateral')
const $btnMenu = document.querySelector('.cabecalho__menu')

$btnMenu.onclick = () => {
  $menu.classList.toggle('menu-lateral--ativo')
}