import sheetStyle from "./Form.module.scss";

const Info = ({ info }) => {
  return (
    <div className={sheetStyle.infoHover}>
      <div className={sheetStyle.infoHoverText}>{info}</div>
      <h6>i</h6>
    </div>
  );
};

const Input = ({
  type,
  name,
  title,
  onChange,
  value,
  rows,
  children,
  info,
}) => {
  switch (type) {
    //CASE TEXT, DEFAULT
    case "text":
      return (
        <div className={sheetStyle.inputContainer}>
          <h6>{title}</h6>
          <input name={name} type={type} value={value} onChange={onChange} />
          {info ? <Info info={info} /> : null}
        </div>
      );
    //CASE TEXTAREA
    case "textarea":
      return (
        <div className={sheetStyle.inputContainer}>
          <h6>{title}</h6>
          <textarea
            rows={rows}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
          />
          {/* onHoverShowInputRelatedInfo */}
          {info ? <Info info={info} /> : null}
        </div>
      );
    case "select":
      //CASE SELECT
      return (
        <div className={sheetStyle.inputContainer}>
          <h6>{title}</h6>
          <select onChange={onChange}>{children}</select>
          {info ? <Info info={info} /> : null}
        </div>
      );
      break;
    default:
      //text
      return (
        <div className={sheetStyle.inputContainer}>
          <h6>{title}</h6>
          <input name={name} type={type} value={value} onChange={onChange} />
          {info ? <Info info={info} /> : null}
        </div>
      );
      break;
  }
  Input.defaultProps = {
    rows: "3",
  };
};

export default Input;
