import React from 'react';
import Menu from './components/Menu';
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end? Trabalhando na área"} 
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
        cor={dadosIniciais.categorias[0].cor}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
        cor={dadosIniciais.categorias[1].cor}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
        cor={dadosIniciais.categorias[2].cor}
      />

      <Carousel
        category={dadosIniciais.categorias[3]}
        cor={dadosIniciais.categorias[3].cor}
      />

      <Carousel
        category={dadosIniciais.categorias[4]}
        cor={dadosIniciais.categorias[4].cor}
      />

      <Carousel
        category={dadosIniciais.categorias[5]}
        cor={dadosIniciais.categorias[5].cor}
      />

      <Footer />

    </div>
  );
}

export default App;
