var Scales = [
"<span>No</span><br/>None of the actions have started",
"<span>To a limited extent</span><br/>Few of the actions have started",
"<span>Partially</span> <br/>Some of the actions have been completed",
"<span>Yes</span><br/>Most of the actions have been completed",
"<span>Yes, completely</span><br/>All of the actions have been completed"
];


$("#circles-slider")
    .slider({
        animate: true,
        max: Scales.length,
        min: 1,
        value: 3,
        animate: "slow",
    })

    .slider("pips", {
    rest: "label",
    labels: Scales
  })

  .on("slidechange", function(e,ui) {
        $("#slider_Value").text( "You selected " + ui.value + ")");
    });

/* Progress Bar script */

jQuery(document).ready(function($){
        $('.pie_progress').asPieProgress({
            namespace: 'pie_progress',
            min: 0,
            max: 100,
            goal: 100,
            size: 100,
            step: 1,
            speed: 50, // refresh speed
            delay: 1000,
            easing: 'ease'
        });

        $('#Commercial').asPieProgress('go',100);

      });
