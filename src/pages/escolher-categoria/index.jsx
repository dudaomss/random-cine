import Image from 'next/image';
import Slide from '@/components/animation/slide.jsx';
import { fetchCategories } from '../../api/axiosConfig.js'
import CinemaImg from '../../img/cinema.png';
import SeletorCategoria from '@/components/seletorCategoria/seletorCategoria';
import { useEffect,useState } from 'react';

const EscolhaCategoria = () => {

    const [categorias, setCategorias] = useState([]);

    const buscarCategorias = async () => {
        try {
          var categorias = (await fetchCategories()).data.genres;
          setCategorias(categorias);
        } catch (error) {
          console.error(error);
        }
      };
   
    useEffect(() => {       
        buscarCategorias();
      }, []);

    return <>
        <Slide>
        <div className="imagem-categoria">
            <div className="Imagem">
                <Image src={CinemaImg} alt="Assistindo filme" width={500} height={500} className="imagem-cinema"/>
            </div>
            <div className="escolha-categoria">
                <p className="mensagem-categoria">qual categoria de filme você deseja assistir hoje?</p>
                <SeletorCategoria genres={categorias}/>              
            </div>
        </div>
        </Slide>
    </>
}

export default EscolhaCategoria;

