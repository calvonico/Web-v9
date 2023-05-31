import { Icon } from '@iconify/react';

const Footer = () => {
    return ( 
        <div className="footer">
            <div className="container">
                <div className="footer-row">
                    <div className="footer-left">
                        <span className="footer-text">Nico Calvo © { new Date().getFullYear() } &ndash; v9</span>
                    </div>
                    <div className="footer-right">
                    <div className="iconos">
                        <a href="mailto:nico@nicocalvo.com" target={'_blank'} rel={'noreferrer'}><Icon className='redes' icon="bi:envelope-fill" color='#fff' height="24" /></a>
                        <a href="https://linkedin.com/in/nicolascalvo" target={'_blank'} rel={'noreferrer'}><Icon className='redes' icon="bi:linkedin" color='#fff' height="20" /></a>
                        <a href="https://behance.net/calvonico" target={'_blank'} rel={'noreferrer'}><Icon className='redes' icon="bi:behance" color='#fff' height="24" /></a>
                        {/* <a href="https://instagram.com/calvonico" target={'_blank'} rel={'noreferrer'}><Icon className='redes' icon="bi:instagram" color='var(--redsocial-instagram)' height="28" /></a> */}
                        {/* <a href="https://twitter.com/calvonico" target={'_blank'} rel={'noreferrer'}><Icon className='redes' icon="bi:twitter" color='var(--redsocial-twitter)' height="28" /></a> */}
                        {/* <a href="https://twitch.tv/calvonico" target={'_blank'} rel={'noreferrer'}><Icon className='redes' icon="bi:twitch" color='var(--redsocial-twitch)' height="28" /></a> */}
                        
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
        
     );
}
 
export default Footer;