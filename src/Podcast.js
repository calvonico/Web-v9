
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';


const Podcast = () => {

  const { t } = useTranslation();

  return (


    <div className="podcast">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
          <div className="bgPodcast">
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                duration: 1.2,
                ease: [0.6, -0.05, 0.01, 0.99],
                }}
                exit={{ opacity: 0 }}
                >  
                <div className="container">
                    <div className="row justify-content-center ">
                        {/* <div className="datos-podcast d-flex"> */}
                            <div className="col-md-4 text-center mb-5">
                                <div>
                                    <img src="https://nicocalvo.com/images/tiempo-de-fogon-portada.png" alt="podcast"  />
                                </div>
                            </div>
                            <div className="col-md-6 textopodcast">
                                    <h1 className="display-6 fw-bold">
                                        Tiempo de Fogón
                                    </h1>
                                    <p className="mt-4">
                                      {t('podcast-desc')}
                                    </p>
                                    <div className="d-flex mt-5">
                                        <a href="#" target={'_blank'} rel={'noreferrer'}><button className="btn btn-podcast me-3">Ver en YouTube</button></a>
                                        <a href="https://open.spotify.com/show/76Qh4RfixIDxRZc247h0zy" target={'_blank'} rel={'noreferrer'}><button className="btn btn-podcast me-3">Escuchar en Spotify</button></a> <a href="https://podcasts.apple.com/us/podcast/al-fin-viernes/id1530044342?uo=4" target={'_blank'} rel={'noreferrer'}><button className="btn btn-podcast me-3">Apple Podcast</button></a> 
                                    </div>
                            </div>
                        {/* </div> */}
                    </div>
                </div>
            </motion.div>
          </div>
          <div className="reproductor">
          
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <iframe src="https://open.spotify.com/embed/show/76Qh4RfixIDxRZc247h0zy?utm_source=generator&theme=0" width="100%" height="232" frameBorder="0" allowfullscreen="" title="Podcast de Nico" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

                        {/* <iframe src="https://open.spotify.com/embed/show/76Qh4RfixIDxRZc247h0zy?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" title="Podcast de Nico" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

                        <iframe src="https://open.spotify.com/embed/show/76Qh4RfixIDxRZc247h0zy?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" title="Podcast de Nico" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> */}
                    </div>
                    
                </div>
            </div>
          </div>

      </motion.div>
    </div>
  );
};

export default Podcast;
