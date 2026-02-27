import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Ryan26HatesKatelin from "./pages/Ryan26HatesKatelin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ryan26hateskatlin" element={<Ryan26HatesKatelin />} />
    </Routes>
  );
}

export default App;
