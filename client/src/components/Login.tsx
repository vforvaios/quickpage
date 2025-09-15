/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import adminbg from "../assets/react.svg";

// import { setGeneralLoading } from "@models/actions/generalActions";
// import { loginUser } from "@/models/actions/userActions";
// import { token } from "@models/selectors/userSelectors";
import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const userToken = useSelector(token);

  const submitLoginForm = () => {
    if (username === "") {
      setUsernameError("Πρέπει να συμπληρώσετε username!");
    } else {
      setUsernameError("");
    }

    if (password === "") {
      setPasswordError("Πρέπει να συμπληρώσετε κωδικό!");
    } else {
      setPasswordError("");
    }

    if (username !== "" && password !== "") {
      // const data = { username, password };
      // dispatch(setGeneralLoading(true));
      // dispatch(loginUser(data));
    }
  };

  useEffect(() => {
    const keyDownHandler = (event: any) => {
      if (event.key === "Enter") {
        event.preventDefault();

        submitLoginForm();
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  });

  // useEffect(() => {
  //   userToken && navigate("/");
  // }, [userToken, navigate]);

  // useEffect(() => {
  //   dispatch(setGeneralLoading(false));
  // }, []);

  return (
    <div
      className="content login-page"
      style={{ background: `url('${adminbg}')` }}
    >
      <div className="login-container">
        <div className="login-icon-container">
          <i className="icon-user-o" />
        </div>
        <div className="login-inputs">
          <div className="login-input">
            <FormControl fullWidth className="withicon">
              <InputLabel htmlFor="login-username">ΟΝΟΜΑ ΧΡΗΣΤΗ</InputLabel>
              <i className="icon-user-o" />
              <Input
                className="input"
                fullWidth
                id="login-username"
                type="username"
                value={username}
                error={usernameError !== ""}
                onChange={(e) => setUsername(e.target.value)}
              />
              {usernameError !== "" && (
                <span className="error-span">{usernameError}</span>
              )}
            </FormControl>
          </div>
          <div className="login-input">
            <FormControl fullWidth className="withicon">
              <InputLabel htmlFor="login-password">ΚΩΔΙΚΟΣ ΧΡΗΣΤΗ</InputLabel>
              <i className="icon-key" />
              <Input
                className="input"
                fullWidth
                id="login-password"
                type="password"
                value={password}
                error={false}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError !== "" && (
                <span className="error-span">{passwordError}</span>
              )}
            </FormControl>
          </div>
        </div>
        <div className="actions center">
          <button className="button lightblue" onClick={submitLoginForm}>
            ΕΙΣΟΔΟΣ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
