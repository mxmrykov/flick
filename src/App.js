import { Routes,Route } from "react-router-dom";
import DefineRoute from "./ui/ts/screens/external/DefineRoute.tsx";
import Auth from "./ui/ts/screens/external/Auth.tsx";
import Home from "./ui/ts/screens/internal/Home.tsx";

export default function App() {
  return <Routes>
    <Route path="/" element={<DefineRoute/>} />
    <Route path="/auth" element={<Auth/>}/>
    <Route path="/home" element={<Home/>}/>
  </Routes>
}
