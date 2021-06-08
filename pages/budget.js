import { useState, useEffect } from "react";

import BudgetViewer from "../components/BudgetViewer/BudgetViewer";

import NewForm from "../components/NewForm/NewForm";
import Input from "../components/NewForm/Input";

const budget = ({ width }) => {
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    value: "",
    note: "",
    person: "",
    date: "",
  });

  function onSubmit() {
    e.preventDefault();
  }

  useEffect(() => {
    console.log(formData.date);
  }, [formData.date]);

  return (
    <section>
      {/* FORM */}
      <div
        style={{
          position: "absolute",
          right: showForm === true ? "0" : "-50rem",
          top: "0",
          height: "100%;",
          transition: "0.6s ease",
        }}
      >
        <NewForm
          title="Budget form"
          onSubmit={onSubmit}
          width="50rem"
          border="thin solid"
          padding="2rem"
        >
          {/* TITLE */}
          <Input
            title="title"
            type="text"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          ></Input>
          {/* CATEGORY */}
          <Input
            title="category"
            type="text"
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          ></Input>
          {/* VALUE */}
          <Input
            title="Value"
            type="text"
            value={formData.value}
            onChange={(e) =>
              setFormData({ ...formData, value: e.target.value })
            }
          ></Input>
          {/* NOTE */}
          <Input
            title="Note"
            type="textarea"
            value={formData.note}
            onChange={(e) => setFormData({ ...formData, note: e.target.value })}
          ></Input>
          {/* PERSON */}
          <Input
            title="Person"
            type="text"
            value={formData.person}
            onChange={(e) =>
              setFormData({ ...formData, person: e.target.value })
            }
          ></Input>
          {/* SUBMIT */}
          <Input title="Skicka" type="submit" />
        </NewForm>
      </div>

      <div style={{ position: "absolute", left: "0", bottom: "0" }}>
        <button
          onClick={() => {
            setShowForm(!showForm);
          }}
        ></button>
      </div>

      {/* BUDGETAPP */}
      <BudgetViewer formData={formData} setFormData={setFormData} />
    </section>
  );
};

budget.defaultProps = {
  width: "50rem",
};

export default budget;
