var CustomWindowKendo = {}
CustomWindowKendo.setWindowPopup = function (container, title, width, wheight) {
    var wnd = $(container);
    if ($(window).height() < wheight) {
        wheight = $(window).height() - 50;
    }
    if (!wnd.data("kendoWindow")) {
        wnd.kendoWindow({
            modal: true,
            width: width,
            height: wheight,
            pinned: true,
            title: title,
            iframe: true,
            visible: true,
            refresh: function () {
                $('.btn-cancel', $(container + ' iframe').contents()).click(function () {
                    window.parent.$(container).data("kendoWindow").close();
                    //window.parent.$("body").css({ overflow: 'inherit' });
                });
                window.kendo.ui.progress($(container), false);
                //$('.btn-close').click(function () {
                //    location.reload();
                //    window.parent.kendo.ui.progress(window.parent.$('#WindowAsset'), true);
                //})
                $('.btn-loading-content').click(function () {
                    window.parent.kendo.ui.progress(window.parent.$('#WindowAsset'), true);
                });
            },
            open: function () {
                $("body").css({ overflow: 'hidden' });
                kendo.ui.progress($(container), true);
            },
            close: function () {
                wnd.data("kendoWindow")
                    .setOptions({
                        height: wheight
                    });
                $("body").css({ overflow: 'inherit' });
            },
            visible: false,
            actions: [
                        "Pin",
                        "Minimize",
                        "Maximize",
                        "Close"
            ],
        });
    }
}
