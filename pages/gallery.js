import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

// import { getArchProjects } from "../actions/archProjects.actions";
import { getGallery, updateGalleryPost } from "../actions/gallery.actions";

import Form from "../components/Form/Form";
import DatabaseViewer from "../components/DatabaseViewer/DatabaseViewer";
import ViewSwitcher from "../components/ViewSwitcher/ViewSwitcher";

const gallery = ({ meta }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  //DATA STATES
  const [updateTrigger, SetUpdateTrigger] = useState(0);
  const [currentId, setCurrentId] = useState(0);

  //UI STATES
  const [showForm, setShowForm] = useState(false);
  const [view, setView] = useState("listed");
  const [activateDeletionAllowed, setActivateDeletionAllowed] = useState(false);

  useEffect(() => {
    dispatch(getGallery());
    SetUpdateTrigger(0);
    console.log("reloaded");
  }, [currentId, updateTrigger]);

  //if no token, push to startPage
  useEffect(() => {
    !meta.token ? router.push("/") : null;
  }, []);

  let data = useSelector((state) => state.GalleryPosts);

  function onClickChangeView(input) {
    setView(input);
  }
  function dispatchUpdate(payload) {
    dispatch(updateGalleryPost(currentId, payload));
    SetUpdateTrigger(1);
  }

  return (
    <section style={{ minHeight: "100vh" }}>
      <>
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
    </section>
  );
};

export default gallery;
