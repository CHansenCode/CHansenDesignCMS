import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  createGalleryPost,
  updateGalleryPost,
} from "../../actions/gallery.actions";

import Image from "../Image/Image";

import sheetStyle from "./Form.module.scss";

const Form = ({ meta, currentId, setCurrentId, showForm, setShowForm }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    alt: "",
    category: "architecture",
    project: "ishallen",
    stage: "investigation",
    description: "",
    url: "",
    thumbnail: "",
    file: "",
  });
  const clear = () => {
    setCurrentId(0);
    setFormData({
      title: "",
      subtitle: "",
      alt: "",
      category: "architecture",
      project: "ishallen",
      stage: "investigation",
      description: "",
      url: "",
      thumbnail: "",
      file: "",
    });
  };

  function generateUrl(e) {
    e.preventDefault();
    let fileUrl =
      meta.mediaServerRoot +
      formData.category +
      "/" +
      formData.project +
      "/" +
      formData.file;
    let thumbnailUrl =
      meta.mediaServerRoot +
      formData.category +
      "/" +
      formData.project +
      "/thumbnail/" +
      formData.file;
    setFormData({ ...formData, thumbnail: thumbnailUrl, url: fileUrl });
  }

  const galleryPost = useSelector((state) =>
    currentId ? state.GalleryPosts.find((any) => any._id === currentId) : null
  );

  useEffect(() => {
    if (galleryPost) setFormData(galleryPost);
  }, [galleryPost]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createGalleryPost(formData));
    // if (currentId === 0) {
    //   dispatch(createGalleryPost(formData));
    // } else {
    //   dispatch(updateGalleryPost(currentId, formData));
    // }
  };

  function handleFileChange(e) {
    let string = e.target.value;
    let fileNameString = string.replace(/.*[\/\\]/, "");
    setFormData({ ...formData, file: fileNameString });
  }

  return (
    <div
      style={
        !showForm
          ? { left: "102vw", opacity: "0" }
          : { left: "calc(100vw - 40vw)", opacity: "1" }
      }
      className={sheetStyle.formContainer}
    >
      <form
        style={
          !showForm
            ? { left: "calc(100vw + 4rem)" }
            : { left: "calc(100vw - 40rem)" }
        }
        className={sheetStyle.form}
        onSubmit={handleSubmit}
      >
        <h4>{currentId ? currentId : "Create new entry"}</h4>
        <header>
          <div>
            <div className={sheetStyle.inputContainer}>
              <h6>title:</h6>
              <input
                name="title"
                type="text"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
              />
            </div>
            <div className={sheetStyle.inputContainer}>
              <h6>subtitle:</h6>
              <input
                name="subtitle"
                type="text"
                value={formData.subtitle}
                onChange={(e) =>
                  setFormData({ ...formData, subtitle: e.target.value })
                }
              />
            </div>
            <div className={sheetStyle.inputContainer}>
              <h6>Category:</h6>
              <select
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
              >
                <option value="architecture">architecture</option>
                <option value="graphics">Graphics</option>
                <option value="webdev">Webdev</option>
              </select>
            </div>
            <div className={sheetStyle.inputContainer}>
              <h6>Project Name:</h6>
              <select
                onChange={(e) =>
                  setFormData({ ...formData, project: e.target.value })
                }
              >
                <option value="ishallen">ishallen</option>
                <option value="openkitchen">openkitchen</option>
                <option value="Annerberg">Annerberg</option>
                <option value="viking">viking</option>
              </select>
            </div>
            <div className={sheetStyle.inputContainer}>
              <h6>Stage:</h6>
              <select
                onChange={(e) =>
                  setFormData({ ...formData, stage: e.target.value })
                }
              >
                <option value="investigation">investigation</option>
                <option value="proposal">proposal</option>
                <option value="draft">draft</option>
                <option value="final">final</option>
              </select>
            </div>
          </div>
          <picture>
            <Image cover src={formData.thumbnail} />
          </picture>
        </header>

        <div className={sheetStyle.inputContainer}>
          <h6>Image alt:</h6>
          <textarea
            name="alt"
            type="text"
            value={formData.alt}
            placeholder="alt"
            rows="3"
            onChange={(e) => setFormData({ ...formData, alt: e.target.value })}
          />
        </div>
        <div className={sheetStyle.inputContainer}>
          <h6>Description:</h6>
          <textarea
            type="text"
            name="description"
            value={formData.description}
            placeholder="description"
            rows="3"
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
        </div>
        <div className={sheetStyle.inputContainer}>
          <h6>Image file:</h6>
          <div style={{ display: "flex" }}>
            <input
              style={{ width: "50%" }}
              name="file"
              type="file"
              onChange={handleFileChange}
            />
            <button style={{ width: "50%" }} onClick={generateUrl}>
              <p style={{ margin: "0" }}>Generate URL</p>
            </button>
          </div>
        </div>

        <div className={sheetStyle.inputContainer}>
          <h6>Url:</h6>
          <input
            name="url"
            type="text"
            value={formData.url}
            onChange={(e) => setFormData({ ...formData, url: e.target.value })}
          />
        </div>
        <div className={sheetStyle.inputContainer}>
          <h6>Thumbnail:</h6>
          <input
            name="thumbnail"
            type="text"
            value={formData.thumbnail}
            onChange={(e) =>
              setFormData({ ...formData, thumbnail: e.target.value })
            }
          />
        </div>
        <button>
          {!currentId ? "Add new entry" : "Update excisting entry"}
        </button>
      </form>
      <button
        style={{ border: "thin solid orange", color: "darkorange" }}
        onClick={clear}
      >
        Clear form
      </button>
      <button
        style={{ marginTop: "1rem", color: "red", border: "thin solid red" }}
        onClick={() => {
          setShowForm(false);
          setCurrentId;
        }}
      >
        Close form window
      </button>
    </div>
  );
};

export default Form;
