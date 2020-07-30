import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const initialState = {
    name: '',
    description: '',
    color: '',
  };

  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(initialState);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(e) {
    const { target } = e;
    setValue(target.getAttribute('name'), target.value);
  }

  useEffect(() => {
    const URL = 'http://localhost:3001/categorias';
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
        {values.name}
      </h1>

      <form onSubmit={function handleSubmit(e) {
        e.preventDefault();
        setCategories([
          ...categories, // Concatena os itens que já existem na collection
          values,
        ]);

        setValues(initialState);
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

        <Button>
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
