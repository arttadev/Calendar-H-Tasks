import { LIGHT_COLOR, OVERLAY_BACKGROUND_COLOR } from "constants/colors";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  avatarsContainer: {
    position: "absolute",
    top: 32,
    right: 0,
    backgroundColor: LIGHT_COLOR,
    boxShadow: `0px 4px 12px ${OVERLAY_BACKGROUND_COLOR}`,
    zIndex: 100,
  },
  dropdownItem: {
    padding: 14,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#e0e0e0",
    },
  },
  settingsList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    width: 160,
  },
});

export default useStyles;
