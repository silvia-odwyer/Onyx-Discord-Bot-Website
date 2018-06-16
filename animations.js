(function () {

    document.addEventListener('DOMContentLoaded', init, false);

    function init() {
        // init
        var controller = new ScrollMagic.Controller();

        // build scene
        var scene = new ScrollMagic.Scene({ triggerElement: "#trigger1" })
            // trigger animation by adding a css class
            .setTween("#animate1", 0.5, { padding: "3em", scale: 0.5, boxShadow: "90px 10px 10px 0px #000" }) // trigger a TweenMax.to tween
            .addTo(controller);
        // build scene
        var scene1 = new ScrollMagic.Scene({
            triggerElement: "#trigger2"
        })
            .setTween("#animate2", 0.5, { scale: 1.05 }) // trigger a TweenMax.to tween
            .addTo(controller);

        var scene2 = new ScrollMagic.Scene({
            triggerElement: "#triggerc"
        })
            .setTween("#animatec", 0.5, { scale: 1.05 }) // trigger a TweenMax.to tween
            .addTo(controller);

        var scened = new ScrollMagic.Scene({
            triggerElement: "#trigger_d"
        }).setTween("#animate_d", 0.5, { scale: 1.05 }) // trigger a TweenMax.to tween
            .addTo(controller);


        var scene3 = new ScrollMagic.Scene({
            triggerElement: "#pressplay"
        }).setTween("#video_icon", 4, { rotation: 720, marginLeft: "55em" }) // trigger a TweenMax.to tween
            .addTo(controller);

        var scene4 = new ScrollMagic.Scene({
            triggerElement: "#pressplay"
        }).setTween("section.panel.red", 2, { scale: 0.5 }) // trigger a TweenMax.to tween
            .addTo(controller);


        var scene5 = new ScrollMagic.Scene({
            triggerElement: "#startSpace"
        }).setTween("section.panel.bordeaux", 0.5, { backgroundColor: "black" }) // trigger a TweenMax.to tween
            .addTo(controller);

        var scene6 = new ScrollMagic.Scene({
            triggerElement: "#trigger_e"
        }).setTween("animate_e", 2, { scale: 0.5 }) // trigger a TweenMax.to tween
            .addTo(controller);

        var scene6 = new ScrollMagic.Scene({
            triggerElement: "#trigger_f"
        }).setTween("animate_f", 2, { scale: 0.5 }) // trigger a TweenMax.to tween
            .addTo(controller);




    }
})();