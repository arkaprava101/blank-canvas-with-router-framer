import { createBrowserRouter } from "react-router-dom";
import SharedLayout from "./Pages/SharedLayout";
import Homepage from "./Pages/Homepage";
import About from "./Pages/About";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
const App = () => {
  return <></>;
};

export default App;
