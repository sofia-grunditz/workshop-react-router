import { BrowserRouter, Routes, Route } from "react-router-dom"
import songsData from "./data/songs.json"
import Home from "./pages/Home"
import SongInfo from "./pages/SongInfo"

export const App = () => {
  const songs = songsData.songs

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home songs={songs} />} />
        <Route path="/song/:title" element={<SongInfo songs={songs} />} />
      </Routes>
    </BrowserRouter>
  )
}
