import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from "./components/Home"
import About from './components/About'

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/vans" element={<About />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />,)
