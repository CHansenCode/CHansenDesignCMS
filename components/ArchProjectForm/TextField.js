import archFormStyles from "../../styles/ArchProjectForm.module.scss";
import { FaInfoCircle } from "react-icons/fa";

const TextField = ({ name, onChange, hoverInformation }) => {
  return (
    <>
      <div className={archFormStyles.inputWrapper}>
        <textarea
          className={archFormStyles.textarea}
          name={name}
          placeholder={name}
          cols="30"
          rows="5"
          onChange={onChange}
        ></textarea>
        <div className={archFormStyles.hoverInfo}>
          <FaInfoCircle color="gray" />
          <p className={archFormStyles.Info}>{hoverInformation}</p>
        </div>
      </div>
    </>
  );
};

export default TextField;
