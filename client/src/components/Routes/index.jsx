import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from "../../App";
import Page from "../Page";

export default function index() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" Component={App} />
            <Route path="/page" Component={Page} />
        </Routes>
    </BrowserRouter>
  )
}
