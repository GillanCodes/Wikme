import {BrowserRouter, Routes, Route} from "react-router-dom";
import Page from "../Page";
import HomePage from "../HomePage";
import Editor from "../Wiki/Editor/Editor";
import Auth from "../Auth/Auth";
import MainMenu from "../MainMenu";
import Wikis from "../Wiki/Wikis";
import Wiki from "../Wiki/Wiki";

export default function index() {
  return (
    <BrowserRouter>
        <MainMenu />
        <Routes>
            <Route path="/" Component={HomePage} />
            <Route path="/auth" Component={Auth} />
            <Route path="/page" Component={Page} />
            <Route path="/wikis" Component={Wikis} />
            <Route path="/wiki/:id" Component={Wiki} />
            <Route path="/ed" Component={Editor} />

        </Routes>
    </BrowserRouter>
  )
}
