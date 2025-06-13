import React from 'react';

const FormField = ({ 
  id, 
  name, 
  type = 'text', 
  label, 
  value, 
  onChange, 
  required = false,
  rows = null,
  className = ""
}) => {
  const inputClasses = `w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 ${className}`;

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium mb-1">
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={id}
          name={name}
          rows={rows || 4}
          value={value}
          onChange={onChange}
          className={inputClasses}
          required={required}
        />
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className={inputClasses}
          required={required}
        />
      )}
    </div>
  );
};

export default FormField;