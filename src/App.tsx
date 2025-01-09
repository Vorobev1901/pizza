import "./App.css";
import Header from "@/components/header";
import {Separator} from "@/components/ui/index";
import { Route, Routes } from "react-router-dom";
import NotFound from "@/components/NotFound";
import Home from "@/components/Home";

function App() {
  return (
    <>
    <div>
      <Header />
      <Separator />
    </div>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
