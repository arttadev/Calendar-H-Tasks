import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 40,
    height: "80vh",
  },
  calendarContainer: {
    width: 450,
    "& .react-calendar__month-view__days": {
      height: 360,
    },
  },
  eventTitle: {
    fontSize: "0.75em",
    color: "blue",
  },
});

export default useStyles;
