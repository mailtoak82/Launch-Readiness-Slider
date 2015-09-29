var Scales = [
"<span>No</span><br/>(none of the actions have started)",
"<span>To a limited extent</span><br/>(few of the actions have started)",
"<span>Partially</span> <br/>(some of the actions have been completed)",
"<span>Yes</span><br/>(most of the actions have been completed)",
"<span>Yes, completely</span><br/> (all of the actions have been completed)"
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
