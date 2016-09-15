InitAdminLayout = () => {
    $('div.admin-container-content').hide();
    window.setTimeout(function() {
        // admin layout resize
        const width = $(document).width() - 280;
        $("#content-container").css("width", width);

        // admin menu bar resize
        $('#admin-menu').css('height', $(document).height());
        $('div.admin-container-content').fadeIn(250);
    }, 200);
};

$(function() {
    $(window).resize(function() {
        InitAdminLayout();
    }).resize();
});
