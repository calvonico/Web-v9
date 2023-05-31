import { motion } from "framer-motion";
// import Timeline from "./Timeline";
import { useTranslation } from "react-i18next";
// import ImageLoader from "./ImageLoader";
// import { lazy } from "react";
// import Skills from "./Skills";


const Home = () => {
  //const titulo = 'Viendo si aparece'
  const { t } = useTranslation();

  // const Skills = lazy(() => import ('./Skills'));
  // const Timeline = lazy(() => import ('./Timeline'));


  return (

      <div className="home">
       <div className="css-blurry-gradient"></div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          
        <div className="container bio ">
          
          <section className="intro text-center">
            <h1>
              {t('intro')}
            </h1>
          </section>
          

          <div className="row align-items-center justify-content-center">
            {/* <ImageLoader /> */}
            <div className="col-md-5 arribadetodo">
              
              <div className="biografia">
                <p>{t('newbio')}</p>
              </div>              
            </div>
            <div className="col-md-5 offset-md-1">
              <div className="img-bio">
                <img src="img/new-bio.jpg" className="img-nico" alt="bio" />
              </div>
            </div>
          </div>
          
          
          {/* <div className="shape-blob"></div>
          <div className="shape-blob one"></div>
          <div className="shape-blob two"></div> */}
          {/* <div className="shape-blob three"></div>
          <div className="shape-blob four"></div>
          <div className="shape-blob five"></div>
          <div className="shape-blob six"></div> */}

        </div>



        {/* <div className="habilidades">
          <Skills />
        </div> */}

        {/* <div className="experiencia">
          <Timeline />
        </div> */}
        
        </motion.div>
      </div>
    // </motion.div>
    //<h3>{titulo}</h3>
  );
};

export default Home;
