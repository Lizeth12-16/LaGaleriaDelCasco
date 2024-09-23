import React from 'react';

import '../css/header.css';
import '../css/main.css';
import '../css/footer.css';
import Galeria from './Galeria';

/* AQUI INICIA FUNCIONES MADRES */
function Header() {
  return (
    <header className="padre_header">
      <HeaderInformativo />
      <HeaderPrimerBarraNav/>
      <HeaderSegundaBarraNav/>
    </header>    
  );
}

function Main() {
  return (
    <main>
      <Categorias/>
      <Galeria/>
      <EventosNovedades/>
      <SeccionInfor/>
      <AcercaDe/>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <BarraInformativa1/>
      <Derechos/>
    </footer>
  );
}

/* AQUI FINALIZA FUNCIONES MADRES */


/* AQUI INICIA FUNCIONES DE HEADER */
function HeaderInformativo() {
  return (
    <div className="fondo_informativa">
        <div className="hijo_header"> {/* Aqui inicia barra informativa */}
          
          <div className="nietos"> {/* inicio icono camion */}
            <img className="iconos" src="img/camion.png" alt="icono camion"/>
            <p className="parrafo_header">Envíos Seguros</p>
          </div> {/* fin icono camion */}
    
          <div className="nietos"> {/* inicio icono devolucion */}
            <img className="iconos" src="img/devoluciones.png" alt="icono camion"/>
            <p className="parrafo_header">Devolución 30 Días Gratis</p>
          </div> {/*} fin icono devolucion */}
    
          <div className="nietos"> {/* inicio icono garantia*/}
            <img className="iconos" src="img/garantia.png" alt="icono camion"/>
            <p className="parrafo_header">El mejor Precio Garantizado</p>
          </div> {/* fin icono garantia*/}
            
        </div> {/* Aqui finaliza barra informativa */}
      </div>
  )
}

function HeaderPrimerBarraNav() {
  return (
    <nav className="navegacion"> {/*aqui empieza primer barra navegación*/}
      
      {/* incio boton de logo*/}
      <div className="nieto_header">
        <a href="index.html">
          <img className="iconos" src="/img/logo_letras.jpg" alt="Logo de la Tienda"/>
        </a>
      </div>
      {/* fin boton de logo */}

      <div className="nieto_header"> 
        <form action="https://www.google.com/search" method="get"> {/* Inicio barra de busqueda */}
          
          <div className="search-container">
            <button type="submit" id="search-button">
              <img src="/img/lupa.png" alt="Buscar"/>
            </button>
            <input type="text" id="search-input" name="q" placeholder="Buscar..." />

            <button type="button" id="clear-button">
              <img src="/img/borrar.png" alt="Limpiar"/>
            </button>
          </div>

        </form> {/* fin barra de busqueda */ }
      </div>

      {/* incio boton de favorito */}
      <div className="nieto_header"> 
        <a className="buscar" href="#">
          <img className="icono_nav" src="/img/favorito.png" alt="icono favoritos"/>
          FAVORITOS
        </a>
      </div>
      {/* fin boton de favorito */}

      {/* incio botón de perfil */}
      <div className="nieto_header">
        <a id="open-modal" className="buscar" href="Login">
          <img className="icono_nav" src="img/avatar.png" alt="icono avatar" />
          CUENTA
        </a>
      </div>
      {/* fin boton perfil */}

      <div className="nieto_header"> {/* incio boton de carrito */}
        <a className="buscar" href="#">
          <img className="icono_nav" src="img/carrito-de-compras.png" alt="icono carrito"/>
          CARRITO
        </a>
      </div> {/* fin boton de carrito */}

    </nav> /*aqui empieza primer barra navegación*/
  );
}

function HeaderSegundaBarraNav() {
  return (
    <nav className="menu"> {/* aqui inicia segunda barra navegacion */}
      <a className="menu_hijo" href="cascos.html">CASCOS</a>
      <a className="menu_hijo" href="#">EQUIPACION DE CARRETERA</a>
      <a className="menu_hijo" href="#">ACCESORIOS DE MOTO</a>
      <a className="menu_hijo" href="#">COMBOS</a>
      <a className="menu_hijo" href="#">OUTLET</a>
    </nav>
  );
}
/* AQUI FINALIZA FUNCIONES DE HEADER */


/* AQUI INICIA FUNCIONES DE MAIN */
function Categorias() {
  return (
    <section className="categories"> {/* aqui inicia categorias */}

    <div className="category">
      <a className="link_categorias" href="cascos.html">
        <img src="/img/casco2.png" alt="Descripción de la imagen"/>
        <p className="parrafo_categorias">CASCOS</p>
      </a>
    </div>

    <div className="category">
      <a className="link_categorias" href="#">
        <img src="/img/guantes.png" alt="Descripción"/>
        <p className="parrafo_categorias">GUANTES</p>
      </a>
    </div>

    <div className="category">
      <a className="link_categorias" href="#">
        <img src="/img/chaqueta.png" alt="descripcion"/>
        <p className="parrafo_categorias">CHAQUETAS</p>
      </a>
    </div>

    <div className="category">
      <a className="link_categorias" href="#">
        <img src="/img/pantalon.png" alt="Productos Impermeables"/>
        <p className="parrafo_categorias">IMPERMEABLES</p>
      </a>
    </div>

    <div className="category">
      <a className="link_categorias" href="#">
        <img src="/img/candado.png" alt="Descripción"/>
        <p className="parrafo_categorias">ACCESORIOS</p>
      </a>
    </div>
    <div className="category">
      <a className="link_categorias" href="#">
        <img src="/img/descuento.png" alt=""/>
        <p className="parrafo_categorias">DESCUENTOS</p>
      </a>
    </div>
  </section> /* aqui termina categorias */
  );
}

function EventosNovedades() {
  return (
    <section className="eventos-novedades">
      <h2 className='oswald-eventos'>EVENTOS - NOVEDADES</h2>
      <div className="eventos-container">
        <div className="evento">
          <img src="./img/Livial.png" alt="Descripción del evento 1"/>
          <h3>Lival MC1 Pro, el casco de moto inteligente con cámara integrada</h3>
          <p>2024-04-10 - Reseñas y Pruebas</p>
          <p>Así es el casco Lival MC1 Pro, un casco de moto inteligente con cámara integrada...</p>
          <a href="https://www.motocard.com/blog/reviews/cascos/livall-mc1-pro-casco-moto-con-camara-integrada-aviso-dgt-precio-opiniones/">Seguir leyendo...</a>
        </div>
        <div className="evento">
          <img src="./img/concentracion.png" alt="Descripción del evento 2"/>
          <h3>Calendario de concentraciones moto en España 2024</h3>
          <p>2024-04-06 - Planeta Motero</p>
          <p>Te ofrecemos las fechas de las principales concentraciones y rutas...</p>
          <a href="https://www.motocard.com/blog/planeta-motero/">Seguir leyendo...</a>
        </div>
        <div className="evento">
          <img src="./img/cascoscomp.png" alt="Descripción del evento 3"/>
          <h3>Los 7 mejores cascos de moto por menos de 200 euros</h3>
          <p>2024-04-05 - Comparativas y Rankings</p>
          <p>¿Qué casco de moto puedo comprar por 200 euros? Te lo contamos en este Top 7...</p>
          <a href="https://www.motocard.com/blog/comparativas-y-rankings/cascos/los-7-mejores-cascos-de-moto-por-menos-de-200-euros/">Seguir leyendo...</a>
        </div>
      </div>
    </section>
  );
}

function SeccionInfor() {
  return (
    <section className="newsletter">
      <h2>SUSCRIBETE EN NUESTRA TIENDA Y CONSIGUE HASTA UN 15% EXTRA PARA TU PRIMERA COMPRA</h2>
      <p>NOVEDADES, CODIGOS SECRETOS, OFERTAS ¡NO TE PIERDAS NADA!</p>
      <form action="#">
        <input type="email" placeholder="Correo Electrónico" required/>
        <button type="submit">Suscribirse</button>
      </form>
      <p>Al registrarte en la tienda aceptas nuestra política de privacidad y nos daspermiso para enviarte correos comerciales. Consulta las condiciones del cupónen el mail que recibirás cuando te suscribas.</p>
    </section>
  );
}

function AcercaDe() {
  return (
    <section className="acerca">
      <h1 className='oswald-acerca'>Tienda de cascos, ropa y accesorios de moto</h1>
      <p>En la nueva web encontrarás el mayor stock en venta online de accesorios y equipación paramoto. Nuestra máxima garantía es la confianza que han depositado en nosotros las mejoresmarcas. Disponemos de ofertas, novedades, avances y ediciones limitadas de <strong> AGV</strong>, siempre con precio mínimo garantizado y con el máximo servicio y rapidez en la entrega. Todo para que ames y practiques el motociclismo con la mayor seguridad y comodidad posible. Encontraras los mejores <strong> cascos, chaquetas, guantes y botas de carretera </strong> , tanto si practicas turismo de larga distancia como si vas por ciudad.</p>
    </section>
  );
}

/* AQUI FINALIZA FUNCIONES DE MAIN */

/* AQUI INICIA FUNCIONES DE FOOTER */

function BarraInformativa1() {
  return(
    <div className="footer-container">
      <div className="footer-logo">

        <img src="/img/logo.png" alt="Logo de la Galería del Casco" /> 
        <p className='parrafo'>
          LA GALERIA DEL CASCO<br/>
          AV. CARACAS #17 - 47, 51<br/>
          BOGOTÁ, DISTRITO ESPECIAL, COLOMBIA<br/>
          INFO-TIENDA@GMAIL.COM<br/>
        </p>

        <p className='siguenos'>¡SÍGUENOS!</p>

        <div className="social-media">
          <img src="./img/facebook.png" alt="Facebook"></img>
          <img src="./img/instagram.png" alt="Instagram"></img>
          <img src="./img/youtube.png" alt="YouTube"></img>
        </div>
      </div>


      <div className="footer-section">
          <h3>MOTORISTA</h3>
            <ul>
              <li>CASCOS</li>
              <li>CHAQUETAS</li>
              <li>PANTALONES</li>
              <li>GUANTES</li>
              <li>BOTAS</li>
              <li>MONOS</li>
              <li>PROTECCIONES</li>
              <li>TÉRMICOS Y CONFORT</li>
            </ul>
        </div>
        <div className="footer-section">
            <h3>MOTO</h3>
            <ul>
              <li>PLÁSTICOS MOTO</li>
              <li>EQUIPAJE</li>
              <li>ANTIRROBOS</li>
              <li>FILTROS AIRE</li>
              <li>ELECTRÓNICA</li>
              <li>LIMPIEZA</li>
              <li>MANTENIMIENTO</li>
            </ul>
        </div>
        <div className='footer-section'>
          <h3>NOSOTROS</h3>
          <ul>
            <li>QUIENES SOMOS</li>
            <li>CONTACTANOS</li>
            <li>PRECIOS GARANTIZADOS</li>
            <li>REGISTRO DE USUARIOS</li>
            <li>TARJETA REGALO</li>
            <li>PREGUNTAS</li>
            <li>UBICACIÓN</li>
          </ul>
        </div>
    </div>
  );
}

function Derechos() {
  return (
    <div className="footer-legal">
        <p>© LA GALERIA DEL CASCO. TODOS LOS DERECHOS RESERVADOS |
          <a href="#">TÉRMINOS Y CONDICIONES</a> |
          <a href="#">AVISO LEGAL</a> |
          <a href="#">POLÍTICA DE PRIVACIDAD</a> |
          <a href="#">POLÍTICA DE COOKIES</a> |
           © 2024
        </p>
      </div>
  );
}

function App () {
  return (
    <div className="App">
      <Header/>
      
      <Main/>
      <Footer/>
    </div>

  );
}


export default App;