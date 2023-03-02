import React, { useState, useEffect } from "react";
import Image from 'next/image';
import {fetchMoviesByCategory, fetchImage, fetchProviders} from './../../api/axiosConfig'
import { useRouter } from 'next/router';
import BotaoSortearNovamente from "@/components/botaoSortearNovamente/botaoSortearNovamente";


const Sorteado = () => {
    const router = useRouter();
    const [random, setRandom] = useState({});
    const [imagem, setImagem] = useState('');
    const [providers, setProviders] = useState([]);

    const buscarFilmes = async () => {
        try {
          var filmes = await fetchMoviesByCategory(router.query);
          console.log(filmes.results,'filmes');
          const randomIndex = Math.floor(Math.random() * filmes.results.length);
          const randomElement = filmes.results[randomIndex];
          setRandom(randomElement);
          buscarImagem(randomElement.id);
          buscarProviders(randomElement.id);
        } catch (error) {
          console.error(error);
        }
      };

      const buscarImagem = async (Id) => {
        try {
            console.log(Id,'Id')
          var imagem = await fetchImage(Id);
          const imgPath = imagem.posters[0].file_path;
          const imageUrl = `https://image.tmdb.org/t/p/w500${imgPath}`;
          setImagem(imageUrl);
        } catch (error) {
          console.error(error);
        }
      };

      const buscarProviders = async (Id) => {
        try {
          var providers = await fetchProviders(Id);
          setProviders(providers.results.BR.flatrate)
        } catch (error) {
          console.error(error);
        }
      };
   
    useEffect(() => {      
        buscarFilmes();
      }, [router.query]);

    return (
        <>
          <div className="filme-sorteado">
            <div className="sinopse-container">
                <h1 className="titulo-filme">{random.title}</h1>
                <p className="sinopse">{random.overview}</p>
                <p className="sinopse">Disponível em: </p>
              <div className="plataformas-stream">
                {providers.map((element) => {
                return <Image 
                  key={element.provider_id} 
                  src={`https://image.tmdb.org/t/p/w500${element.logo_path}`} 
                  width={50} 
                  height={50} 
                    style={{
                        borderRadius: '50%',  
                    }}
                  />;
                })}
              </div>
            </div>
            <div className='imagem-sorteada-container'>
                <Image alt="Poster do filme" className='imagem-sorteada' src={imagem} width={500} height={750} />
                <BotaoSortearNovamente />
            </div>
          </div>
        </>
    )

}

export default Sorteado;