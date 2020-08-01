import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import categoryRepository from '../../repositories/category';

function Home() {
  const [initialData, setInitialData] = useState([]);

  useEffect(() => {
    categoryRepository.getAllWithVideos()
      .then((categories) => {
        setInitialData(categories);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>

      {initialData.length === 0 && <div>Loading...</div>}

      {initialData.map((category, index) => {
        if (index === 0) {
          return (
            <>
              <BannerMain
                key="bannerMain"
                videoTitle={category.videos[0].name}
                url={category.videos[0].url}
                videoDescription="O que é Front-end? Trabalhando na área"
              />

              <Carousel
                key={category.id}
                ignoreFirstVideo
                category={category}
                cor={category.color}
              />
            </>
          );
        }

        return (
          <Carousel
            key={category.id}
            category={category}
            cor={category.color}
          />
        );
      })}

    </PageDefault>
  );
}

export default Home;
