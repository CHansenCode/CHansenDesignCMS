const Input = ({ title, type, value, onChange, placeholder, rows }) => {
  switch (type) {
    //CHECKBOX
    case "checkbox":
      return (
        <div>
          {title ? <h6>{title}</h6> : null}
          <input
            placeholder={placeholder ? placeholder : ""}
            value={value}
            onChange={onChange}
          />
        </div>
      );
      break;

    //DATE
    case "date":
      return (
        <div>
          {title ? <h6>{title}</h6> : null}
          <input
            placeholder={placeholder ? placeholder : ""}
            value={value}
            onChange={onChange}
            type="date"
          />
        </div>
      );
      break;

    //SUBMIT
    case "submit":
      return (
        <div>
          <input
            placeholder={placeholder ? placeholder : ""}
            value={title ? title : "Send"}
            type="submit"
            onClick={(e) => {
              e.preventDefault();
            }}
          />
        </div>
      );
      break;

    //TEXTAREA
    case "textarea":
      return (
        <div>
          {title ? <h6>{title}</h6> : null}
          <textarea
            placeholder={placeholder ? placeholder : ""}
            value={value}
            onChange={onChange}
            type="date"
            rows={rows}
          />
        </div>
      );
      break;

    //TEXT & DEFAULT
    case "text":
      return (
        <div>
          {title ? <h6>{title}</h6> : null}
          <input
            placeholder={placeholder ? placeholder : ""}
            value={value}
            onChange={onChange}
            type="text"
          />
        </div>
      );
      break;

    default:
      return (
        <div>
          {title ? <h6>{title}</h6> : null}
          <input
            placeholder={placeholder ? placeholder : ""}
            value={value}
            onChange={onChange}
            type="text"
          />
        </div>
      );
      break;
  }
};

Input.defaultProps = {
  rows: "3",
};

export default Input;
