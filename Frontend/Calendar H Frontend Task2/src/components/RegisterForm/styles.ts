import { BORDER_COLOR, LIGHT_COLOR } from "constants/colors";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
    height: "98vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    height: "60vh",
    width: "40%",
  },
  registrationLabel: {
    fontSize: "28px",
    textAlign: "center",
  },
  formGroup: {
    display: "flex",
    "& input:first-child": {
      marginRight: "25px",
    },
  },
  formWrapper: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    marginBottom: "15px",
    "& svg": {
      position: "absolute",
      right: 0,
      bottom: "22px",
      paddingBottom: 8,
    },
    "& input:last-child": {
      marginRight: "5px",
    },
  },
  formControl: {
    border: `1px solid ${BORDER_COLOR}`,
    borderTop: "none",
    borderRight: "none",
    borderLeft: "none",
    background: "transparent",
    width: "100%",
    height: "36px",
    marginBottom: "12px",
  },
  loginPasswordInput: {
    marginBottom: "0px !important",
  },
  select: {
    cursor: "pointer",
  },
  button: {
    border: "none",
    width: "114px",
    height: "31px",
    margin: "auto",
    marginTop: "12px",
    cursor: "pointer",
    display: "flex",
    gap: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  errorMessage: {
    color: "red",
    fontSize: 13,
  },
  buttonsContainer: {
    display: "flex",
    alignItems: "center",
  },
  loginButton: {
    background: BORDER_COLOR,
    color: LIGHT_COLOR,
  },
  registerButton: {
    background: "green",
    color: LIGHT_COLOR,
  }
});

export default useStyles;
