const taskShow = document.querySelectorAll(".tasks__content-show");
const taskClose = document.querySelectorAll(".tasks__content-close");
taskShow.forEach((btn) => {
  btn.addEventListener("click", () => {
    const container = btn.closest(".tasks__content");
    const info = container.querySelector(".tasks__content-info");
    const infoItems = container.querySelectorAll(".tasks__content-info--text");
    // const height = info.offsetHeight;
    infoItems.forEach((item) => {
      item.style.display = "flex";
    });
    btn.style.display = "none";
    container.querySelector(".tasks__content-close").style.display = "block";
  });
});
taskClose.forEach((close) => {
  close.addEventListener("click", (e) => {
    const container = close.closest(".tasks__content");
    const text = container.querySelectorAll(".tasks__content-info--text");

    text.forEach((item, id) => {
      if (id < 6) {
        item.style.display = "flex";
      } else {
        item.style.display = "none";
      }
    });
    close.style.display = "none";
    container.querySelector(".tasks__content-show").style.display = "block";
  });
});
