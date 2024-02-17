import { LIGHT_COLOR, OVERLAY_BACKGROUND_COLOR } from "constants/colors";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: OVERLAY_BACKGROUND_COLOR,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    zIndex: 1000,
  },
  overlayContent: {
    height: 140,
    width: 380,
    borderRadius: 4,
    backgroundColor: LIGHT_COLOR,
    display: "flex",
    flexDirection: "column",
    justifyItems: "start",
    gap: 4,
  },
  usericonContainer: {
    display: "flex",
    alignItems: "center",
    gap: 20,
  },
  usericon: {
    padding: 22,
  },
  userinfo: {
    display: "flex",
    flexDirection: "column",
  },
  overlayButtons: {
    display: "flex",
    gap: 20,
    justifyContent: "center",
  },
  overlaybutton: {
    border: "none",
    width: "104px",
    height: "31px",
    cursor: "pointer",
    display: "flex",
    gap: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  deleteButton: {
    background: "red",
    color: LIGHT_COLOR,
  },
});

export default useStyles;
