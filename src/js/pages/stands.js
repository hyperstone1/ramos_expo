// $('.our_projects__list-item').accordion({
// 	heightStyle: 'content'
// });
document.addEventListener("DOMContentLoaded", () => {
  const panels = document.querySelectorAll(
    ".our_projects__list-item--description"
  );
  const projects = document.querySelectorAll(".our_projects__list-item");
  const imagesProjects = document.querySelectorAll(".our_projects__list-img");
  const projectsBtns = document.querySelectorAll(
    ".our_projects__list-item--btn"
  );
  const projectsItems = document.querySelectorAll(".our_projects__list-item");

  let isProcessingClick = false;
  const width = window.innerWidth;
  projectsItems[0].classList.add("active");
  imagesProjects[0].classList.add("visible");
  if (width < 769) {
    const btn = projectsItems[0].querySelector(".our_projects__list-item--btn");
    btn.style.display = "block";
  }
  setTimeout(() => {
    panels[0].style.maxHeight = panels[0].scrollHeight + "px";
  }, 100);

  projects.forEach((project) => {
    project.addEventListener("click", async (e) => {
      if (e.target.classList.contains("our_projects__list-item--btn")) {
        const panel = project.querySelector(
          ".our_projects__list-item--description"
        );
        const colBtn = project.querySelector(
          ".our_projects__list-item--btn--collapse"
        );
        panel.style.webkitLineClamp = "inherit";
        e.target.style.display = "none";
        colBtn ? (colBtn.style.display = "block") : null;
        return;
      }
      if (
        e.target.classList.contains("our_projects__list-item--btn--collapse")
      ) {
        const panel = project.querySelector(
          ".our_projects__list-item--description"
        );
        const btn = project.querySelector(".our_projects__list-item--btn");
        panel.style.webkitLineClamp = "4";
        e.target.style.display = "none";
        btn ? (btn.style.display = "block") : null;
        return;
      }
      if (isProcessingClick) {
        return;
      }
      isProcessingClick = true;

      try {
        const container = project.querySelector(
          ".our_projects__list--container"
        );
        if (container) {
          const panel = container.querySelector(
            ".our_projects__list-item--description"
          );
          const btn = container.querySelector(".our_projects__list-item--btn");
          const btnCollapse = container.querySelector(
            ".our_projects__list-item--btn--collapse"
          );
          if (panel) {
            panels.forEach((item) => {
              const isActivePanel =
                item ===
                container.querySelector(
                  ".our_projects__list-item--description"
                );

              if (isActivePanel) {
                const computedStyles = window.getComputedStyle(item);
                if (
                  computedStyles.maxHeight === "0px" ||
                  computedStyles.maxHeight === "0"
                ) {
                  item.style.webkitLineClamp = "4";
                  item.style.maxHeight = item.scrollHeight + "px";
                  if (width < 769) {
                    projectsBtns.forEach((item) => {
                      item.style.display = "none";
                    });
                    btn.style.display = "block";
                  }
                } else {
                  if (width < 769) {
                    item.style.maxHeight = 0;
                    btn.style.display = "none";
                    btnCollapse.style.display = "none";
                  }
                }
              } else {
                item.style.maxHeight = 0;
              }
            });
          } else {
            console.error("Панель не найдена в контейнере");
          }
          projects.forEach((item) => {
            const container = item.closest(".our_projects__list-item");
            const img = container.querySelector(".our_projects__list-img");
            const btn = container.querySelector(
              ".our_projects__list-item--btn"
            );
            const btnCollapse = container.querySelector(
              ".our_projects__list-item--btn--collapse"
            );
            if (item === project) {
              if (width < 769) {
                container.classList.toggle("active");
                img.classList.toggle("visible");
              } else {
                container.classList.add("active");
                img.classList.add("visible");
              }
            } else {
              container.classList.remove("active");
              img.classList.remove("visible");
              btn.style.display = "none";
              btnCollapse.style.display = "none";
            }
          });
        } else {
          console.error("Контейнер не найден для проекта");
        }
      } finally {
        isProcessingClick = false;
      }
    });
  });
});
