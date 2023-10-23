$(document).ready(function () {
  $(document).on("keyup", (evt) => {
    evt.keyCode === 27 ? closeModal() : null;
  });

  $('[data-modal="application"]').on("click", () => {
    $(".application-modal").addClass("active");
    setTimeout(() => {
      $(".modal-wrapper").css("opacity", "1");
      $(".modal-back").css("opacity", "1");
    }, 0);
  });
  $('[data-modal="application-florist"]').on("click", () => {
    $(".application-modal--florist").addClass("active");
    setTimeout(() => {
      $(".modal-wrapper").css("opacity", "1");
      $(".modal-back").css("opacity", "1");
    }, 0);
  });

  $("[data-modal]").on("click", () => {
    $("body").addClass("lock");
  });

  $(".modal-back").on("click", closeModal);
  $(".modal-exit").on("click", closeModal);

  function closeModal() {
    $("body").removeClass("lock");
    $(".modal").find(".modal-content--first").addClass("active");
    $(".modal").find(".modal-content--second").removeClass("active");
    $(".modal-wrapper").css("opacity", "0");
    $(".modal-back").css("opacity", "0");
    setTimeout(() => {
      $(".modal").removeClass("active");
    }, 390);
  }
});
