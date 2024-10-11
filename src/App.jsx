import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import BlogPost from "./page/BlogPost";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:slug" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
