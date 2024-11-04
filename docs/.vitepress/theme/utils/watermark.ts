import { Watermark } from "watermark-js-plus" // import watermark plugin

const watermark = new Watermark({
  width: 600,
  height: 500,
  rotate: 45,
  contentType: "multi-line-text",
  content: "八阿哥的博客\n@Yuzhiyong",
  translatePlacement: "middle",
  backgroundPosition: "0 0, 0 0",
  backgroundRepeat: "repeat",
  parent: "works-container",
  zIndex: 10000,
  globalAlpha: 0.2,
  mode: "default",
  textType: "stroke",
  lineHeight: 90,
  fontSize: "90px",
  fontFamily: "sans-serif",
  fontStyle: "",
  fontVariant: "",
  fontColor: "#000",
  fontWeight: "normal",
  filter: "opacity(50%)",
  letterSpacing: "0px",
})

// watermark.create() // add watermark
// watermark.destroy() // remove watermark

export default watermark

