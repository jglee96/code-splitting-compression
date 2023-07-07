import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" lazy={async () => import("./routes/home")}>
        <Route path="vite" lazy={async () => import("./routes/vite")} />
        <Route path="react" lazy={async () => import("./routes/react")} />
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
