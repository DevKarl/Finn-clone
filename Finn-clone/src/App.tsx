
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import MainLayout from "./layout components/home page layout/HomePageLayout";

const routes = createRoutesFromElements(
  <Route path="/" element = {<MainLayout/>}>
    <Route />
    <Route />
    <Route />
    <Route />
  </Route>
)

const router = createBrowserRouter(routes);

function App() {
  return (<RouterProvider router={router}/>)
}

export default App
