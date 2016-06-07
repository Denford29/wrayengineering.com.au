(function ($) {

    //set the functions included
    var siteScripts = {
        onReady: function () {
            this.homeCarousel();
            this.googleAnalytics();
        },

        //define what each function does
        homeCarousel: function () {
            $('.carousel')
                .carousel({
                    interval: 5000 //changes the speed
                });
        },

        //define what each function does
        googleAnalytics: function () {
            (function (i, s, o, g, r, a, m) {
                i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
                    (i[r].q = i[r].q || []).push(arguments)
                }, i[r].l = 1 * new Date(); a = s.createElement(o),
                m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
            })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

            ga('create', 'UA-78895331-1', 'auto');
            ga('send', 'pageview');
        }

    };

    // on doc ready load the defined main function
    $(document).ready(function () {
        siteScripts.onReady();
    });

})(jQuery);