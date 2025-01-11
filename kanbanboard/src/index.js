const changePage = page => {
  let $content = document.getElementById('content');
  $content.textContent = `이곳은 ${page}입니다.`;
  history.pushState({page: page}, `Title : ${page}`, `/${page}`);
};

window.addEventListener('popstate', event => {
  if (event.state) {
    let $content = document.getElementById('content');
    $content.textContent = `이곳은 ${event.state.page}입니다.`;
  }
});

document
  .getElementById('page1')
  .addEventListener('click', () => changePage('page1'));

document
  .getElementById('page2')
  .addEventListener('click', () => changePage('page2'));

document
  .getElementById('page3')
  .addEventListener('click', () => changePage('page3'));

const goback = () => {
  history.back();
};

const goforward = () => {
  history.forward();
};

document.getElementById('goback').addEventListener('click', () => goback());
document
  .getElementById('goforward')
  .addEventListener('click', () => goforward());
