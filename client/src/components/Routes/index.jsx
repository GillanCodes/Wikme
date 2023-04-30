import {BrowserRouter, Routes, Route} from "react-router-dom";
import Page from "../Page";
import HomePage from "../HomePage";
import Editor from "../Editor/Editor";
import Auth from "../Auth/Auth";

export default function index() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" Component={HomePage} />
            <Route path="/auth" Component={Auth} />
            <Route path="/page" Component={Page} />
            <Route path="/ed" Component={Editor} />

        </Routes>
    </BrowserRouter>
  )
}
