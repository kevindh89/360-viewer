$(function() {
    $(window).resize(function() {
        window.setTimeout(function() {
            // admin layout resize
            const width = $(document).width() - 280;
            $("#content-container").css("width", width);

            // admin menu bar resize
            $('#admin-menu').css('height', $(document).height());
        }, 200);
    }).resize();

});
