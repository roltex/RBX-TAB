import $ from 'jquery';
$(".vertical-tab .each-tab").on("click", function (e) {
    var dis = $(this),
        dataTarget = dis.data("target");
    dis.addClass("active").siblings(".each-tab").removeClass("active");
    $(".vertical-tab-wrapper .vertical-tab-content").hide();
    $(dataTarget).show().addClass("active").siblings().removeClass("active");
});
