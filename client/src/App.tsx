import {Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header"
import Compiler from "./pages/Compiler";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./components/theme-provider";
import FullScreen from "./pages/FullScreen";
function App() {
  const location = useLocation();
  return (
    <>
    <ThemeProvider>
    {location.pathname !== "/fullscreen" && <Header />}
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/compiler" element={<Compiler />}/>
      <Route path="/fullscreen" element={<FullScreen />}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
    </ThemeProvider>
    
    </>
  )
}

export default App
