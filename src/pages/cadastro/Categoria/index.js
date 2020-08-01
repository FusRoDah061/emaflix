import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const initialState = {
    name: '',
    description: '',
    color: '',
  };

  const [categories, setCategories] = useState([]);
  const { handleChange, values, clearForm } = useForm(initialState);

  useEffect(() => {
    const URL = (window.location.href.includes('localhost')) ? 'http://localhost:3001/categories' : 'https://emaflix-api.herokuapp.com/categories';
    fetch(URL)
      .then(async (response) => {
        const json = await response.json();
        setCategories([
          ...json,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
      </h1>

      <form onSubmit={function handleSubmit(e) {
        e.preventDefault();
        setCategories([
          ...categories, // Concatena os itens que já existem na collection
          values,
        ]);

        clearForm();
      }}
      >

        <FormField
          type="text"
          name="name"
          label="Nome da Categoria:"
          value={values.name}
          onChange={handleChange}
        />

        <FormField
          type="textarea"
          name="description"
          label="Descrição:"
          value={values.description}
          onChange={handleChange}
        />

        <FormField
          type="color"
          name="color"
          label="Cor:"
          value={values.color}
          onChange={handleChange}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      {categories.length === 0 && (
        <div>Loading...</div>
      )}

      <ul>
        {categories.map((category) => (
          <li key={category.nome}>
            { category.name }
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
