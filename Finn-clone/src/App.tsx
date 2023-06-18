
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import MainLayout from "./layout components/home page layout/HomePageLayout/HomePageLayout";
import Home from "./pages/home/Home/Home";
import Search from "./pages/search/Search";

const routes = createRoutesFromElements(
  <Route path="/" element = {<MainLayout/>}>
    <Route index element = {<Home/>} />
    <Route path="search" element = {<Search/>}/>
  </Route>
)

const router = createBrowserRouter(routes);

function App() {
  return (<RouterProvider router={router}/>)
}

export default App
