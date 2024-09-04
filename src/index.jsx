import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, RouterProvider, createBrowserRouter, createRoutesFromElements, Routes, Route } from 'react-router-dom'

import Home from "./pages/Home"
import Login, {loader as loginLoader, action as loginAction} from './components/Login'
import About from './pages/About'
import Vans, { loader as vansLoader } from './pages/Vans/Vans'
import VanDetail, { loader as vanDetailLoader } from './pages/Vans/VanDetail'
import HostLayout from './pages/Host/HostLayout'
import Income from './pages/Host/Income'
import HostVans, { loader as hostVansLoader } from './pages/Host/HostVans'
import HostVanDetails, { loader as hostVanDetailLoader } from './pages/Host/HostVanDetail'
import Reviews from './pages/Host/Reviews'
import Layout from './components/Layout'
import HostVanPhotos from './pages/Host/HostVanPhotos'
import HostVanPricing from './pages/Host/HostVanPricing'
import HostVanInfo from './pages/Host/HostVanInfo'
import Dashboard from './pages/Host/Dashboard'
import NotFound from './components/NotFound'
import Error from './components/Error'
import { requireAuth } from './utils'

import "./server"

const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} loader={loginLoader} action={loginAction} />
        <Route path="about" element={<About />} />
        <Route path="vans" element={<Vans />} loader={vansLoader} errorElement={<Error />} />
        <Route path="vans/:id" element={<VanDetail />} loader={vanDetailLoader} errorElement={<Error />} />
        <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} loader={async ({request}) => await requireAuth(request)} />
            <Route path="income" element={<Income />} loader={async ({request}) => await requireAuth(request)}  />
            <Route path="vans" element={<HostVans />} loader={hostVansLoader} errorElement={<Error />} />
            <Route path="vans/:id" element={<HostVanDetails />} loader={hostVanDetailLoader} errorElement={<Error />}>
                <Route index element={<HostVanInfo />} loader={async ({request}) => await requireAuth(request)}  />
                <Route path="pricing" element={<HostVanPricing />} loader={async ({request}) => await requireAuth(request)}  />
                <Route path="photos" element={<HostVanPhotos />} loader={async ({request}) => await requireAuth(request)}  />
            </Route>
            <Route path="reviews" element={<Reviews />} loader={async ({request}) => await requireAuth(request)}  />
        </Route>
        <Route path="*" element={< NotFound />} />
    </Route>
))

function App() {
    return (
        <RouterProvider router={router} />
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />,)
