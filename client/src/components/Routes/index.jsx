import {BrowserRouter, Routes, Route} from "react-router-dom";
import Page from "../Page";
import HomePage from "../HomePage";
import Auth from "../Auth/Auth";
import MainMenu from "../MainMenu";
import MyWikis from "../Wiki/MyWikis";
import Wiki from "../Wiki/Wiki";
import Profile from "../User/Profile";

export default function index() {
  return (
    <BrowserRouter>
        <MainMenu />
        <Routes>
            <Route path="/" Component={HomePage} />
            <Route path="/auth" Component={Auth} />
            <Route path="/page" Component={Page} />
            <Route path="/wiki/:id" Component={Wiki} />
            
            <Route path="/me/wikis" Component={MyWikis} />
            <Route path="/me/profile" Component={Profile} />

        </Routes>
    </BrowserRouter>
  )
}
