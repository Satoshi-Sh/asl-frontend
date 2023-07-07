import "./App.css";
import { Route, Routes } from "react-router-dom";
import { About, Challenges, Landing, Login, MyProgress, Signup } from "./pages";

function App() {
  return (
    <div className="App pt-28">
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/myprogress/:id" element={<MyProgress />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
