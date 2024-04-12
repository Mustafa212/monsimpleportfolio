import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ProjectContent1 from "./components/ProjectContent1";
import ProjectContent2 from "./components/ProjectContent2";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} >
            <Route path="firstcontent" element={<ProjectContent1 />} />
            <Route path="secondcontent" element={<ProjectContent2 />} />
            <Route path="othercontent" element={<div style={{color:"#7a54b6", fontSize:"1.5em"}}> OtherContent maybe later :)</div> } />

          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;


// my main colors sheme
// 1-#9C79D2 purple
// 2-#E4EDF9 linkwater
// 3-#1D3C5A cello
// 4-#41567C eastbay

//what am using #070f2b

// nerd illustration https://storyset.com/illustration/nerd/bro
