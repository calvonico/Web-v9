import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { lazy } from "react";

const About = () => {
  const { t } = useTranslation();

  const Skills = lazy(() => import ('./Skills'));
  const Timeline = lazy(() => import ('./Timeline'));

  return (
    <div className="aboutme">
      <div className="css-blurry-gradient"></div>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          ease: [0.6, -0.05, 0.01, 0.99],
        }}
        exit={{ opacity: 0 }}
      >
      {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        > */}
        <div className="container newbio">
          <div className="row align-items-center">
            {/* <ImageLoader /> */}
            <div className="col-md-8">
              <h2 className="verde">{t("aboutme")}</h2>
              <div className="biografia">
                <p>{t("biografia")}</p>
              </div>
            </div>
            {/* <div className="col-md-5 offset-md-1 reveal fade-right">
                <div className="img-bio">
                    <img src="img/new-bio.jpg" className="img-nico" alt="bio" />
                </div>
                </div> */}
          </div>
        </div>

        <div className="mb-5">
          <div className="carrusel-fotos py-4">
            <div className="fotitos rotate-2 shadow">
              <img src="img/fotito3.jpg" className="img-fluid" alt="fotos" />
            </div>
            <div className="fotitos shadow -rotate-2">
              <img src="img/fotito2.jpeg" className="img-fluid" alt="fotos" />
            </div>
            <div className="fotitos shadow rotate-2">
              <img src="img/fotito4.jpg" className="img-fluid" alt="fotos" />
            </div>
            <div className="fotitos shadow -rotate-2">
              <img src="img/fotito1.jpeg" className="img-fluid" alt="fotos" />
            </div>
            <div className="fotitos shadow rotate-2">
              <img src="img/fotito5.JPG" className="img-fluid" alt="fotos" />
            </div>
          </div>
        </div>

        <div className="spacer"></div>

        <div className="habilidades">
          <Skills />
        </div>

        <div className="experiencia">
          <Timeline />
        </div>
      </motion.div>
    </div>
  );
};

export default About;
