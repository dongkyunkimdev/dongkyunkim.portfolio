$(document).ready(function () {
    $('#fullpage').fullpage({
        anchors: [
            'Intro', 'About me', 'Project', 'Contact'
        ],
        sectionsColor: [
            '#fff', '#FDFFFF', '#fff', '#fff'
        ],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: [
            'Intro', 'About me', 'Project', 'Contact'
        ],
        responsiveWidth: 900,

        'afterLoad': function (anchorLink, index) {
            if (index == 3) {
                $(".chart--horiz").css("overflow", 'hidden');
                $(".chart__bar").css("height", '30px');
                $(".chart__bar").css("marginBottom", '10px');
                $(".chart__bar").css("background", 'linear-gradient(to left, #EC7357, #EC7357)');
                $(".chart__bar").css("borderTopRightRadius", '4px');
                $(".chart__bar").css("borderBottomRightRadius", '4px');
                $(".chart__bar").css("opacity", '0');
                $(".chart__bar").css("animation", '1s anim-lightspeed-in ease forwards');
            }
        },

        'onLeave': function (index, nextIndex, direction) {
            if (index == 2 && direction == 'down') {
                // alert('1');
                $(".chart--horiz").css("overflow", 'hidden');
                $(".chart__bar").css("height", '30px');
                $(".chart__bar").css("marginBottom", '10px');
                $(".chart__bar").css("background", 'linear-gradient(to left, #EC7357, #EC7357)');
                $(".chart__bar").css("borderTopRightRadius", '4px');
                $(".chart__bar").css("borderBottomRightRadius", '4px');
                $(".chart__bar").css("opacity", '0');
                $(".chart__bar").css("animation", '1s anim-lightspeed-in ease forwards');
            }

            if (index == 4 && direction == 'up') {
                // alert('1');
                $(".chart--horiz").css("overflow", 'hidden');
                $(".chart__bar").css("height", '30px');
                $(".chart__bar").css("marginBottom", '10px');
                $(".chart__bar").css("background", 'linear-gradient(to left, #EC7357, #EC7357)');
                $(".chart__bar").css("borderTopRightRadius", '4px');
                $(".chart__bar").css("borderBottomRightRadius", '4px');
                $(".chart__bar").css("opacity", '0');
                $(".chart__bar").css("animation", '1s anim-lightspeed-in ease forwards');
            }
        }
    });

    $('#moveTo').click(function () {
        $.fn.fullpage.moveSectionDown();
    });
});