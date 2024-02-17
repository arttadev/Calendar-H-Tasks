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
    height: 120,
    padding: 20,
    width: 340,
    borderRadius: 4,
    backgroundColor: LIGHT_COLOR,
  },
});

export default useStyles;
