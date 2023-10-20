
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";


const App = () => (

  <Router>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      {/* other react routes */}
    </Routes>
  </Router>

)

export default App;