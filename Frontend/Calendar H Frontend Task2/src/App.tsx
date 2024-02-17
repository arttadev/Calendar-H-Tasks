import { RouterProvider } from "react-router-dom";
import { router } from "router";
import { useStyles } from "useStyles";

const App = () => {
  useStyles();
  return <RouterProvider router={router} />;
};

export default App;
