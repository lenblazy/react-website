import PageWrapper from "./components/PageWrapper.jsx";
import Home from "./components/pages/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router";


function App() {
    // const [count, setCount] = useState(0)

    return (
        <PageWrapper>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        </PageWrapper>
    )
}

export default App
