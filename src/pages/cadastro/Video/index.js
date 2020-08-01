import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videoRepository from '../../../repositories/video';
import categoryRepository from '../../../repositories/category';

function CadastroVideo() {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const categoryTitles = categories.map((category) => category.name);
  const { handleChange, values } = useForm({
    name: '',
    url: '',
    category: '',
  });

  useEffect(() => {
    categoryRepository
      .getAll()
      .then((response) => {
        setCategories(response);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <form onSubmit={(e) => {
        e.preventDefault();

        const selectedCategory = categories.find((category) => category.name === values.category);

        videoRepository.create({
          name: values.name,
          url: values.url,
          categoryId: selectedCategory.id,
        })
          .then(() => {
            history.push('/');
          });
      }}
      >
        <FormField
          type="text"
          name="name"
          label="Titulo do Vídeo:"
          value={values.name}
          onChange={handleChange}
        />

        <FormField
          type="text"
          name="url"
          label="URL:"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          type="text"
          name="category"
          label="Categoria:"
          value={values.category}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
