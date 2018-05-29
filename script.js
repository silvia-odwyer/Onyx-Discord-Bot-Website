(function () {
    document.addEventListener('DOMContentLoaded', init, false);

    function init() {
            // init
            var controller = new ScrollMagic.Controller();

            // define movement of panels
            var wipeAnimation = new TimelineMax()
                .fromTo("section.panel.turqoise", 1, {x: "-100%"}, {x: "0%", ease: RoughEase.easeOut})  // in from left
                .fromTo("section.panel.green",    1, {x:  "-100%"}, {x: "0%", ease: Power1.easeOut})  // in from right
                .fromTo("section.panel.green",    1, {x:  "100%"}, {x: "0%", ease: Power1.easeOut})  // in from right
                .fromTo("section.panel.bordeaux", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone}) // in from top
                .fromTo("section.panel.white", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone}) // in from top
                .fromTo("section.panel.red", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone}); // in from top



            // create scene to pin and link animation
            new ScrollMagic.Scene({
                    triggerElement: "#pinContainer",
                    triggerHook: "onLeave",
                    duration: "300%"
                })
                .setPin("#pinContainer")
                .setTween(wipeAnimation)
                .addTo(controller);


            var controller2 = new ScrollMagic.Controller();
            new ScrollMagic.Scene({
                duration: "100",
                offset: "30"
            })
            .setPin("#img")
            .addTo(controller2);
    }

})();