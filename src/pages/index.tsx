import React from 'react';
import HomeBlockFour from '../components/Home/HomeBlockFour/HomeBlockFour';
import HomeBlockOne from '../components/Home/HomeBlockOne/HomeBlockOne';
import HomeBlockThree from '../components/Home/HomeBlockThree/HomeBlockThree';
import HomeBlockTwo from '../components/Home/HomeBlockTwo/HomeBlockTwo';
import SeoComponent from '../components/SeoComponent/SeoComponent';

const Home: React.FC = () => {
  return (
    <main>
      <SeoComponent
        title="Example"
        desc="Crie um website profissional, blog ou portfólio e ganhe destaque on-line."
        keywords="Criação de Websites, Blogs, Portfólio, Galeria de fotos e Site institucional"
        url="https://example.com.br/"
      />
      <HomeBlockOne />
      <HomeBlockTwo />
      <HomeBlockThree />
      <HomeBlockFour />
    </main>
  )
}

export default Home;