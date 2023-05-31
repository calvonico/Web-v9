import { lazy, Suspense } from "react";
// import { Route, Switch, useLocation } from "react-router-dom";
import {
  Routes,
  Route,
  useLocation
 } from "react-router-dom";

import Navbar from "./Navbar";

// import Home from "./Home";
// import Social from "./Social";
// import Footer from "./Footer";
// import Work from "./Work";
// import Podcast from "./Podcast";
// import Brand from "./Brand";

import FourZeroFour from "./FourZeroFour";
import { AnimatePresence } from "framer-motion";
import Loading from "./Loading";

function App() {
  const Home = lazy(() => import ('./Home'));
  // const Social = lazy(() => import ('./Social'));
  const Footer = lazy(() => import ('./Footer'));
  const Work = lazy(() => import ('./Work'));
  const Brand = lazy(() => import ('./Brand'));
  const Podcast = lazy(() => import ('./Podcast'));
  const About = lazy(() => import ('./About') ); 
  // const Test = lazy(() => import ('./Test'));

  const location = useLocation();

  return (
      <div className="App">
        
        <Navbar />
        
        <Suspense fallback={<Loading />}>
          <AnimatePresence exitBeforeEnter initial={false}>
            <Routes location={location} key={location.pathname}>
              <Route exact path="/" element={<Home />} />

              <Route path="/about" element={<About />} />
                
              <Route path="/work" element={<Work />} />
                
              <Route path="/brand" element={<Brand />} />
              <Route path="/podcast" element={<Podcast />} />
              {/* <Route path="/test" element={<Test />} /> */}
              <Route path="*" element={<FourZeroFour />} />
            </Routes>
          </AnimatePresence>
          
        </Suspense>
        {/* <div className="social">
        <Suspense fallback={<Loading />}>
          <Social />
        </Suspense>
        </div> */}
        <div id="footer">
        <Suspense fallback={<Loading />}>
          <Footer />
        </Suspense>
        </div>
      </div>
  );
}

export default App;
