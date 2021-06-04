import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// import { getArchProjects } from "../actions/archProjects.actions";
import { getGallery, updateGalleryPost } from "../actions/gallery.actions";

import Form from "../components/Form/Form";
import DatabaseViewer from "../components/DatabaseViewer/DatabaseViewer";
import ViewSwitcher from "../components/ViewSwitcher/ViewSwitcher";

const gallery = ({ meta }) => {
  const dispatch = useDispatch();

  const [updateTrigger, SetUpdateTrigger] = useState(0);
  const [view, setView] = useState("listed");
  const [currentId, setCurrentId] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [activateDeletionAllowed, setActivateDeletionAllowed] = useState(false);

  useEffect(() => {
    dispatch(getGallery());
    SetUpdateTrigger(0);
    console.log("reloaded");
  }, [currentId, updateTrigger]);

  useEffect(() => {}, [currentId]);

  let data = useSelector((state) => state.GalleryPosts);

  function onClickChangeView(input) {
    setView(input);
  }
  function dispatchUpdate(payload) {
    dispatch(updateGalleryPost(currentId, payload));
    SetUpdateTrigger(1);
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
        dispatchUpdate={dispatchUpdate}
      />
    </>
  );
};

export default gallery;
