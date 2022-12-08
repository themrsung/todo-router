import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { Landing } from "../pages/Landing"

const Router = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="home" element={<Home />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default Router
