/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

exports.onRouteUpdate = ({ location }) => {
    const SmoothScroll = require('smooth-scroll');
    const scroll = new SmoothScroll('a[href*="#"]', {
        speed: 400,
        durationMin: 250,
        durationMax: 700,
        easing: 'easeInOutCubic',
        offset: 87, // height of both header bars
        topOnEmptyHash: false,
        clip: true
    });

    if (location.hash) {
        const hashElement = document.querySelector(location.hash);
        if (hashElement.offsetTop) {
            window.scrollTo(0, hashElement.offsetTop - 16);
        } else {
            // IE fallback
            scroll.animateScroll(hashElement);
        }
    }
};