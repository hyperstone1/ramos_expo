$(document).ready(function () {
	$(".personal-data input").click(function () {
		// console.log(1)
		if (($(this).prop("checked"))) {
			$(".submit-btn").removeAttr("disabled");
		} else {
			$(".submit-btn").attr("disabled", "disabled");
		}
	})
})