import sheetStyle from "./Image.module.scss";

const Image = ({ src, alt, cover, height, children }) => {
  const inlineStyle = {
    wrapperContain: {
      position: "relative",
      height: height,
      width: "100%",
      overflow: "hidden",
    },
    imgContain: {
      maxWidth: "100%",
      maxHeight: "100%",
      objectFit: "contain",
    },
  };
  return !cover ? (
    <div style={inlineStyle.wrapperContain}>
      <img style={inlineStyle.imgContain} src={src} alt={alt} />
      {children ? children : null}
    </div>
  ) : (
    <div style={{ pointerEvents: "all" }} className={sheetStyle.coverWrapper}>
      <img src={src} alt={alt} />
      {children ? <div className={sheetStyle.hover}>{children}</div> : null}
    </div>
  );
};

Image.defaultProps = {
  src: "https://media.chansen.design/placeholder.jpg",
  alt: "Christoffer Hansen Design Arkitektur Webdesign default alt text",
  height: "100%",
};

export default Image;
