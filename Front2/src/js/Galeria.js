import React, { useEffect } from 'react';
import Swiper from 'swiper';
import { EffectCoverflow, Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../css/galery.css';

const Galeria = () => {
    useEffect(() => {
        new Swiper(".mySwiper", {
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "auto",
            loop: true,
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 500,
                modifier: 1,
                slideShadows: true,
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            modules: [EffectCoverflow, Navigation, Pagination, Autoplay],
        });
    }, []);

    return (
        <main>
            <h2 className='oswald-eventos'>⚡ RANKING DE LA TEMPORADA ⚡</h2>
            <div className="swiper mySwiper">
                <div className="swiper-wrapper">
                    {[1, 2, 3, 4, 5].map((index) => (
                        <div key={index} className="swiper-slide">
                            <div className="icons">
                                <i className="fa-solid fa-star"></i>
                                <img src="/img/logo.png" alt="Logo" />
                            </div>
                            <div className="product-content">
                                <div className="product-txt">
                                    <span>$600.000</span>
                                    <h3>SH-PRO612DV</h3>
                                    <p className="description">
                                        Casco con spoiler agresivo, ventilación completa y diseño estilizado para mayor comodidad y rendimiento en moto.
                                    </p>
                                </div>
                                <div className="product-img">
                                    <img src="./img/Casco Shaft.png" alt="Casco" />
                                </div>
                            </div>
                            <a href="#" className="btn-1">Comprar</a>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Galeria;
