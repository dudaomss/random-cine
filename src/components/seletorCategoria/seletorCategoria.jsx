import React, { useState, useEffect } from "react";
import BotaoSortear from '@/components/botaoSortear/botaoSortear.jsx';

const SeletorCategoria = ({ genres }) => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    setCategorias(genres);
  }, [genres]);

  const handleCategoryChange = (event) => {
    setSelectedCategoryId(event.target.value);
  };

  const [selectedCategoryId, setSelectedCategoryId] = useState('');

  return (
    <div className="categorias">
      <select menuplacement="bottom" value={selectedCategoryId} onChange={handleCategoryChange}>
        <option value="" disabled defaultValue hidden>
          Categoria
        </option>
        {categorias.map((element) => {
          return <option key={element.id} value={element.id}>{element.name}</option>;
        })}
      </select>
      {selectedCategoryId && <BotaoSortear genreId={selectedCategoryId} />}
    </div>
  );
};

export default SeletorCategoria;
