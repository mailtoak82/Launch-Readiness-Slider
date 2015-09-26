var Scales = [
"No (none of the actions have started)",
"To a limited extent (few of the actions have started)",
"Partially (some of the actions have been completed)",
"Yes (most of the actions have been completed)",
"Yes, completely (all of the actions have been completed)"
];


$("#circles-slider")
    .slider({
        max: Scales.length,
        min: 1,
        value: 3
    })

    .slider("pips", {
    rest: "label",
    labels: Scales
  })