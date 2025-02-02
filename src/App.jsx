import PageWrapper from "./components/PageWrapper.jsx";
import Home from "./components/pages/Home.jsx";
import {BrowserRouter, Routes, Route} from "react-router";
import About from "./components/pages/About.jsx";


function App() {
    // const [count, setCount] = useState(0)

    return (
        <BrowserRouter>
            <PageWrapper>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                </Routes>

            </PageWrapper>
        </BrowserRouter>
    )
}

export default App
