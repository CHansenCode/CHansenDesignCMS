import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

//API
import { userAPI } from "../config";
import { authUser, getUsers } from "../actions/users.actions";
import * as api from "../api/index";

//UI
import NewForm from "../components/NewForm/NewForm";
import Input from "../components/NewForm/Input";
import AnimeTemplate from "../public/animations/AnimeTemplate";

const Home = ({ meta, setMeta }) => {
  const dispatch = useDispatch();

  const inlineStyle = {};

  //STATES
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [local, setLocal] = useState({
    auth: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  //OnSUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post(`${userAPI}/login`, formData)
      //set token in Meta State
      .then((res) =>
        setMeta({
          ...meta,
          token: res.data.token,
          username: res.data.username,
        })
      )
      .then((res) => window.localStorage.setItem("auth-token", res.data.token))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const localToken = window.localStorage.getItem("auth-token");
    if (localToken) {
      setMeta({ ...meta, token: localToken });
    }
  }, []);

  useEffect(() => {
    const localToken = window.localStorage.getItem("auth-token");
    setLocal({ auth: localToken });
  }, []);
  useEffect(() => {
    window.localStorage.setItem("auth-token", local.auth);
  }, [local]);

  //RESET
  function reset(e) {
    e.preventDefault();
    setFormData({
      username: "",
      password: "",
    });
  }

  return (
    <section style={{ minHeight: "90vh" }}>
      <div>
        {meta.token ? (
          <>
            <h4>information</h4>
            <h5>{meta.token}</h5>
            <p>{meta.username}</p>
            <p>{local.auth}</p>
            <Input
              title="auth"
              value={local.auth}
              onChange={(e) => setLocal({ ...local, auth: e.target.value })}
            />
          </>
        ) : (
          // <AnimeTemplate />
          <NewForm title="CHansenDesign" width="30rem" onSubmit={handleSubmit}>
            <Input
              title="username"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
            />
            <Input
              title="password"
              type="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            <div style={{ display: "flex" }}>
              <button style={{ marginRight: "1rem", width: "5rem" }}>
                Log in
              </button>
              <button
                style={{
                  marginRight: "1rem",
                  width: "5rem",
                  color: "red",
                  border: "thin solid red",
                }}
                onClick={reset}
              >
                reset
              </button>
            </div>
            <h5>{meta.token}</h5>
            <p>{meta.username}</p>
            <p>{local.auth}</p>
          </NewForm>
        )}
      </div>
    </section>
  );
};

export default Home;
