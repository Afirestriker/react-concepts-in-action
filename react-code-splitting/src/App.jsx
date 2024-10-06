// eslint-disable-next-line no-unused-vars
import react, { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

const Home    = lazy(() => import("./pages/Home"));
const About   = lazy(() => import("./pages/About"));
const Profile = lazy(() => import("./pages/Profile"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />

                {/* Common Suspense for all routes */}
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/home"    element={ <Home />} />
                        <Route path="/about"   element={ <About/>} />
                        <Route path="/profile" element={ <Profile />} />
                        <Route path="/contact" element={ <Contact />} />

                        <Route path="*" element={<Navigate to="/home" replace />} />
                    </Routes>
                </Suspense>

                {/* Separate Suspense under each route */}
                {/*
                    <Routes>
                        <Route path="/home"    element={ <Suspense fallback={<div>Loading Home...   </div>}> <Home />    </Suspense> } />
                        <Route path="/about"   element={ <Suspense fallback={<div>Loading About...  </div>}> <About/>    </Suspense> } />
                        <Route path="/profile" element={ <Suspense fallback={<div>Loading Profile...</div>}> <Profile /> </Suspense> } />
                        <Route path="/contact" element={ <Suspense fallback={<div>Loading Contact...</div>}> <Contact /> </Suspense> } />

                        <Route path="*" element={<Navigate to="/home" replace />} />
                    </Routes>
                */}
            </BrowserRouter>
        </>
    );
}

export default App;
