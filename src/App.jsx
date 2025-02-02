import PageWrapper from "./components/PageWrapper.jsx";
import Home from "./components/pages/Home.jsx";
import {BrowserRouter, Routes, Route} from "react-router";


function App() {
    // const [count, setCount] = useState(0)

    return (
        <BrowserRouter>
            <PageWrapper>
                <Routes>
                    <Route index element={<Home />} />
                </Routes>

            </PageWrapper>
        </BrowserRouter>
    )
}

export default App
