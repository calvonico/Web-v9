import './timeline.css';
import './reveal.css';
import { useTranslation } from 'react-i18next';

const Timeline = () => {
    const { t } = useTranslation();

    function reveal() {
        var reveals = document.querySelectorAll(".reveal");
      
        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 150;
      
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          // } else {
           // reveals[i].classList.remove("active"); 
          }
        }
      }
      
      window.addEventListener("scroll", reveal);


    return (



        <div className="laboral">
            <div className="container">

                <div className='py-4'>
                    <h2 className='verde'>{t('tituloexp')}</h2>
                </div>

                <div className="timeline-desktop">
                    <div className="timeline__component timeline__component--bg reveal fade-left">
                        <h2 className="timeline__title">Senior Specialist &ndash; Ceibo Digital (USA)</h2>
                        <p className="timeline__paragraph"> {t('experiencia1')}</p>
                    </div>
                    <div className="timeline__middle">
                        <div className="timeline__point"></div>
                    </div>

                    <div className="timeline__component">
                        <div className="timeline__date">2021 - {t('actual')}</div>
                    </div>
                    
                    
                    <div className="timeline__component">
                        <div className="timeline__date timeline__date--right">2021 - 2022</div>
                    </div>
                    <div className="timeline__middle">
                        <div className="timeline__point"></div>
                    </div>
                    <div className="timeline__component timeline__component--bg reveal fade-right">
                        <h2 className="timeline__title">Senior Visual Designer &ndash; PayPal (USA)</h2>
                        <p className="timeline__paragraph">
                            {t('experiencia2')}
                        </p>
                    </div>
                    
                    <div className="timeline__component timeline__component--bg reveal fade-right">
                        <h2 className="timeline__title">Senior Digital Designer &ndash; Despegar (ARG)</h2>
                        <p className="timeline__paragraph">
                        {t('experiencia3')}
                        </p>
                    </div>
                    <div className="timeline__middle">
                        <div className="timeline__point"></div>
                    </div>
                    <div className="timeline__component">
                        <div className="timeline__date">2017 - 2021</div>
                    </div>
                    
                    
                    <div className="timeline__component">
                        <div className="timeline__date timeline__date--right">2014 - 2017</div>
                    </div>
                    <div className="timeline__middle">
                        <div className="timeline__point"></div>
                    </div>
                    <div className="timeline__component timeline__component--bg reveal fade-left">
                        <h2 className="timeline__title">Digital Designer &amp; Email developer &ndash; Wunderman (ARG)</h2>
                        <p className="timeline__paragraph">
                            {t('experiencia4')}
                        </p>
                    </div>
                    
                    <div className="timeline__component timeline__component--bottom timeline__component--bg reveal fade-right">
                        <h2 className="timeline__title">Email Marketing Manager &ndash; emBlue (ARG)</h2>
                        <p className="timeline__paragraph">
                            {t('experiencia5')}
                        </p>
                    </div>
                    <div className="timeline__middle">
                        <div className="timeline__point"></div>
                        <div className="timeline__point timeline__point--bottom"></div>
                    </div>
                    <div className="timeline__component timeline__component--bottom">
                        <div className="timeline__date ">2010 - 2013</div>
                    </div>
                    
                    


                </div>



                <div className="row div-mobile">
                    <div className="col-md-6 mx-auto">
                    
                        
                        <ul className="timeline-mobile">
                            <div className="fechas">2021 - {t('actual')}</div>
                            <li className="timeline-item">
                                <div className="timeline-arrow"></div>
                                <h2 className="mb-0 titulo">Senior Specialist &ndash; Ceibo Digital (USA)</h2>
                                <p className="descripcion"> {t('experiencia1')}</p>
                            </li>

                            <div className="fechas">2021 - 2022</div>
                            <li className="timeline-item">
                                <div className="timeline-arrow"></div>
                                <h2 className="mb-0 titulo">Senior Visual Designer &ndash; PayPal (USA)</h2>
                                <p className="descripcion"> {t('experiencia2')}</p>
                            </li>
                            
                            <div className="fechas">2017 - 2021</div>
                            <li className="timeline-item ">
                                <div className="timeline-arrow"></div>
                                <h2 className=" mb-0 titulo">Senior Digital Designer &ndash; Despegar (ARG)</h2>
                                <p className="descripcion"> {t('experiencia3')}</p>
                            </li>

                            <div className="fechas">2014 - 2017</div>
                            <li className="timeline-item ">
                                <div className="timeline-arrow"></div>
                                <h2 className="mb-0 titulo">Digital Designer &amp; Email developer &ndash; Wunderman (ARG)</h2>
                                <p className="descripcion"> {t('experiencia4')}</p>
                            </li>

                            <div className="fechas">2010 - 2013</div>
                            <li className="timeline-item ">
                                <div className="timeline-arrow"></div>
                                <h2 className="mb-0 titulo">Email Marketing Manager &ndash; emBlue (ARG)</h2>
                                <p className="descripcion"> {t('experiencia5')}</p>
                            </li>
                        </ul> 
                    </div>
                </div>

                {/* <div className="text-center pt-5">
                    <a href="cv/CV22_web.pdf"><button className='btn boton-verde'>{t('curriculum')}</button></a>    
                </div>  */}
                
            </div>
        </div>
        
        
    );
}
 
export default Timeline;