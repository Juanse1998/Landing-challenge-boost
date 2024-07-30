import React from "react";
import './home.css'; // Puedes mantener este archivo si tienes estilos adicionales, pero Tailwind se encargará del diseño principal

const Home = () => {
  return (
    <div id="home" className="container-header flex flex-col lg:flex-row justify-between items-center lg:items-start p-6 lg:p-12 relative">
      <section className="container-title lg:ml-16 text-center lg:text-left w-full lg:w-1/2 align-center">
        <h4 className="text-4xl lg:text-5xl font-bold mb-6">
          Te ofrecemos la mejor comida
        </h4>
        <p className="text-xl xl:text-base mb-6 mt-6 lg:mt-12">
          Descubre una experiencia culinaria única con platos elaborados con ingredientes frescos y pasión en cada detalle. 
          Nuestro menú está diseñado para satisfacer todos los gustos, desde opciones tradicionales hasta innovaciones gastronómicas. 
          Disfruta de un ambiente acogedor y elegante, ideal para compartir con amigos y familiares o celebrar ocasiones especiales.
        </p>
        <p className="text-lg xl:text-base mb-6 mt-6 lg:mt-12">
          Ven y déjate sorprender por nuestro servicio excepcional y los sabores que nos hacen únicos. Ya sea que estés buscando una comida rápida o una cena gourmet, estamos aquí para ofrecerte lo mejor.
        </p>
        <button className="bg-red-500 text-white w-full lg:w-24 rounded-xl py-2 px-4 mt-14">Menú</button>
      </section>

      <section className="container-img flex flex-col items-center lg:items-end w-full lg:w-1/2 mt-6 lg:mt-0 lg:mr-16 relative">
        <img 
          className="rounded-3xl"
          width={400} 
          src="https://s3-alpha-sig.figma.com/img/d3d9/8440/69c4d06c1703ce6b2fc4d9dc3c7f4af8?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HIxy4m3mvpUZU4gb6dAuih6nJc0jMDXQsuB8MGlL0gzUkgGbIDB4FCTnAhr1URJhfoHd1StONXS9fSXUrFctvRRzR9eNS7jlSxjfFRY7vwyYkb8ONoKPBVsFps-~O9heB0P2zgvIIOXTUc7mJwlxKOM6vy8P5agP3nNp7wlZ6RGFS47TXlFmz3G3LbwjuDwb9JdlJQDaHw-64t6p8rPYEkchD-SM8rcyxmZq4iOHtTXMmxNeJ1Mle0mrF5fl9y3XJUaW8kEcMLiOn0x-~gkQiIuIM9jmDrBuRV2KAKaD-DwCnbQJXBmKyRk4QzoOemaR1Y4JUEVytfFDQBh3HwJ6bg__" 
          alt="Main Dish" 
        />
        <img 
          className="rounded-3xl absolute bottom-0 right-80 -translate-y-12"
          style={{zIndex: 1000}}
          width={300} 
          src="https://s3-alpha-sig.figma.com/img/36a5/65ce/b4374187c1aeb28ab74f90c3e0bbdc15?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CP~WcWRgqZ7vUCCIzW5O~O8ItGI35542sLn46d72ALOP9M9n2W8yT86VMuowHg7qvzJ15ElHkXUBfdm3pig8V0kNZ4g58kyaTK138aE9-YkQFJD3cQw32tKfuD2gYqaSsihHr4IbD26Mg7YtbKFNtftlN69MrEpa4kDrc9ppYttIt0yaGNzCYITEoX-lAhAFh2hikBgd1LBW9VaLWXwtX5REW~Dy3lIXdFO-IU7YkkOJp~BeQaZRnx6ii5ZrUrTZ7yzUBUs6sd7KM2bGO5ul5JAJ5R9PFIzfGwDje4Jo4iMsy689sianrqxXpiQYW3kr38z-3i-ymsCEhKa4mqgcsw__" 
          alt="Overlay Dish" 
        />
      </section>
    </div>
  );
};

export default Home;