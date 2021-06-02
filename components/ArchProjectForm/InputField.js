import archFormStyles from "../../styles/ArchProjectForm.module.scss";
import { FaInfoCircle } from "react-icons/fa";

const InputField = ({ name, onChange, hoverInformation }) => {
  return (
    <div className={archFormStyles.inputWrapper}>
      <input
        className={archFormStyles.input}
        type="text"
        name={name}
        placeholder={name}
        onChange={onChange}
      />
      <div className={archFormStyles.hoverInfo}>
        <FaInfoCircle color="gray" />
        <p className={archFormStyles.Info}>{hoverInformation}</p>
      </div>
    </div>
  );
};

export default InputField;
