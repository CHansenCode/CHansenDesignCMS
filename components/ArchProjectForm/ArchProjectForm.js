import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  createArchProject,
  updateArchProject,
} from "../../actions/archProjects.actions";

import Form from "../../styles/Form.module.scss";

import sheetStyle from "./Form.module.scss";

const ArchProjectForm = ({ currentId, setCurrentId }) => {
  const dispatch = useDispatch();

  const [archProjData, setArchProjData] = useState({
    title: "",
    subtitle: "",
    tags: [],
    heroImage: "",
    galleryThumbnail: "",
    description: "",
    sections: [
      {
        exists: "",
        drawingType: "",
        title: "",
        subtitle: "",
        body: "",
        url: "",
      },
    ],
    gallery: [{ title: "", altText: "", URL: "", thumbnailURL: "" }],
  });

  //Clear state
  const clear = () => {
    setArchProjData({
      title: "",
      subtitle: "",
      tags: "",
      heroImage: "",
      galleryThumbnail: "",
      description: "",
    });
  };

  //Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(archProjData);
    dispatch(createArchProject(archProjData));
    clear();
  };
  return (
    <div className={sheetStyle.formContainer}>
      <form className={archFormStyles.form} onSubmit={handleSubmit}>
        <div className={archFormStyles.inputWrapper}></div>

        <input value="SEND" className={archFormStyles.submit} type="submit" />
      </form>
    </div>
  );
};

export default ArchProjectForm;

//FOR UPDATING
// const archProject = useSelector((state) =>
//   currentId
//     ? state.archProjects.find((message) => message._id === currentId)
//     : null
// );

// useEffect(() => {
//   if (archProject) setPostData(archProject);
// }, [archProject]);
