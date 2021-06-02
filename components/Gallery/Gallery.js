import sheetStyle from "./Gallery.module.scss";

import GalleryPost from "./GalleryPost";

const Gallery = ({ galleryData }) => {
  return (
    <div className={sheetStyle.gallery}>
      {galleryData.map((galleryPost, i) => (
        <GalleryPost key={i} galleryData={galleryPost} />
      ))}
    </div>
  );
};

export default Gallery;
