import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteGalleryPost } from "../../actions/gallery.actions";

import Image from "../Image/Image";

import sheetStyle from "./DatabaseViewer.module.scss";

//Default
const ListView = ({
  data,
  setCurrentId,
  activateDeletionAllowed,
  setShowForm,
}) => {
  const dispatch = useDispatch();
  return (
    <div className={sheetStyle.listViewContainer}>
      <div className={sheetStyle.header}>
        <div>
          <h6>category:</h6>
        </div>
        <div>
          <h6>project:</h6>
        </div>
        <div>
          <h6>title:</h6>
        </div>
        <div>
          <h6>filename:</h6>
        </div>
      </div>
      {data.map((post, i) => (
        <div key={i} className={sheetStyle.listViewWrapper}>
          <div
            onClick={() => {
              setCurrentId(post._id);
              setShowForm(true);
            }}
            className={sheetStyle.listView}
          >
            <h5>{post.category}</h5>
            <h5>{post.project}</h5>
            <h5>{post.title}</h5>
            <h5>{post.url}</h5>
          </div>
          <button
            style={
              !activateDeletionAllowed
                ? { display: "none" }
                : { display: "flex" }
            }
            onClick={() => dispatch(deleteGalleryPost(post._id))}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
};
//Full info
const DetailedView = ({
  data,
  setCurrentId,
  activateDeletionAllowed,
  setShowForm,
  showForm,
}) => {
  const inlineStyle = {
    gridTemplate: !showForm ? "auto / 1fr 1fr" : "auto / 1fr",
    width: !showForm ? "100%" : "calc(100% - 50rem)",
  };
  return (
    <div style={inlineStyle} className={sheetStyle.detailedViewContainer}>
      {data.map((post, i) => (
        <div
          onClick={() => {
            setCurrentId(post._id);
            setShowForm(true);
          }}
          className={sheetStyle.detailedView}
          key={i}
        >
          {/* IMAGE */}
          <div className={sheetStyle.imageViewer}>
            <Image cover src={post.url} />
          </div>

          {/* SORTATION INFO */}
          <div className={sheetStyle.sortation}>
            <div>
              <h6>category:</h6>
              <h5>{post.category}</h5>
            </div>
            <div>
              <h6>project:</h6>
              <h5>{post.project}</h5>
            </div>
            <div>
              <h6>stage:</h6>
              <h5>{post.stage ? post.stage : "-"}</h5>
            </div>
            <div>
              <h6>title:</h6>
              <h5>{post.title}</h5>
            </div>
            <div>
              <h6>subtitle:</h6>
              <h5>{post.subtitle}</h5>
            </div>
            <div>
              <h6>createdAt:</h6>
              <h5>{post.createdAt.substring(0, 10)}</h5>
            </div>
            <div>
              <h6>url:</h6>
              <h5>{"..." + post.url.substring(28)}</h5>
            </div>
            <div>
              <h6>subtitle:</h6>
              <h5>{post.subtitle}</h5>
            </div>
            <div>
              <h6>imageAlt:</h6>
              <h5>
                {post.alt.length + " chr." + " - " + post.alt.substring(0, 20)}
              </h5>
            </div>
            <div>
              <h6>description:</h6>
              <h5>
                {post.description.length +
                  " chr." +
                  " - " +
                  post.description.substring(0, 20)}
              </h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
//Visual
const ThumbnailView = ({
  data,
  setCurrentId,
  activateDeletionAllowed,
  setShowForm,
  showForm,
}) => {
  const inlineStyle = {
    width: showForm ? "calc(100% - 50rem)" : "100%",
  };
  return (
    <div style={inlineStyle} className={sheetStyle.thumbnailContainer}>
      {data.map((post, i) => (
        <div
          onClick={() => {
            setCurrentId(post._id);
            setShowForm(true);
          }}
          className={sheetStyle.thumbnailView}
          key={i}
        >
          <div className={sheetStyle.hoverInfo}>
            <p>{post.title}</p>
            <p>{post.project}</p>
            <p>{post.category}</p>
          </div>

          <Image cover alt={post.alt} src={post.url} />
        </div>
      ))}
    </div>
  );
};

const DatabaseViewer = ({
  view,
  data,
  setCurrentId,
  activateDeletionAllowed,
  showForm,
  setShowForm,
}) => {
  if (view == "thumbnail") {
    return (
      <ThumbnailView
        setCurrentId={setCurrentId}
        activateDeletionAllowed={activateDeletionAllowed}
        data={data}
        showForm={showForm}
        setShowForm={setShowForm}
      />
    );
  } else if (view == "detailed") {
    return (
      <DetailedView
        setCurrentId={setCurrentId}
        activateDeletionAllowed={activateDeletionAllowed}
        data={data}
        showForm={showForm}
        setShowForm={setShowForm}
      />
    );
  } else if (view == "listed") {
    return (
      <ListView
        setCurrentId={setCurrentId}
        activateDeletionAllowed={activateDeletionAllowed}
        data={data}
        showForm={showForm}
        setShowForm={setShowForm}
      />
    );
  } else {
    return (
      <ListView
        setCurrentId={setCurrentId}
        activateDeletionAllowed={activateDeletionAllowed}
        data={data}
        showForm={showForm}
        setShowForm={setShowForm}
      />
    );
  }
};

export default DatabaseViewer;
