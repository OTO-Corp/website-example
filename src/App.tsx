import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import Home from "./pages/Home";
import { ModalProvider } from "./providers/ModalProvider";

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-gray-100">
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
                <Toaster />
                <ModalProvider />
            </div>
        </Router>
    );
}

export default App;
