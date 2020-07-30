import React from 'react';

function FormField({ type, name, label, value, onChange }) {
  return (
    <div>
      <label>
        {label}
        {type === 'textarea' ? (
          <textarea
            name={name}
            value={value}
            onChange={onChange}
          />
        ) : (
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
          />
        )}
        
      </label>
    </div>
  );
}

export default FormField;