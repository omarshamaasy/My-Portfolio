import { Route, Routes } from "react-router-dom";
import Home from "./assets/pages/Home";
import ProjectDetails from "./assets/pages/ProjectDetails";


function App() {
  return (

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ProjectDetails" element={<ProjectDetails />} />
      </Routes>
  )
}

export default App;