import "./App.css";
import {Separator,} from "@/components/ui/index";
import { Route, Routes } from "react-router-dom";
import NotFound from "@/components/NotFound";
import {Header, Home, Product} from "@/components/index";

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
        <Route path="/product/:id" element={<Product />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
