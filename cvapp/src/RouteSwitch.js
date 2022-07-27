import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { Form } from "./components/Form";


export const RouteSwitch = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Form />} />
            <Route path="/cv" element = {<App />} />
        </Routes>
    </BrowserRouter>
  )
}
