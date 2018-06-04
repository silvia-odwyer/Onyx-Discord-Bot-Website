(function () {

    document.addEventListener('DOMContentLoaded', init, false);

    function init() {
        // init
        var controller = new ScrollMagic.Controller();

        // build scene
        var scene = new ScrollMagic.Scene({ triggerElement: "#trigger1" })
            // trigger animation by adding a css class
            .setClassToggle("#animate1", "zap")
            .addTo(controller);


        // build scene
        var scene1 = new ScrollMagic.Scene({
            triggerElement: "#trigger2"
        })
            .setTween("#animate2", 0.5, {padding: "4em", scale: 1.5 }) // trigger a TweenMax.to tween
            .addTo(controller);

            var scene2 = new ScrollMagic.Scene({
                triggerElement: "#trigger2"
            }).setTween("section.panel.turqoise", 0.5, {backgroundColor: "black"}) // trigger a TweenMax.to tween
            .addTo(controller);


    }
})();