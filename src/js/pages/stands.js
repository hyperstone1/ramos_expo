// $('.our_projects__list-item').accordion({
// 	heightStyle: 'content'
// });
document.addEventListener('DOMContentLoaded', () => {
  const panels = document.querySelectorAll('.our_projects__list-item--description');
  const projects = document.querySelectorAll('.our_projects__list-item--title');
  const imagesProjects = document.querySelectorAll('.our_projects__list-img');
  let isProcessingClick = false;
  const width = window.innerWidth;

  projects.forEach((project) => {
    project.addEventListener('click', async (e) => {
      if (isProcessingClick) {
        return;
      }

      isProcessingClick = true;

      try {
        const container = e.target.closest('.our_projects__list--container');
        if (container) {
          const panel = container.querySelector('.our_projects__list-item--description');
          if (panel) {
            panels.forEach((item) => {
              const isActivePanel =
                item === container.querySelector('.our_projects__list-item--description');
              const btn = container.querySelector('.our_projects__list-item--btn');

              if (isActivePanel) {
                const computedStyles = window.getComputedStyle(item);
                if (computedStyles.maxHeight === '0px' || computedStyles.maxHeight === '0') {
                  item.style.webkitLineClamp = '4';
                  item.style.maxHeight = item.scrollHeight + 'px';
                  if (width < 769) {
                    btn.style.display = 'block';
                    btn.addEventListener('click', () => {
                      console.log('btn clicj');
                      item.style.webkitLineClamp = 'inherit';
                      btn.style.display = 'none';
                    });
                  }
                } else {
                  item.style.maxHeight = 0;
                  if (width < 769) {
                    btn.style.display = 'none';
                  }
                }
              } else {
                item.style.maxHeight = 0;
              }
            });
          } else {
            console.error('Панель не найдена в контейнере');
          }
          projects.forEach((item) => {
            console.log(item === project);
            const container = item.closest('.our_projects__list-item');
            const img = container.querySelector('.our_projects__list-img');
            console.log('img: ', img);
            console.log('container: ', container);
            if (item === project) {
              container.classList.toggle('active');
              img.classList.toggle('visible');
            } else {
              container.classList.remove('active');
              img.classList.remove('visible');
            }
          });
        } else {
          console.error('Контейнер не найден для проекта');
        }
      } finally {
        isProcessingClick = false;
      }
    });
  });

  //   projects.forEach((project) => {
  //     project.addEventListener('click', (e) => {
  //       const container = e.target.closest('.our_projects__list--container');

  //       if (container) {
  //         const panel = container.querySelector('.our_projects__list-item--description');
  //         if (panel) {
  //           panels.forEach((item) => {
  //             const isActivePanel =
  //               item === container.querySelector('.our_projects__list-item--description');

  //             if (isActivePanel) {
  //               const computedStyles = window.getComputedStyle(item);
  //               if (computedStyles.maxHeight === '0px' || computedStyles.maxHeight === '0') {
  //                 item.style.maxHeight = item.scrollHeight + 'px';
  //               } else {
  //                 item.style.maxHeight = 0;
  //               }
  //             } else {
  //               item.style.maxHeight = 0;
  //             }
  //           });
  //         } else {
  //           console.error('Панель не найдена в контейнере');
  //         }
  //         projects.forEach((item) => {
  //           console.log(item === project);
  //           if (item === project) {
  //             item.classList.toggle('active');
  //           } else {
  //             item.classList.remove('active');
  //           }
  //         });
  //       } else {
  //         console.log()
  //         console.error('Контейнер не найден для проекта');
  //       }
  //     });
  //   });
});
