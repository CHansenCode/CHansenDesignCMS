import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// import { getArchProjects } from "../actions/archProjects.actions";
import { getGallery } from "../actions/gallery.actions";

import Form from "../components/Form/Form";
import DatabaseViewer from "../components/DatabaseViewer/DatabaseViewer";
import ViewSwitcher from "../components/ViewSwitcher/ViewSwitcher";

const gallery = ({ meta }) => {
  const dispatch = useDispatch();

  const [view, setView] = useState("listed");
  const [currentId, setCurrentId] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [activateDeletionAllowed, setActivateDeletionAllowed] = useState(false);

  useEffect(() => {
    dispatch(getGallery());
  }, [dispatch]);

  useEffect(() => {}, [currentId]);

  let data = useSelector((state) => state.GalleryPosts);

  function onClickChangeView(input) {
    setView(input);
  }

  return (
    <>
      <>
        <h2>{meta.formPages[1].title}</h2>
        <ViewSwitcher
          view={view}
          onClickChangeView={onClickChangeView}
          setActivateDeletionAllowed={setActivateDeletionAllowed}
          activateDeletionAllowed={activateDeletionAllowed}
          showForm={showForm}
          setShowForm={setShowForm}
        />
        <DatabaseViewer
          view={view}
          data={data}
          currentId={currentId}
          setCurrentId={setCurrentId}
          activateDeletionAllowed={activateDeletionAllowed}
          showForm={showForm}
          setShowForm={setShowForm}
        />
      </>
      <Form
        meta={meta}
        title="Gallery Post"
        currentId={currentId}
        setCurrentId={setCurrentId}
        showForm={showForm}
        setShowForm={setShowForm}
      />
    </>
  );
};

export default gallery;
