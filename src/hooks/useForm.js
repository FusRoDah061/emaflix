import { useState } from 'react';

function useForm(initialState) {
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

  function clearForm() {
    setValues(initialState);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;
