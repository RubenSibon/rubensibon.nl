const cssContentOrder = ["custom-properties", "dollar-variables", "declarations", "rules"];
const cssPropOrder = ["all", "appearance", "box-sizing", "display", "position", "top", "right", "bottom", "left", "float", "clear", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "grid", "grid-area", "grid-template", "grid-template-areas", "grid-template-rows", "grid-template-columns", "grid-row", "grid-row-start", "grid-row-end", "grid-column", "grid-column-start", "grid-column-end", "grid-auto-rows", "grid-auto-columns", "grid-auto-flow", "grid-gap", "grid-row-gap", "grid-column-gap", "align-content", "align-items", "align-self", "justify-content", "justify-items", "justify-self", "order", "columns", "column-gap", "column-fill", "column-rule", "column-rule-width", "column-rule-style", "column-rule-color", "column-span", "column-count", "column-width", "backface-visibility", "perspective", "perspective-origin", "transform", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "visibility", "opacity", "mix-blend-mode", "isolation", "z-index", "margin", "margin-top", "margin-right", "margin-bottom", "margin-left", "outline", "outline-offset", "outline-width", "outline-style", "outline-color", "border", "border-top", "border-right", "border-bottom", "border-left", "border-width", "border-top-width", "border-right-width", "border-bottom-width", "border-left-width", "border-style", "border-top-style", "border-right-style", "border-bottom-style", "border-left-style", "border-radius", "border-top-left-radius", "border-top-right-radius", "border-bottom-left-radius", "border-bottom-right-radius", "border-color", "border-top-color", "border-right-color", "border-bottom-color", "border-left-color", "border-image", "border-image-source", "border-image-width", "border-image-outset", "border-image-repeat", "border-image-slice", "box-shadow", "background", "background-attachment", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "background-blend-mode", "cursor", "padding", "padding-top", "padding-right", "padding-bottom", "padding-left", "width", "min-width", "max-width", "height", "min-height", "max-height", "overflow", "overflow-x", "overflow-y", "resize", "list-style", "list-style-type", "list-style-position", "list-style-image", "caption-side", "table-layout", "border-collapse", "border-spacing", "empty-cells", "animation", "animation-name", "animation-duration", "animation-timing-function", "animation-delay", "animation-iteration-count", "animation-direction", "animation-fill-mode", "animation-play-state", "vertical-align", "direction", "tab-size", "text-align", "text-align-last", "text-justify", "text-indent", "text-transform", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-style", "text-rendering", "text-shadow", "text-overflow", "line-height", "word-spacing", "letter-spacing", "white-space", "word-break", "word-wrap", "color", "font", "font-family", "font-kerning", "font-size", "font-size-adjust", "font-stretch", "font-weight", "font-smoothing", "osx-font-smoothing", "font-variant", "font-style", "content", "quotes", "counter-reset", "counter-increment", "page-break-before", "page-break-after", "page-break-inside", "pointer-events", "will-change"];

module.exports = {
  extends: [
    "stylelint-config-standard",
  ],
  plugins: [
    "stylelint-order",
  ],
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "apply",
          "layer",
          "responsive",
          "screen",
          "tailwind",
          "variants",
        ],
      },
    ],
    "no-descending-specificity": null,
    "order/order": cssContentOrder,
    "order/properties-order": cssPropOrder,
  },
};
