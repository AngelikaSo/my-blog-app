import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import ErrorPage from "./pages/ErrorPage";
import SinglePost from "./pages/SinglePost";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/singlePost" element={<SinglePost />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
