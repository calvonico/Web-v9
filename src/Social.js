import { Icon } from '@iconify/react';

const Social = () => {
    return ( 
        <div className='container text-center'>
            
            <div className="iconos">
                <a href="mailto:nico@nicocalvo.com" target={'_blank'} rel={'noreferrer'}><Icon className='redes' icon="bi:envelope-fill" color='var(--redsocial-email)' height="28" /></a>
                <a href="https://linkedin.com/in/nicolascalvo" target={'_blank'} rel={'noreferrer'}><Icon className='redes' icon="bi:linkedin" color='var(--redsocial-linkedin)' height="28" /></a>
                <a href="https://behance.net/calvonico" target={'_blank'} rel={'noreferrer'}><Icon className='redes' icon="bi:behance" color='var(--redsocial-behance)' height="28" /></a>
                {/* <a href="https://instagram.com/calvonico" target={'_blank'} rel={'noreferrer'}><Icon className='redes' icon="bi:instagram" color='var(--redsocial-instagram)' height="28" /></a> */}
                {/* <a href="https://twitter.com/calvonico" target={'_blank'} rel={'noreferrer'}><Icon className='redes' icon="bi:twitter" color='var(--redsocial-twitter)' height="28" /></a> */}
                {/* <a href="https://twitch.tv/calvonico" target={'_blank'} rel={'noreferrer'}><Icon className='redes' icon="bi:twitch" color='var(--redsocial-twitch)' height="28" /></a> */}
                
            </div>
            
        </div>
     );
}
 
export default Social;