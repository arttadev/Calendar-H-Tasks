import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faLock,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import useStyles from "./styles";

interface IRegisterFormProps {
  errors: {
    email?: string;
    password?: string;
    confirmPassword?: string;
  };
  formData: {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    gender: string;
    password: string;
    confirmPassword: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const RegisterForm = ({ errors, handleChange, handleSubmit, formData }: IRegisterFormProps) => {
  const classes = useStyles();
  return (
    <form
      id="registrationForm"
      className={classes.form}
      onSubmit={handleSubmit}
    >
      <h3 className={classes.registrationLabel}>REGISTRATION FORM</h3>
      <div className={classes.formGroup}>
        <input
          type="text"
          placeholder="First Name"
          className={classes.formControl}
          name="firstName"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Last Name"
          className={classes.formControl}
          name="lastName"
          onChange={handleChange}
        />
      </div>
      <div className={classes.formWrapper}>
        <input
          type="text"
          placeholder="Username"
          className={classes.formControl}
          name="username"
          onChange={handleChange}
          required
        />
        <FontAwesomeIcon icon={faUser} />
      </div>
      <div className={classes.formWrapper}>
        <div>
          <input
            type="text"
            placeholder="Email Address"
            className={classes.formControl}
            name="email"
            onChange={handleChange}
            required
          />
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
        {errors.email && (
          <span className={classes.errorMessage}>{errors.email}</span>
        )}
      </div>
      <div className={classes.formWrapper}>
        <select
          name="gender"
          id="gender"
          className={classes.formControl}
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="" disabled>
            Select your gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className={classes.formWrapper}>
        <input
          type="password"
          placeholder="Password"
          name="password"
          className={classes.formControl}
          onChange={handleChange}
        />
        <FontAwesomeIcon icon={faLock} />
        {errors.password && (
          <span className={classes.errorMessage}>{errors.password}</span>
        )}
      </div>
      <div className={classes.formWrapper}>
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          className={classes.formControl}
          onChange={handleChange}
        />
        <FontAwesomeIcon icon={faLock} />
        {errors.confirmPassword && (
          <span className={classes.errorMessage}>{errors.confirmPassword}</span>
        )}
      </div>
      <button
        type="submit"
        className={`${classes.button} ${classes.registerButton} `}
      >
        Register
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </form>
  );
};

export default RegisterForm;
