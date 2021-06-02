import sheetStyle from "./Gallery.module.scss";

const GalleryPost = ({ galleryData }) => {
  return (
    <div className={sheetStyle.post}>
      <h4>{galleryData.title}</h4>
      <p>{galleryData.subtitle}</p>
      <p>{galleryData.alt}</p>
      <p>{galleryData.description}</p>
      <p>{galleryData.url}</p>
      <h6>{galleryData.createdAt.substring(0, 10)}</h6>
    </div>
  );
};

export default GalleryPost;
