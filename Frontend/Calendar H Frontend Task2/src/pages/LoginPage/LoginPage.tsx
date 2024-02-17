import useStyles from "../../components/RegisterForm/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { INVALID_LOGIN, REGISTER_ERROR } from "constants/textMessages";

interface IUser {
  username: string;
  email: string;
  password: string;
}

const LoginPage = () => {
  const classes = useStyles();
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    login: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    },
    []
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const storedUsersInfo = localStorage.getItem("usersInfo");
      if (storedUsersInfo) {
        const users: IUser[] = JSON.parse(storedUsersInfo as string);
        const user = users.find(
          (user) =>
            (user.username === formData.login ||
              user.email === formData.login) &&
            user.password === formData.password
        );
        if (user) {
          localStorage.setItem("logedUser", JSON.stringify(user));
          navigate("/dashboard");
        } else {
          setErrorMessage(INVALID_LOGIN);
        }
      } else {
        setErrorMessage(REGISTER_ERROR);
      }
    },
    [formData, navigate]
  );
  return (
    <div>
      <div className={classes.wrapper}>
        <form
          action="dashboard.html"
          id="loginForm"
          style={{ height: "40vh", width: "30%" }}
          onSubmit={handleSubmit}
        >
          <h3 className={classes.registrationLabel}>Login Form</h3>
          <div className={classes.formWrapper}>
            <input
              type="text"
              placeholder="Username or Email"
              className={classes.formControl}
              name="login"
              onChange={handleChange}
            />
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div className={classes.formWrapper}>
            <input
              type="password"
              placeholder="Password"
              className={`${classes.formControl} ${classes.loginPasswordInput}`}
              name="password"
              onChange={handleChange}
            />
            <FontAwesomeIcon icon={faLock} />
          </div>
          {errorMessage && (
            <span className={classes.errorMessage}>{errorMessage}</span>
          )}
          <div className={classes.buttonsContainer}>
            <button
              className={`${classes.button} ${classes.loginButton} `}
              type="submit"
            >
              Login
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
            <button
              className={`${classes.button} ${classes.registerButton} `}
              onClick={() => navigate("/register")}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
