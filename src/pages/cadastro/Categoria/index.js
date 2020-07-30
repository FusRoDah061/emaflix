import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria (){
  const initialState = {
    name: '',
    description: '',
    color: ''
  };

  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(initialState);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value
    });
  }

  function handleChange(e) {
    const { target } = e;
    setValue(target.getAttribute('name'), target.value);
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.name}</h1>

      <form onSubmit={function handleSubmit(e) {
        e.preventDefault();
        setCategories([
          ...categories, // Concatena os itens que já existem na collection
          values
        ]);

        setValues(initialState);
      }}>

        <FormField
          type="text"
          name="name"
          label="Nome da Categoria:"
          value={values.name}
          onChange={handleChange}
        />
          
        <FormField
          type="textarea"
          name='description'
          label='Descrição:'
          value={values.description}
          onChange={handleChange}
        />

        <FormField
          type="color"
          name='color'
          label='Cor:'
          value={values.color}
          onChange={handleChange}
        /> 

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categories.map((category, index) => {
          return (
            <li key={`${category}${index}`}>
              { category.name }
            </li>
          );
        })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;