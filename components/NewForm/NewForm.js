import sheetStyle from "./NewForm.module.scss";

const NewForm = ({
  children,
  onSubmit,
  title,
  width,
  border,
  boxShadow,
  padding,
}) => {
  const inlineStyle = {
    width: width,
    border: border,
    boxShadow: boxShadow,
    padding: padding,
  };
  return (
    <div style={inlineStyle} className={sheetStyle.outerDiv}>
      <form className={sheetStyle.formElement} onSubmit={onSubmit}>
        <h3>{title}</h3>
        {children}
      </form>
    </div>
  );
};

export default NewForm;
