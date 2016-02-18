/* ==========================================================================
 * Style Guide JavaScript
 * ========================================================================== */

(function () {

    'use strict';

    /* ==========================================================================
     * Code View
     * ========================================================================== */

    /*
     * Encode
     */

    var $code = $('.js-sg-code');

    if ($code.length > 0) {
        $code.each(function () {
            var $code_sample = $('code', $(this));

            /*
             * Escape text and replace with HTML character entities
             */

            $code_sample.text($code_sample.html());

            /*
             * Using `%2D` instead of `-` so that JavaScript is not initialized in `<code>` blocks
             */

            $code_sample.html($code_sample.html().replace(/%2D/g, '-'));
        });

        /*
         * Make the source code pretty
         */

        /*global prettyPrint*/
        prettyPrint();
    }

    /*
     * Toggle
     */

    var $toggle_code = $('.js-sg-toggle-code');

    if ($toggle_code.length > 0) {
        $toggle_code.each(function () {
            var $toggle = $(this);
            var $toggle_wrapper = $toggle.parent();
            var $code = $('code', $toggle_wrapper);

            $toggle.on('click', function () {
                $code.toggleClass('is-visible');
                $toggle.toggleClass('is-active');

                /*
                 * Toggle the label of the button
                 */

                if ($(this).hasClass('is-active')) {
                    $(this).html('Hide Code');
                }
                else {
                    $(this).html('View Code');
                }
            });
        });
    }

    /* ==========================================================================
     * Jump to Section
     * ========================================================================== */

    var $jump_action = $('.js-sg-jump');

    $jump_action.on('change', function () {
        var section = $(this).find('option:selected')[0].value;

        if (section !== '') {
            location.hash = '#' + section;
        }
    });

    /* ==========================================================================
     * Toggle Navigation
     * ========================================================================== */

    var $toggle_nav = $('.js-sg-toggle-nav');

    $toggle_nav.on('click', function () {
        $('.sg-nav--primary').toggleClass('is-open');
        $toggle_nav.toggleClass('is-active');
    });
})();
