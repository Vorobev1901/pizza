import "./App.css";
import {Separator,} from "@/components/ui/index";
import { Route, Routes } from "react-router-dom";
import NotFound from "@/components/NotFound";
import {Header, Home} from "@/components/index";

function App() {
  return (
    <>
    <div>
      <Header />
      <Separator />
    </div>
    <div>
      <Routes>
        <Route path="/pizzas" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
