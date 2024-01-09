
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from './components/Landing';
import { Room } from './components/Room';
import BackgroundVideo from "./components/BackgroundVideo";

function App() {

  return (
    <BrowserRouter>
    <BackgroundVideo/>
      <Routes>
        <Route path="/room" element={<Room />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
