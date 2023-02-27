import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import About from "../screen/about";
import Home from "../screen/home";
import Detail from "../screen/detail";
import Program from "../screen/program";
import SingleDetail from "../screen/singledetail";

export default function AppRouter() {
    return (
        <>
            <BrowserRouter>
                <nav className="mt-2   bg-primary p-2">
                    <Link className="m-5 text-decoration-none text-white" to="/home">Home Page</Link>
                    <Link className="m-5 text-decoration-none text-white" to="/about">About Page</Link>
                    <Link className="m-5 text-decoration-none text-white" to="/Detail">Details</Link>
                    <Link className="m-5 text-decoration-none text-white" to="/program">Program</Link>
                </nav>
                <Routes>
                    <Route path="home" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="Detail" element={<Detail />} />
                    <Route path="program" element={<Program />} />
                    <Route path="singledetail/:id" element={<SingleDetail />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}