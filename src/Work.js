import { useState } from "react";
import { motion } from "framer-motion";
import data from "./data";
import { useTranslation } from "react-i18next";

const Work = () => {
  const [noOfElement, setnoOfElement] = useState(4);
  const dataElements = data.cardData.length;

  const loadMore = () => {
    setnoOfElement(noOfElement + 3);
  };
  // console.log("data",noOfElement, data.cardData.length);



  
  const { t } = useTranslation();

  const slice = data.cardData.slice(0, noOfElement);
  return (
    
    <div className="trabajos">
      <main role="main">
        

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
        <div className="pb-4">
          <div className="container">
            <div className="row">
              <div className="col-md-10">
                <h2 className="verde">{t("titulowork")}</h2>
                <p className="notfound">
                  {t("parrafowork")}
                </p>
              </div>
            </div>
          </div>
        </div>

          <div className="album ">
            <div className="container">
              <div className="row ">

                {/* https://via.placeholder.com/600x380?text=Soluciones+IM+WIP */}
                {/* <div className="col-md-4 fade-in">
                  <div className="card mb-4 shadow-sm">
                        <div class="backgroundEffect"></div>
                          <div className="pic">
                            <img
                              className="card-img-top"
                              src="/img/teengo-600x380.gif"
                              alt="Works"
                            />
                          </div>
                          <div className="card-body">
                            <h3>TeenGo</h3>
                           
                           
                            <div className="d-flex justify-content-between align-items-center">
                              <button
                                
                                type="button"
                                className="btn btn__work disabled"
                              >
                                Work in progress
                              </button>
    
                              <small className="text-muted">UI/UX</small>
                            </div>
                          </div>
                      </div>
                </div> */}
                    

                {slice.map ((item, index) => {
                  return (
                    <div className="col-md-6 fade-in" key={index}>                      
                      {/* <div className="card mb-4 shadow">
                        <div class="backgroundEffect"></div>
                          <div className="pic">
                          <a
                                href={item.link}
                                target="_blank"
                                rel="noreferrer"
                              >
                            <img
                              className="card-img-top"
                              src={item.img}
                              alt="Works"
                            />
                            </a>
                          </div>
                          <div className="card-body">
                            <h3>{item.title}</h3> */}
                            {/* <p className="card-text">
                              {item.desc}
                            </p> */}
                            {/* <div className="d-flex justify-content-between align-items-center">
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noreferrer"
                                type="button"
                                className="btn btn__work"
                              >
                                {t('vertrabajo')}
                              </a>
    
                              <small className="text-muted">{item.muted}</small>
                            </div>
                          </div>
                      </div> */}
                      <div className="mb-5 gap">
                        <div class="backgroundEffect"></div>
                          <div className="card pic shadow mb-4">
                          <a
                                href={item.link}
                                target="_blank"
                                rel="noreferrer"
                              >
                            <img
                              className="card-img-top"
                              src={item.img}
                              alt="Works"
                            />
                            </a>
                          </div>
                          <div className="notfound">
                            <h4>{item.title}</h4>
                            <p className="card-text">
                              {item.desc}
                            </p>
                            
                          </div>
                      </div>
                    </div>
                    )
                 })}
               

                

                <div className="text-center pt-5">
                 {noOfElement <= dataElements &&
                  <button className="btn boton-verde"
                    onClick={() => loadMore()}
                  >
                    {t('cargarmas')}
                  </button>
                  }
                </div>



              </div>
            </div>
          </div>


          
        </motion.div>
      </main>
    </div>
    // </motion.div>
  );
};




export default Work;
