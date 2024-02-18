import '../../style/components/layout/Footer.css';
import React from 'react';
import facebook from "../assets/img/iconos/facebook.png";
import instagram from "../assets/img/iconos/instagram.png";
import tiktok from "../assets/img/iconos/tik tok.png";
import twitter from "../assets/img/iconos/twitter.png";
import youtube from "../assets/img/iconos/youtube.png";

const Footer = (props) => {
    return(<footer>
    <p>Seguinos en nuestras redes:</p>
    <div className='Iconos'>
        <ul>
        <li><a href='https://www.facebook.com/pame.carrizo.5' target="_blank"><img src={facebook} alt= 'facebok'/></a></li>
        <li><a href='https://www.instagram.com/pamela_carrizo/?hl' target="_blank"><img src={instagram} alt= 'instagram'/></a></li>
        <li><a href='https://www.tiktok.com/@pame_carrizo' target="_blank"><img src={tiktok} alt= 'tik tok'/></a></li>
        <li><a href='https://twitter.com/Pamecarrizo24' target="_blank"><img src={twitter} alt= 'twitter'/></a></li>
        <li><a href='https://www.youtube.com/channel/UCVUZhVhnrGPYRH0oLW8sclA' target="_blank"><img src={youtube} alt= 'youtube'/></a></li>
        </ul>
    </div>
    </footer>
    );
}

export default Footer;