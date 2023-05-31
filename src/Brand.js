import { motion } from "framer-motion";
import "./brandstyle.css";
import { useTranslation } from "react-i18next";


const Brand = () => {


  const { t } = useTranslation();

  return (

    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1.2,
        ease: [0.6, -0.05, 0.01, 0.99],
      }}
      exit={{ opacity: 0 }}
    >
      

      <div className="brand">

        <aside className="bd-aside sticky-xl-top text-muted align-self-start mb-3 mb-xl-5 px-2">
          {/* <h2 className="h6 pt-4 pb-3 mb-4 border-bottom">On this page</h2> */}
          <nav className="small" id="toc">
            <ul className="list-unstyled">
              <li className="my-2">
                <button
                  className="btn d-inline-flex align-items-center collapsed border-0"
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  data-bs-target="#guidelines-collapse"
                  aria-controls="guidelines-collapse"
                >
                  Guidelines
                </button>
                {/* Si quiero que ese cerrado, tengo que agregar un "collapse" como clase en el ul y poner el false en el "aria-expanded" de arriba */}
                <ul
                  className="list-unstyled ps-3 "
                  id="guidelines-collapse"
                >
                  <li>
                    <a
                      className="d-inline-flex align-items-center rounded text-decoration-none"
                      href="#brandlogo"
                    >
                      Brand &amp; Logo
                    </a>
                  </li>
                  <li>
                    <a
                      className="d-inline-flex align-items-center rounded text-decoration-none"
                      href="#color"
                    >
                      Color
                    </a>
                  </li>
                  <li>
                    <a
                      className="d-inline-flex align-items-center rounded text-decoration-none"
                      href="#typography"
                    >
                      Typography
                    </a>
                  </li>
                </ul>
              </li>
              {/* <li className="my-2">
                <button
                  className="btn d-inline-flex align-items-center collapsed border-0"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                  data-bs-target="#forms-collapse"
                  aria-controls="forms-collapse"
                >
                  Forms
                </button>
                <ul className="list-unstyled ps-3 collapse" id="forms-collapse">
                  <li>
                    <a
                      className="d-inline-flex align-items-center rounded text-decoration-none"
                      href="#overview"
                    >
                      Overview
                    </a>
                  </li>
                  <li>
                    <a
                      className="d-inline-flex align-items-center rounded text-decoration-none"
                      href="#disabled-forms"
                    >
                      Disabled forms
                    </a>
                  </li>
                  <li>
                    <a
                      className="d-inline-flex align-items-center rounded text-decoration-none"
                      href="#sizing"
                    >
                      Sizing
                    </a>
                  </li>
                </ul>
              </li> */}
            </ul>
          </nav>
        </aside>
        <div className="bd-cheatsheet container-fluid ">
          <section id="guidelines">
            <article className="my-3">
              <div className="d-flex justify-content-between align-items-center mt-5 mb-3 mt-xl-0 mb-xl-2">
                <h1>Borealis</h1>
                <small className="text-muted">LAST UPDATED: JUNE 2022</small>
              </div>
              <div className="mb-4">
              {t('borealis')}
              </div>
            </article>
            <article className="my-3" id="brandlogo">
              <div className="bd-heading align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
                <h2>Brand &amp; logo</h2>
              </div>

              <div>
                {t('brandlogo')}
                
              </div>
              <div className="text-center mt-4 logonc ">
                <img
                  src="img/logo-normal.svg"
                  className="p-4 bg-body rounded-3 img-fluid"
                  // width={"60%"}
                  alt="logo"
                />
              </div>
              <div className="pt-5" id="spacing">
                <h3>Spacing</h3>
                <div>
                  {t('bl-espacio')}
                  
                </div>
                <div className="text-center mt-4">
                  <img
                    src="img/Logo_spacing.png"
                    alt="logo"
                    className="p-4 bg-body rounded-3 img-fluid"
                  />
                </div>
              </div>

              <div className="pt-5" id="exclusion">
                <h3>Exclusion zone</h3>
                <div>
                  <p>
                    {t('bl-exclusion')}
                    
                  </p>
                </div>
                <div className="text-center mt-4">
                  <img
                    src="img/Logo_exclusion.png"
                    alt="logo"
                    className="p-4 bg-body rounded-3 img-fluid"
                  />
                </div>

                <div className="pt-5" id="isotipo">
                  <h3>Isotipo</h3>
                  <div>
                    <p>
                      {t('bl-isotipo')}
                    </p>
                  </div>
                  <div className="text-center mt-4">
                    <img
                      src="img/Badge_exclusion.png"
                      className="p-4 bg-body rounded-3 img-fluid"
                      alt="badge"
                    />
                  </div>
                </div>

                <div className="pt-5" id="coloroptions">
                  <h3>Color options</h3>
                  <div>
                    <p>
                      {t('bl-coloroptions')}
                    </p>
                  </div>
                  <div className="text-center mt-4">
                    <img
                      src="img/Color-options.png"
                      className="rounded-3 img-fluid" width={"90%"}
                      alt="colors"
                    />
                  </div>
                </div>
              </div>
            </article>

            <article className="my-3" id="color">
              <div className="bd-heading align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
                <h2>Color</h2>
              </div>

              <div>
                {t('gui-color')}
                La paleta de colores está inspirada en los colores de la Aurora Boreal en sus tonos verdes, los cielos oscuros y los degradados que se mezclan con los distintos tonos claros y oscuros.
              </div>
              <div className="row mt-4 justify-content-center">
                <div className="col-md-5 p-3 m-2 text-white rounded-3" style={{background: "#339a99"}}>
                  <h4>Verde principal</h4>
                  <p>#339a99</p>
                </div>
                <div className="col-md-5 p-3 m-2 text-white rounded-3" style={{background: "#287573"}}>
                  <h4>Verde oscuro</h4>
                  <p>#287573</p>
                </div>
                <div className="col-md-5 p-3 m-2 text-white rounded-3" style={{background: "#0D2538"}}>
                  <h4>Negro noche</h4>
                  <p>#0D2538</p>
                </div>
                <div className="col-md-5 p-3 m-2 text-white rounded-3" style={{background: "#153954"}}>
                  <h4>Azul noche</h4>
                  <p>#153954</p>
                </div>
                <div className="col-md-5 p-3 m-2 text-white degrade1 rounded-3">
                  <h4>Boreal 1</h4>
                  <p>#49B6AE 0%, #287573 100%</p>
                </div>
                <div className="col-md-5 p-3 m-2 text-white degrade2 rounded-3">
                  <h4>Boreal 2</h4>
                  <p>#339A99 20%, #49B6AE 100%</p>
                </div>
                
              </div>
              
            </article>

            <article className="my-3" id="typography">
              <div className="bd-heading align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
                <h2>Typography</h2>
              </div>

              <div>
                <p>
                  {t('gui-typo')} 
                </p>
              </div>
              <div className="pt-3">
                <h5>Biko</h5>
                <img src="img/typo_Biko-regular.png" className="img-fluid bg-body rounded-3 p-4" alt="" />
              </div>
              <div className="pt-3">
                <h5>Rubik regular</h5>
                <img src="img/typo_Rubik-regular.png" className="img-fluid bg-body rounded-3 p-4" alt="" />
              </div>
              <div className="pt-3">
                <h5>Rubik bold</h5>
                <img src="img/typo_Rubik-bold.png" className="img-fluid bg-body rounded-3 p-4" alt="" />
              </div>
              
              
            </article>
          </section>

          {/* <section id="forms">
            <article className="my-3" id="overview">
              <div className="bd-heading align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
                <h2>Overview</h2>
              </div>
              <div>texto</div>
            </article>
          </section> */}
        </div>
      </div>
    </motion.div>
  );
};

export default Brand;
