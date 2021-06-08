import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  createGalleryPost,
  updateGalleryPost,
} from "../../actions/gallery.actions";

import Image from "../Image/Image";
import Input from "./Input";

import sheetStyle from "./Form.module.scss";

const Form = ({
  meta,
  currentId,
  setCurrentId,
  showForm,
  setShowForm,
  dispatchUpdate,
}) => {
  const dispatch = useDispatch();

  //FORMDATA & RESET
  const [formData, setFormData] = useState({
    //VIEW
    title: "",
    subtitle: "",
    description: "",
    scale: "",
    northRotation: "",

    //SEO
    alt: "",

    //FILTERS
    category: "",
    project: "",
    stage: "",
    stageType: "",
    drawingType: "",
    tags: [],

    //FILE
    fileName: "",
    url: "",
    thumbnail: "",

    //ARCHIVALS
    createdBy: "CHansen",
  });
  const clear = () => {
    setCurrentId(0);
    setFormData({
      title: "",
      subtitle: "",
      description: "",
      scale: "",
      northRotation: "",

      //SEO
      alt: "",

      //FILTERS
      category: "",
      project: "",
      stage: "",
      stageType: "",
      drawingType: "",
      tags: [],

      //FILE
      fileName: "",
      url: "",
      thumbnail: "",

      //ARCHIVALS
      createdBy: "CHansen",
    });
  };
  //OnClick generateURL from category, project & filename
  function generateUrl(e) {
    e.preventDefault();
    let fileUrl =
      meta.mediaServerRoot +
      formData.category +
      "/" +
      formData.project +
      "/" +
      formData.fileName;
    let thumbnailUrl =
      meta.mediaServerRoot +
      formData.category +
      "/" +
      formData.project +
      "/thumbnail/" +
      formData.fileName;
    setFormData({ ...formData, thumbnail: thumbnailUrl, url: fileUrl });
  }

  // IF currentId change (populated), find corresponding object in gallerypost store and insert/update setFormData
  const galleryPost = useSelector((state) =>
    currentId ? state.GalleryPosts.find((any) => any._id === currentId) : null
  );
  useEffect(() => {
    if (galleryPost) setFormData(galleryPost);
  }, [galleryPost]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId === 0) {
      dispatch(createGalleryPost(formData));
    } else {
      dispatchUpdate(formData);
    }
    clear();
  };

  function handleFileChange(e) {
    let string = e.target.value;
    let fileNameString = string.replace(/.*[\/\\]/, "");
    setFormData({ ...formData, fileName: fileNameString });
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
        {/* Header */}
        <h4>{currentId ? currentId : "Create new entry"}</h4>

        {/* Top */}
        <header>
          <div>
            <Input
              value={formData.title}
              title="title"
              info="f.e. 'Main room'"
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />
            <Input
              value={formData.subtitle}
              title="subtitle"
              onChange={(e) =>
                setFormData({ ...formData, subtitle: e.target.value })
              }
            />
            <div className={sheetStyle.splitTwo}>
              <Input
                title="category"
                type="select"
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
              >
                <option value="investigative">-</option>
                <option value="architecture">architecture</option>
                <option value="webdev">webdev</option>
                <option value="graphics">graphics</option>
                <option value="other">other</option>
              </Input>
              <Input
                title="project"
                type="select"
                onChange={(e) =>
                  setFormData({ ...formData, project: e.target.value })
                }
              >
                <option value="investigative">-</option>
                <option value="ishallen">ishallen</option>
                <option value="viking">viking</option>
                <option value="openkitchen">openkitchen</option>
                <option value="annerberg">annerberg</option>
                <option value="svanen">svanen</option>
              </Input>
            </div>
            <div className={sheetStyle.splitTwo}>
              <Input
                title="stage"
                type="select"
                onChange={(e) =>
                  setFormData({ ...formData, stage: e.target.value })
                }
              >
                <option value="investigative">-</option>
                <option value="investigative">investigation</option>
                <option value="proposal">proposal</option>
                <option value="process">process</option>
                <option value="final">final</option>
              </Input>
              <Input
                title="phase"
                type="select"
                onChange={(e) =>
                  setFormData({ ...formData, stageType: e.target.value })
                }
              >
                <option value="investigative">-</option>
                <option value="measurment">measurment</option>
                <option value="conceptual">conceptual</option>
                <option value="proposal">proposal</option>
                <option value="progress">progress</option>
                <option value="final">final</option>
              </Input>
            </div>
            <div className={sheetStyle.splitTwo}>
              <Input
                title="drawing type"
                type="select"
                onChange={(e) =>
                  setFormData({ ...formData, drawingType: e.target.value })
                }
              >
                <option value="investigative">-</option>
                <option value="elevation">elevation</option>
                <option value="sitemap">sitemap</option>
                <option value="section">section</option>
                <option value="plan">plan</option>
                <option value="axonometric">axonometric</option>
                <option value="perspective">perspective</option>
                <option value="diagram">diagram</option>
                <option value="other">other</option>
              </Input>
            </div>
            <div className={sheetStyle.splitTwo}>
              <Input
                title="scale"
                info="f.e. 10,20,50,100,200"
                onChange={(e) =>
                  setFormData({ ...formData, scale: e.target.value })
                }
              />
              <Input
                title="northRotation"
                info="0-360, 0 is north, clockwise by degree"
                onChange={(e) =>
                  setFormData({ ...formData, northRotation: e.target.value })
                }
              />
            </div>
          </div>

          <picture>
            <Image cover src={formData.thumbnail} />
          </picture>
        </header>

        {/* Mid */}
        <div className={sheetStyle.body}>
          <Input
            value={formData.alt}
            title="alt"
            type="textarea"
            onChange={(e) => setFormData({ ...formData, alt: e.target.value })}
          />
          <Input
            value={formData.description}
            title="description"
            type="textarea"
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />

          <div style={{ display: "flex" }}>
            <input
              type="file"
              onChange={handleFileChange}
              className={sheetStyle.inputContainer}
            />
            <button
              style={{ width: "60%", marginBottom: "0.5rem" }}
              onClick={generateUrl}
            >
              Generate URL
            </button>
          </div>
          <Input
            value={formData.url}
            title="url"
            onChange={(e) => setFormData({ ...formData, url: e.target.value })}
          />
          <Input
            value={formData.thumbnail}
            title="thumbnail"
            onChange={(e) =>
              setFormData({ ...formData, thumbnail: e.target.value })
            }
          />
        </div>

        <button style={{ marginTop: "1rem" }}>
          {!currentId ? "Add new entry" : "Update excisting entry"}
        </button>
      </form>

      {/* Bottom Buttons */}
      <footer className={sheetStyle.footer}>
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
      </footer>
    </div>
  );
};

export default Form;
