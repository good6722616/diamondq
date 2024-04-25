import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home8 from "./pages/home8_portfolio";

// import AboutPage from "./pages/innerpages/about";
// import BlogPage from "./pages/innerpages/blog";
// import ContactPage from "./pages/innerpages/contact";
// import PortfolioPage from "./pages/innerpages/portfolio";
// import ServicesPage from "./pages/innerpages/services";
// import SinglePost from "./pages/innerpages/single_post";
// import SingleProject from "./pages/innerpages/single_project";
// import SingleProject2 from "./pages/innerpages/single_project2";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home8 />} />
      </Routes>
    </Router>
  );
}

export default App;
