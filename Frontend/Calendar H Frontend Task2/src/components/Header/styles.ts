import { BORDER_COLOR } from "constants/colors";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  headerContainer: {
    height: 72,
    borderBottom: `1px solid ${BORDER_COLOR}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0px 12px',
  },
  label: {
    fontSize: 32,
    color: 'green',
  }
});

export default useStyles;
