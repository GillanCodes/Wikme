import {BrowserRouter, Routes, Route} from "react-router-dom";
import Page from "../Page";
import HomePage from "../HomePage";

export default function index() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" Component={HomePage} />
            <Route path="/page" Component={Page} />
        </Routes>
    </BrowserRouter>
  )
}
