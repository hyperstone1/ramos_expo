$(document).ready(function () {
  $(".burger-btn").on("click", () => {
    $(".header__burger-menu").removeClass("no-transition");
    $(".burger-menu").addClass("active");
    $("body").addClass("lock");
  });

  $(".lang-radio").each(function (index, element) {
    $(element)
      .find("input")
      .change(() => {
        for (let el of $(".lang-radio")) {
          $(el).removeClass("active");
        }
        $(element).addClass("active");
      });
  });

  //   $(document).mouseup(function (e) {
  //     if ($('.link-menu').has(e.target).length === 0) {
  //       $('.link-menu').removeClass('show');
  //       $('.link-menu-btn').removeClass('show');
  //     }
  //   });

  //   $('.link-menu-btn').on('click', () => {
  //     if ($('.link-menu').hasClass('show')) {
  //     	$('.link-menu').removeClass('show');
  //     	$('.link-menu-btn').removeClass('show');
  //     } else {
  //     	$('.link-menu').addClass('show');
  //     	$('.link-menu-btn').addClass('show');
  //     }

  //   });
  var linkMenu = $(".link-menu");
  var linkMenuBtn = $(".link-menu-btn");

  linkMenuBtn.click(function () {
    if (linkMenu.hasClass("show")) {
      linkMenu.removeClass("show");
      linkMenuBtn.removeClass("show");
    } else {
      linkMenu.addClass("show");
      linkMenuBtn.addClass("show");
    }
  });

  // Закрыть меню, если пользователь кликнул вне меню
  $(document).mouseup(function (e) {
    if (
      !linkMenu.is(e.target) &&
      !linkMenuBtn.is(e.target) &&
      linkMenu.has(e.target).length === 0 &&
      linkMenuBtn.has(e.target).length === 0
    ) {
      linkMenu.removeClass("show");
      linkMenuBtn.removeClass("show");
    }
  });

  $(window).resize(closeBurgerMenu);
  $(window).scroll(backgroundHeader);
  backgroundHeader();
  closeBurgerMenu();
  $(".burger-menu-overlay").on("click", closeBurgerMenu);
  $(".burger-close-btn").on("click", closeBurgerMenu);
});

function closeBurgerMenu() {
  $(".burger-menu").removeClass("active");
  $("body").removeClass("lock");
}

function backgroundHeader() {
  if ($(window).scrollTop() > 1) {
    $(".header").addClass("scroll");
  } else {
    $(".header").removeClass("scroll");
  }
}
