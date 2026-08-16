import { BrowserRouter, Route, Routes } from "react-router-dom";

import Article from "./routes/article/Article";
import Editor from "./routes/editor/Editor";
import ArticleList from "./routes/landing/ArticleList";
import Layout from "./routes/Layout";
import LoginRegister from "./routes/login/LoginRegister";
import Logout from "./routes/logout/Logout";
import Profile from "./routes/profile/Profile";
import Settings from "./routes/settings/Settings";

const App = () => (
  <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" index element={<ArticleList />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/editor/:slug" element={<Editor />} />
        <Route path="/login" element={<LoginRegister />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/profile/:username/favorites" element={<Profile />} />
        <Route path="/register" element={<LoginRegister />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/:slug" element={<Article />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
