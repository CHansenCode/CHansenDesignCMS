const ViewSwitcher = ({
  onClickChangeView,
  view,
  setActivateDeletionAllowed,
  activateDeletionAllowed,
  setShowForm,
}) => {
  return (
    <div style={{ display: "flex", margin: "1rem 0" }}>
      <button
        style={{ marginRight: "0.5rem" }}
        className={view == "listed" ? "active" : null}
        onClick={() => {
          onClickChangeView("listed");
        }}
      >
        List view
      </button>
      <button
        style={{ marginRight: "0.5rem" }}
        className={view == "detailed" ? "active" : null}
        onClick={() => {
          onClickChangeView("detailed");
        }}
      >
        Detailed view
      </button>
      <button
        style={{ marginRight: "2rem" }}
        className={view == "thumbnail" ? "active" : null}
        onClick={() => {
          onClickChangeView("thumbnail");
        }}
      >
        Thumbnail view
      </button>
      <button
        onClick={() => {
          setShowForm(true);
        }}
        style={{
          color: "green",
          border: "thin solid green",
          backgroundColor: "rgb(230,255,230)",
          borderRadius: "0.5rem",
          marginRight: "0.5rem",
        }}
      >
        Add new entry
      </button>
      <button
        style={{
          color: "red",
          border: "thin solid red",
          borderRadius: "0.5rem",
          backgroundColor: "rgb(255,240,240)",
        }}
        onClick={() => {
          setActivateDeletionAllowed(!activateDeletionAllowed);
        }}
      >
        Activate Deletion Mode
      </button>
    </div>
  );
};

export default ViewSwitcher;
