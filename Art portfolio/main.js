window.onload = function () {
    var containers = document.querySelectorAll('.fap1, .fap2, .fap3');

    function scrollTo(element, to, duration) {
        var start = element.scrollTop,
            change = to - start,
            currentTime = 0,
            increment = 3.2142;

        function animateScroll() {
            currentTime += increment;
            var val = Math.easeInOutQuad(currentTime, start, change, duration);
            element.scrollTop = val;
            if (currentTime < duration) {
                requestAnimationFrame(animateScroll);
            }
        }

        animateScroll();
    }

    Math.easeInOutQuad = function (t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };

    containers.forEach(function (container, index) {
        var lastChild = container.lastElementChild;
        var delay = index * 1000; // Adjust the delay as needed
        setTimeout(function () {
            scrollTo(container, lastChild.offsetTop, 500);
        }, delay);
    });
};
