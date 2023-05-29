import React from 'react';
import x from './Main.css';

function Header() {
  return (
    <header className="header container">
      <nav className="container_top">
        <div className="container_top">
          <img className="logo_encabezado" src="img/logo_trans_1500.png" alt="logo" />
          <div className="btn_nav">
            <button className="button_banner"><a href="principal_main.html">Inicio</a></button>
            <button className="button_banner"><a href="perfil_propio.html">Perfil</a></button>
            <button className="button_banner"><a href="configuracion.html">Configuración</a></button>
          </div>
        </div>
      </nav>
    </header>
  );
}

function ContenedorUno() {
  return (
    <main className="container">
      {'Hola mundo!'}
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <p>Todos los derechos reservados- Enred@ndo @ 2023</p>
    </footer>
  );
}

function Principal() {
  return (
    <div>
      <Header />
      <ContenedorUno />
      <Footer />
    </div>
  );
}

export default Principal;