const taskShow = document.querySelectorAll('.tasks__content-show');
taskShow.forEach((btn) => {
  btn.addEventListener('click', () => {
    const container = btn.closest('.tasks__content');
    const info = container.querySelector('.tasks__content-info');
    const infoItems = container.querySelectorAll('.tasks__content-info--text');
    // const height = info.offsetHeight;
    infoItems.forEach((item) => {
      item.style.display = 'flex';
    });
    btn.style.display = 'none';
    // console.log(height);
  });
});
